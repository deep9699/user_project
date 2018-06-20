import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
email_id:string=localStorage.getItem('email_id');
user_name:string;
  onclickhome()
  {
    this._router.navigate(['/pro']);
  }
  onclickpass()
  {
    this._router.navigate(['/pass']);
  }
  onclickview()
  {
    this._router.navigate(['/viewuser']);
  }
  onclickupdate()
  {
    this._router.navigate(['/update']);
  }
  onclicklogout()
  {
    localStorage.clear();
    this._router.navigate(['/']);
  }
  constructor(private _router:Router,private _ser:UsermodService) { }

  ngOnInit() {
  this._ser.getAllUsermodById(this.email_id).subscribe(
    (data:user_mod[])=>
    {
      this.user_name=data[0].user_name;
    }
  );
  }

}
