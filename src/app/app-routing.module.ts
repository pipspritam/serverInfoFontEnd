import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServersComponent } from './get-servers/get-servers.component';
import { IndexComponent } from './index/index.component';
import { AddServerComponent } from './add-server/add-server.component';
import { GetServerByidComponent } from './get-server-byid/get-server-byid.component';

const routes: Routes = [{path: "",redirectTo:'index',pathMatch:'full'},
{path: 'getServsrs', component: GetServersComponent},
{ path: 'index', component: IndexComponent},
{ path: 'addServer', component: AddServerComponent},
{ path: 'getServerByid', component: GetServerByidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
