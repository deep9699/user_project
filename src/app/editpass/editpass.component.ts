import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-editpass',
  templateUrl: './editpass.component.html',
  styleUrls: ['./editpass.component.css']
})
export class EditpassComponent implements OnInit {

  email_id:string;
 oldpassword:string;
  newpassword:string;
  confirmpassword:string;
  
  arr:user_mod[]=[];
  constructor(private _router:Router,private _ser:UsermodService,private _actrouter:ActivatedRoute) { }

 onclickok()
 {
   if(this.oldpassword==this.arr[0].password)
   {
     if(this.newpassword==this.confirmpassword)
     {
       this._ser.updatepass(new user_mod(this.email_id,this.newpassword)).subscribe(
         (data)=>
         {
           this._router.navigate(['viewuser',this.email_id]);
         }
       );
     }
   }
 }
  ngOnInit() {
    this.email_id=this._actrouter.snapshot.params['id'];
    this._ser.getAllUsermodById(this.email_id).subscribe(
      (data:any[])=>
      {
        this.arr=data;
        this.email_id=data[0].email_id;
      }
    );

  }

}
