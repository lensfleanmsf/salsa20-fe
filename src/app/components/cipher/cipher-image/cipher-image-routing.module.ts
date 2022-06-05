import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherImageComponent } from './cipher-image.component';

const routes: Routes = [{ path: '', component: CipherImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherImageRoutingModule {}
