import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  email_id:string;
  mobile:string;
  password:string;
  flag:boolean=false;
  constructor(private _router:Router,private _ser:UsermodService) { }

  ngOnInit() {
  
  }
  onclickok()
  {
    this._ser.getAllUsermodById(this.email_id).subscribe(
      (data:any[])=>
      {
        if(data.length>0)
        {
          if(this.mobile==data[0].mobile_no)
          {
            this.flag=true;
            this.password=data[0].password;
          }
          else
          {
            alert('mobile no is incorrect');
          }
        }
        else
        {
          alert('Email Id is incorrect');
        }
       
      }
    );
  }
  onclickCancel()
  {
    this._router.navigate(['']);
  }

}
