import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details.component';

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    IonicModule,
    CommonModule,
	RouterModule,
  ],
  exports: [AccountDetailsComponent],
})
export class AccountDetailsModule { }