import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../Model/Interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit {
  
  roleList : IRole [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles()
  {
    this.http.get("/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.roleList = res.data;
    })
  }










  // firstName: string = "Angular Learn";
  // angularVersion = "version-24";
  // version: number = 24;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "radio";
  // slectedState: string = '';

  // showWelcomeAlert()
  // {
  //   alert("Welcome to Angular learning project");
  // }

  // showMessage(message: string)
  // {
  //   alert(message);
  // }
}
