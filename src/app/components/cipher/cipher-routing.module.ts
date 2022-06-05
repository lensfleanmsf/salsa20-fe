import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherComponent } from './cipher.component';

const routes: Routes = [
  { path: '', component: CipherComponent },
  {
    path: 'text',
    loadChildren: () =>
      import('./cipher-text/cipher-text.module').then(
        (m) => m.CipherTextModule
      ),
  },
  {
    path: 'image',
    loadChildren: () =>
      import('./cipher-image/cipher-image.module').then(
        (m) => m.CipherImageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherRoutingModule {}
