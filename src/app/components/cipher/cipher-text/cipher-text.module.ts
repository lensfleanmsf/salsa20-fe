import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherTextRoutingModule } from './cipher-text-routing.module';
import { CipherTextComponent } from './cipher-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CipherTextComponent],
  imports: [
    CommonModule,
    CipherTextRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class CipherTextModule {}
