import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CipherRoutingModule } from './cipher-routing.module';
import { CipherComponent } from './cipher.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CipherComponent],
  imports: [CommonModule, CipherRoutingModule, MatButtonModule],
})
export class CipherModule {}
