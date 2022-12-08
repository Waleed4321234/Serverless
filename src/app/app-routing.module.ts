import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddfriendmodalComponent } from './addfriendmodal/addfriendmodal.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:'search/:searchitem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'carts',component:CartsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'addnewitem',component:AddfriendmodalComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
