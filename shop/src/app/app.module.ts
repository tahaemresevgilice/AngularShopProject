import { LoginGuard } from './login/login.guard';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategotyComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddForms1Component } from './product/product-add-forms-1/product-add-forms-1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { AlertifyService } from './services/alertify.service';
import { AccountService } from './login/account.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategotyComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService,AccountService,LoginGuard,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
