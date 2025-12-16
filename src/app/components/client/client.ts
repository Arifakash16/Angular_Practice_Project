import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientModel } from '../../Model/Class/ClientModel';
import { ClientService } from '../../Services/client-service';
import { APIResponseModal } from '../../Model/Interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
         console.log("arif = ", this.clientList);
      });
   }

   onDelete(id: number)
   {
      const isDelete = confirm("Are you sure want to delete?")
      if(isDelete)
      {
          this.clientServices.deleteClientById(id).subscribe((res:  APIResponseModal) =>{
          if(res.result){
            alert("Client deleted successfully");
            this.loadClient();
          }
          else{
            alert(res.message);
          }
        });
      }
      
   }

   onEdit(data: ClientModel)
   {
      this.clientObj = data;
   }
}
