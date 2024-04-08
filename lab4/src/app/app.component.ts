import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegistrationComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Students:{name:string,age:number}[]=[];

  getData(e:any){

    if(e.name.length<3 ||+e.age<10 || +e.age>30){
      return;
    }
    this.Students.push(e);
    console.log(this.Students);
  }

}
