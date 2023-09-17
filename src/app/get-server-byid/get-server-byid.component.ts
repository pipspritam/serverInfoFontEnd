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
  
    showresult:boolean=false
    noresult:boolean=false
    info: any;
    constructor(private httpclient: HttpClient, public serverInfo: serverInfo, public serverServices: ServerServicesService) { }
    getServerByid() {
      this.serverServices.getServerById(this.serverInfo.id).subscribe((res:any) => {
        console.log(res)
        this.info=res;
     },
     (error) => {
      if (error.status === 404) {
          console.log("Resource not found");
      } 
      else {
          console.error("An error occurred:", error);
      }
      this.noresult=true
  }
     );

      this.showresult=true;
    }
    keepOrder = (a:any, b:any) => {
      return a;
  }
}