import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServersComponent } from './get-servers/get-servers.component';
import { IndexComponent } from './index/index.component';
import { AddServerComponent } from './add-server/add-server.component';
import { GetServerByidComponent } from './get-server-byid/get-server-byid.component';
import { DeleteServerComponent } from './delete-server/delete-server.component';
import { GetServerByNameComponent } from './get-server-by-name/get-server-by-name.component';

const routes: Routes = [{path: "",redirectTo:'index',pathMatch:'full'},
{path: 'getServsrs', component: GetServersComponent},
{ path: 'index', component: IndexComponent},
{ path: 'addServer', component: AddServerComponent},
{ path: 'getServerByid', component: GetServerByidComponent},
{ path: 'deleteServer', component: DeleteServerComponent},
{ path: 'getServerByName', component: GetServerByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
