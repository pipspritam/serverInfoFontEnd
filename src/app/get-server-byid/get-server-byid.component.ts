import { Component } from '@angular/core';
import { serverInfo } from '../_model/serverInfo';
import { HttpClient } from '@angular/common/http';
import { ServerServicesService } from '../_service/server-services.service';

@Component({
  selector: 'app-get-server-byid',
  templateUrl: './get-server-byid.component.html',
  styleUrls: ['./get-server-byid.component.css']
})
export class GetServerByidComponent {
  
    info: any;
    id: string = "123";
    constructor(private httpclient: HttpClient, public serverInfo: serverInfo, public serverServices: ServerServicesService) { }
    getServerByid() {
      this.serverServices.getServerById(this.id).subscribe((data) => this.info = data);
    }
}
