import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  city:string;
  gender:string;
  address:string;
  arr:user_mod[]=[];
    constructor(private _route:Router,private _ser:UsermodService,private _actrouter:ActivatedRoute) { }
  
onsave()
{
  this._ser.updateUsermod(this.email_id,new user_mod(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any[])=>
    {
      this._route.navigate(['pro']);
    }
  );
}
onback()
{
  this._route.navigate(['pro']);
}

  ngOnInit(){ 
    this.email_id=localStorage.getItem('email_id');
  this._ser.getAllUsermodById(this.email_id).subscribe(
    (data:user_mod[])=>
    {
      console.log(data);
      this.email_id=data[0].email_id;
      this.password=data[0].password;
      this.user_name=data[0].user_name;
      this.mobile_no=data[0].mobile_no;
      this.city=data[0].city;
      this.gender=data[0].gender;
      this.address=data[0].address;
    }
  )
}

}
