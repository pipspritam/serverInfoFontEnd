import { Component } from '@angular/core';
import { ServerServicesService } from '../_service/server-services.service';
import { serverInfo } from '../_model/serverInfo';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {
  constructor(public serverInfo: serverInfo, public serverServices: ServerServicesService) { }
  successmessage: boolean = false;
  noresult: boolean = false;
  duplicate: boolean = false;
  info: any;


  back() {
    this.serverInfo.id = "";
    this.serverInfo.name = "";
    this.serverInfo.language = "";
    this.serverInfo.framework = "";
    this.successmessage = false
    this.noresult = false
    this.duplicate = false
  }

  onClickSubmit() {

    this.serverServices.addServers(this.serverInfo).subscribe((data: any) => {
      if (data.id == "") {
        this.noresult = true
        this.successmessage = false
        this.duplicate = false

      }
      else if (data.id == "___") {
        this.noresult = false
        this.successmessage = false
        this.duplicate = true
      }
      else {
        this.serverInfo.id = "";
        this.serverInfo.name = "";
        this.serverInfo.language = "";
        this.serverInfo.framework = "";
        this.successmessage = true
        this.noresult = false
        this.duplicate = false
      }
    }, error => console.log(error))
  }
}