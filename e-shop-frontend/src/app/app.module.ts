import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/component/login.component';
import {HomeComponent} from './home/component/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './registration/component/registration.component';
import {FieldErrorMessageComponent} from './field-error-message/field-error-message.component';
import {ProductComponent} from './product/component/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HeaderComponent} from './header/header.component';
import {ProductService} from "./services/product.service";
import { CarouselProductComponent } from './product-list/carousel/carousel-product/carousel-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    FieldErrorMessageComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CarouselProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
