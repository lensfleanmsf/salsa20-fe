import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Cipher',
    loadChildren: () =>
      import('./components/cipher/cipher.module').then((m) => m.CipherModule),
  },
  {
    path: 'cipher',
    title: 'Cipher',
    loadChildren: () =>
      import('./components/cipher/cipher.module').then((m) => m.CipherModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
