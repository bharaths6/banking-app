import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClientHeaderComponent } from './client-header.component';

@NgModule({
  declarations: [ClientHeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [ClientHeaderComponent],
})
export class ClientHeaderModule { }