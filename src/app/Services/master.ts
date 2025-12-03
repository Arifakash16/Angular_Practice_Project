import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModal } from '../Model/Interface/role';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http : HttpClient){}

  getDesignations():Observable<APIResponseModal>
  {
    return this.http.get<APIResponseModal>("/api/ClientStrive/GetAllDesignation");
  }
}
