import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../components/client/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModal } from '../Model/Interface/role';
import { ClientModel } from '../Model/Class/ClientModel';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient){}
  getAllClients() : Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>(environment.API_URL + "GetAllClients");
  }

  addUpdate(obj: ClientModel) : Observable<APIResponseModal>{
    return this.http.post<APIResponseModal>(environment.API_URL + "AddUpdateClient", obj);
  }

   deleteClientById(id: number) : Observable<APIResponseModal>{
    return this.http.delete<APIResponseModal>(environment.API_URL + "DeleteClientByClientId?clientId=" + id);
  }
}
