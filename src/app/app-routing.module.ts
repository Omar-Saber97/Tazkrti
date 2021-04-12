import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignupComponent } from './components/+auth/signup/signup.component';
import { ProductDetailsComponent } from './components/+product/product-details/product-details.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { ShowcategoryComponent } from './components/showcategory/showcategory.component';
const routes: Routes = [
  {
    path: 'main-header',
    loadChildren: () =>
      import(`./components/main-header/main-header.module`).then(
        (m) => m.MainHeaderModule
      ),
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'allcategory', component: AllCategoryComponent
  },
  {
    path: 'showcategory', component: ShowcategoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
