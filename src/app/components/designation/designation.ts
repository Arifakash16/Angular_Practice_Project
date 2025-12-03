import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../Services/master';
import { APIResponseModal, IDesignation } from '../../Model/Interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation implements OnInit {
  designationList : IDesignation [] = [];
  isLoader: boolean = true;
  masterService = inject(Master);
  
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModal)=>{
      this.designationList = result.data;
      this.isLoader = false;
    }, error=>{
      alert("API error / Network Down");
      this.isLoader = false;
    })
  }
}
