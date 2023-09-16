import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServersComponent } from './get-servers/get-servers.component';

const routes: Routes = [{path: "",redirectTo:'getServers',pathMatch:'full'},{path: 'getServsrs', component: GetServersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
