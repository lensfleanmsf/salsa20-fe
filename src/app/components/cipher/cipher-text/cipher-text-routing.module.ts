import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherTextComponent } from './cipher-text.component';

const routes: Routes = [{ path: '', component: CipherTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CipherTextRoutingModule { }
