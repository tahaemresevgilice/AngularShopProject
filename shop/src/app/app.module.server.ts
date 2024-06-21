import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
