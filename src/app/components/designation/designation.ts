import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../Services/master';
import { APIResponseModal, IDesignation } from '../../Model/Interface/role';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation implements OnInit {
  designationList : IDesignation [] = [];
  masterService = inject(Master);
  
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModal)=>{
      this.designationList = result.data;
    }, error=>{
      alert("API error / Network Down");
    })
  }
}
