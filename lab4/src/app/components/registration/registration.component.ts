import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    age: new FormControl('',[Validators.required,Validators.min(10),Validators.max(30)]),
    email: new FormControl('',[Validators.required,Validators.email]),
  });

  valid: boolean | null = null;

  getData(){
    console.log(this.regForm.valid);
    if(this.regForm.invalid){
      console.log('Invalid Form');
      this.valid = false;
      return;
    }
    console.log('Form is valid');
    this.valid = true;
  }


  get nameValid(){
    return this.regForm.controls['name'].valid;
  }

  get ageValid(){
    return this.regForm.controls['age'].invalid;
  }
  get emailValid(){
    return this.regForm.controls['email'].invalid;
  }

  isValid(){
    return this.valid;
  }

}
