import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  city:string;
  gender:string;
  address:string;
  arr:user_mod[]=[];
  
  constructor(private _ser:UsermodService,private _router:Router) { }

  onsign()
  {
    if(this.email_id!='' && this.password!='' && this.user_name!='' && this.mobile_no!='' && this.city!='' && this.gender!='' && this.address)
    {
    this._ser.addUsermod(new user_mod(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
      (data:any[])=>
      {
        alert('sign up successfully');
        this._router.navigate(['']);
      }
    );
  }
  else
  {
    alert('pls fill all the field');
  }
  } 
  onback()
  {
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
