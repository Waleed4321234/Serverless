import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Mypipe } from './mypipe';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartsComponent } from './carts/carts.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnlessDirective } from './unless.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddfriendmodalComponent } from './addfriendmodal/addfriendmodal.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    Mypipe,
    CartsComponent,
    LoginComponent,
    DashboardComponent,
    UnlessDirective,
    CheckoutComponent,
    AddfriendmodalComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UnlessDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
