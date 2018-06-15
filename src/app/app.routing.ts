import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { EditpassComponent } from './editpass/editpass.component';

const arr:Routes=[
{path:'',component:LoginComponent},
{path:'viewuser/:id',component:ViewuserComponent},
{path:'forget',component:ForgetComponent},
{path:'signup',component:SignupComponent},
{path:'update/:id',component:UpdateComponent},
{path:'pass/:id',component:EditpassComponent}
];

export const routing=RouterModule.forRoot(arr);