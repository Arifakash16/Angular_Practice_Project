import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientModel } from '../../Model/Class/ClientModel';
import { ClientService } from '../../Services/client-service';
import { APIResponseModal } from '../../Model/Interface/role';


@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
   clientObj: ClientModel = new ClientModel();
   clientList: ClientModel[] = [];
   clientServices = inject(ClientService);

   ngOnInit():void{
      this.loadClient();
   }
   onSaveClient()
   {
      debugger;
      this.clientServices.addUpdate(this.clientObj).subscribe((res:  APIResponseModal) =>{
        if(res.result){
          alert("Client created successfully");
          this.loadClient();
        }
        else{
          alert(res.message);
        }
      });
   }

   loadClient()
   {
      this.clientServices.getAllClients().subscribe((res:  APIResponseModal) =>{
        this.clientList = res.data;
      });
   }
}
