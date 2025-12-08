import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientModel } from '../../Model/Class/ClientModel';


@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
   clientObj: ClientModel = new ClientModel();
   clientList: ClientModel[] = [];
}
