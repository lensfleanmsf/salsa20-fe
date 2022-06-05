import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherRoutingModule } from './cipher-routing.module';
import { CipherComponent } from './cipher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CipherComponent],
  imports: [CipherRoutingModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule],
})
export class CipherModule {}
