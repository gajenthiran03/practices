import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },

  {
    path:'user',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },

  {
    path: '**',
    redirectTo: 'PageNotFoundComponent',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
