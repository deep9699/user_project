import { Component, OnInit } from '@angular/core';
import { UsermodService } from '../usermod.service';
import { user_mod } from '../user_mod';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  email_id: string;
  password: string;
  user_name: string;
  mobile_no: string;
  city: string;
  gender: string;
  address: string;
  arr: user_mod[] = [];
  constructor(private _route: Router, private _ser: UsermodService, private _actrouter: ActivatedRoute) { }

  onback() {
    this._route.navigate(['']);
  }
  onup() {

    this._route.navigate(['update', this.email_id]);


  }
  onpass()
  {
    this._route.navigate(['pass',this.email_id])
  }

  ngOnInit() {
    this.email_id = this._actrouter.snapshot.params['id'];
    this._ser.getAllUsermodById(this.email_id).subscribe(
      (data: user_mod[]) => {
        console.log(data);
        this.email_id = data[0].email_id;
        this.password = data[0].password;
        this.user_name = data[0].user_name;
        this.mobile_no = data[0].mobile_no;
        this.city = data[0].city;
        this.gender = data[0].gender;
        this.address = data[0].address;
      }
    )
  }

}
