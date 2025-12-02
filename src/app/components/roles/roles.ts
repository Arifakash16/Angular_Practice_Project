import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  firstName: string = "Angular Learn";
  angularVersion = "version-24";
  version: number = 24;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "radio";
}
