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
  onClickSubmit() {

    console.log(this.serverInfo);
    this.serverServices.addServers(this.serverInfo).subscribe((response: any) => console.log("Data Added Successfully"));



  }
}
