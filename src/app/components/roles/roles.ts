import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
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
  slectedState: string = '';

  showWelcomeAlert()
  {
    alert("Welcome to Angular learning project");
  }

  showMessage(message: string)
  {
    alert(message);
  }
}
