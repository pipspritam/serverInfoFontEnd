import { Component } from '@angular/core';
import { serverInfo } from '../_model/serverInfo';
import { ServerServicesService } from '../_service/server-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-server',
  templateUrl: './delete-server.component.html',
  styleUrls: ['./delete-server.component.css']
})
export class DeleteServerComponent {
  info: any;
  noresult: boolean = false;
  successmessage: boolean = false;
  constructor(public serverInfo: serverInfo, public serverServices: ServerServicesService, public router: Router) { }
  ngOnInit() {

    this.serverServices.getServers().subscribe((data) => {
      this.info = data
    });

  }
  deleteServerByid() {
    this.serverServices.deleteServer(this.serverInfo.id)
      .subscribe((res: any) => {
        if (res.id == "") {
          this.noresult = true;
          this.successmessage = false;
        }
        else {
          this.serverServices.getServers().subscribe((data) => {
            this.info = data
          });
          this.noresult = false;
          this.successmessage = true;
          this.serverInfo.id = "";
        }


      })

  }

}