import { HttpClient } from '@angular/common/http';
import { serverInfo } from '../_model/serverInfo';
import { Component } from '@angular/core';
import { ServerServicesService } from '../_service/server-services.service';

@Component({
  selector: 'app-get-server-by-name',
  templateUrl: './get-server-by-name.component.html',
  styleUrls: ['./get-server-by-name.component.css']
})
export class GetServerByNameComponent {
  showresult: boolean = false
  noresult: boolean = false
  info: any;
  constructor(private httpclient: HttpClient, public serverInfo: serverInfo, public serverServices: ServerServicesService) { }
  getServerByName() {
    this.serverServices.getServerByName(this.serverInfo.name).subscribe((res: any) => {
      this.info = res;
      this.showresult = true;
      this.noresult = false;
    },
      (error) => {
        if (error.status === 404) {
          console.log("Resource not found");
        }
        else {
          console.error("An error occurred:", error);
        }
        this.showresult = false;
        this.noresult = true

      });
    this.serverInfo.name = ""

  }
  keepOrder = (a: any, b: any) => {
    return a;
  }

  back() {
    this.serverInfo.name = "";
    this.showresult = false;
    this.noresult = false;
  }
}
