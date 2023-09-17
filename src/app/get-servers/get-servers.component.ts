import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverInfo } from '../_model/serverInfo';
import { ServerServicesService } from '../_service/server-services.service';

@Component({
  selector: 'app-get-servers',
  templateUrl: './get-servers.component.html',
  styleUrls: ['./get-servers.component.css']
})
export class GetServersComponent {
  info: any;
  constructor(private httpclient: HttpClient, public serverInfo: serverInfo, public serverServices: ServerServicesService) { }
  ngOnInit() {

    this.serverServices.getServers().subscribe((data) =>{

      this.info = data
    } );
    
  }

  back() {
    this.serverInfo.id = "";
  }
}