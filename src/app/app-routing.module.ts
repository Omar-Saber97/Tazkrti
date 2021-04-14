import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignupComponent } from './components/+auth/signup/signup.component';
//import { ProductDetailsComponent } from './components/+product/product-details/product-details.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PopularComponent } from './components/homepage/popular/popular.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShowcategoryComponent } from './components/showcategory/showcategory.component';
import { AddressComponent } from './components/user-properties/address/address.component';
import { OrdersComponent } from './components/user-properties/orders/orders.component';
import { UserPropertiesComponent } from './components/user-properties/user-properties.component';
import { WishListsComponent } from './components/user-properties/wish-lists/wish-lists.component';
const routes: Routes = [
  {
    path: 'main-header',
    loadChildren: () =>
      import(`./components/main-header/main-header.module`).then(
        (m) => m.MainHeaderModule
      ),
  },
  {path:"",component:HomepageComponent}
  ,
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signUp', component: SignupComponent
  },
  {
    path: 'allcategory', component: AllCategoryComponent
  },
 
  {path:'t',component:PopularComponent},
  {path:'filter/:subcateName',component:FilterComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {
    path: 'Fashion/:cateID', component: ShowcategoryComponent
  },
  {
    path: 'Supermarket/:cateID', component: ShowcategoryComponent
  },
  {
    path: 'Electronics/:cateID', component: ShowcategoryComponent
  },
  
  {
    path: 'Kitchen/:cateID', component: ShowcategoryComponent
  }
  ,
  {
    path: 'Appliance/:cateID', component: ShowcategoryComponent
  }
  ,
  {
    path: 'Beauty/:cateID', component: ShowcategoryComponent
  }
  ,
  {
    path: 'Babies/:cateID', component: ShowcategoryComponent
  },
  {
    path: 'Sports/:cateID', component: ShowcategoryComponent
  },
  {
    path: 'Automotive/:cateID', component: ShowcategoryComponent
  },
  
  {
    path: 'Office/:cateID', component: ShowcategoryComponent
  },
  {
    path:'user-properties',component:UserPropertiesComponent,
    children:[
      {path:'orders/:id',component:OrdersComponent },
      {path: 'shipping-address/:id',component: AddressComponent},
      {path:'wish-lists/:id',component:WishListsComponent}]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
