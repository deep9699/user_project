import { Component, OnInit } from '@angular/core';
import { product_mod } from '../product_mod';
import { cat_mod } from '../cat_mod';
import { cat_pro_mod } from '../cat_pro_mod';
import { UsermodService } from '../usermod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cat_arr:cat_mod[]=[];
  pro_arr:product_mod[]=[];
  cat_pro_arr:cat_pro_mod[]=[];

  constructor(private _ser:UsermodService,private _router:Router) { }

onclickcat(cat_name:string)
{
this._ser.getProByCat(cat_name).subscribe(
  (data:cat_pro_mod[])=>
  {
    this.pro_arr=data;

  }
);
}
onlclickpro(p_id)
{
this._ser.getProById(p_id).subscribe(
  (data:product_mod[])=>
  {
  this._router.navigate(['viewpro',p_id]);
  }
);
}
  ngOnInit() {
    this._ser.getAllCat().subscribe(
      (data:cat_mod[])=>
      {
        this.cat_arr=data;
      }
    );
    this._ser.getAllPro().subscribe(
      (data:product_mod[])=>
      {
        this.pro_arr=data;
      }
    )
  }

}
