import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { CONST } from 'src/app/constants';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        public auth: AuthenticateService,
        public toastController: ToastController,
    ) { }

    async presentToast(msg) {
        const toast = await this.toastController.create({
        message: msg,
        duration: 2000,
        position: 'top'
        });
        toast.present();
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const idToken = this.auth.idToken;

        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });

        if (idToken && request.url.includes(CONST.MOMENTUM_RETAIL)) {
            request = request.clone({
                setParams: {
                    auth: idToken
                }
            });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.handleLoginErrResp(error)
                return throwError(error);
            })
        );
    }

    handleLoginErrResp(error) {
        this.presentToast(CONST.MESSAGES.LOGIN_FAIL);
    }
}
