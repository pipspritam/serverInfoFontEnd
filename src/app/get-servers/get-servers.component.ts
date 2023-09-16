import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-servers',
  templateUrl: './get-servers.component.html',
  styleUrls: ['./get-servers.component.css']
})
export class GetServersComponent {
  info:any;
  constructor(private httpclient: HttpClient) { }
  ngOnInit(){
   let response= this.httpclient.get("http://127.0.0.1:8081/getServers");
   response.subscribe((data)=>this.info=data);

  }

}
