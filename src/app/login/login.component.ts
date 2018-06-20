import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user_mod } from '../user_mod';
import { UsermodService } from '../usermod.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
arr:user_mod[]=[];
email_id:string;
password:string;

  constructor(private _ser:UsermodService,private _router:Router) { }
  onclicklogin()
  {
    console.log(this.email_id,this.password);
    this._ser.getUsermodLogin(new user_mod(this.email_id,this.password)).subscribe(
      (data:any[])=>
      {
        console.log(data);
        if(data.length==1)
        {
          localStorage.setItem('email_id',this.email_id);
          this._router.navigate(['/pro']);
        }
        else
        {
          alert('Email_Id or Password is Incorrect . ');
        }
        
      }
    );
  }

  onclickforgot()
  {
    this._router.navigate(['/forget']);
  }
  onclicknew()
  {
    this._router.navigate(['/signup']);
  }
  onclickcancel()
  {
    this.email_id='';
    this.password='';
  }
  ngOnInit() {

  }

}
