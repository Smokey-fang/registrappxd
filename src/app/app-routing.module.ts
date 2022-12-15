import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: () =>import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'register',
    loadChildren: () =>import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'ressetpassword',
    loadChildren: () => import('./pages/ressetpassword/ressetpassword.module').then( m => m.RessetpasswordPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verifyemail/verifyemail.module').then( m => m.VerifyemailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
