import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverInfo } from '../_model/serverInfo';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {
  baseUrl="http://127.0.0.1:8081";
  constructor(public httpclientobj:HttpClient) { 

  }
  getServers(){
    let url=this.baseUrl+"/getServers";
    return this.httpclientobj.get(url);
  }

  addServers(serverInfo:serverInfo){
    let url=this.baseUrl+"/addServer";
    return this.httpclientobj.post(url,serverInfo);
  }

  getServerById(id:string){
    let url=this.baseUrl+"/getServerByid/"+id;
    return this.httpclientobj.get(url);
  }

  deleteServer(id:string){
    let url=this.baseUrl+"/deleteServer/"+id;
    return this.httpclientobj.delete(url);
  }
}
