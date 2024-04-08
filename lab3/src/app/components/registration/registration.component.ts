import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name='';
  age='';

  @Output() myEvent= new EventEmitter();
  addStudent(){
    if(this.name.length<3 ||+this.age<10 || +this.age>30){
      return;
    }
    this.myEvent.emit({name:this.name,age:+this.age});
    this.name='';
    this.age='';
  }
}
