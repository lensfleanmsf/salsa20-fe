import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherImageRoutingModule } from './cipher-image-routing.module';
import { CipherImageComponent } from './cipher-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CipherImageComponent],
  imports: [
    CommonModule,
    CipherImageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CipherImageModule {}
