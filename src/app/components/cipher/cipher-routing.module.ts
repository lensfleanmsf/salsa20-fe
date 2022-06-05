import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherComponent } from './cipher.component';

const routes: Routes = [{ path: '', component: CipherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherRoutingModule {}
