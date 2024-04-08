import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];
