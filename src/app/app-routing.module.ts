import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'withdraw', loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)},
  { path: 'deposit', loadChildren: () => import('./pages/deposit/deposit.module').then( m => m.DepositPageModule)},
  { path: 'create', loadChildren: './pages/create/create.module#CreatePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
