import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetServersComponent } from './get-servers/get-servers.component';
import { serverInfo } from './_model/serverInfo';
import { IndexComponent } from './index/index.component';
import { AddServerComponent } from './add-server/add-server.component';
import { GetServerByidComponent } from './get-server-byid/get-server-byid.component';

@NgModule({
  declarations: [
    AppComponent,
    GetServersComponent,
    IndexComponent,
    AddServerComponent,
    GetServerByidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [serverInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
