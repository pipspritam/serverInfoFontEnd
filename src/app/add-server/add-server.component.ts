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
  info: any;

  onClickSubmit() {
    console.log(this.serverInfo)
    this.serverServices.addServers(this.serverInfo)
      .subscribe((res: any) => {
        console.log("Data Added Successfully")
      },
        (error) => {
          if (error.status === 200) {
            console.log("OK");
          }
          else {
            console.error("An error occurred:", error);
          }
          this.serverInfo.id = "";
          this.serverInfo.name = "";
          this.serverInfo.language = "";
          this.serverInfo.framework = "";
          this.successmessage = true
        }

      );

  }
}