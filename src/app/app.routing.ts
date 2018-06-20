import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { EditpassComponent } from './editpass/editpass.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const arr:Routes=[
{path:'',component:LoginComponent},
{path:'viewuser',component:ViewuserComponent},
{path:'forget',component:ForgetComponent},
{path:'signup',component:SignupComponent},
{path:'update',component:UpdateComponent},
{path:'pass',component:EditpassComponent},
{path:'pro',component:ProductComponent},
{path:'viewpro/:id',component:ViewproductComponent}
];

export const routing=RouterModule.forRoot(arr);