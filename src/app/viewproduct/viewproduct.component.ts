import { Component, OnInit } from '@angular/core';
import { product_mod } from '../product_mod';
import { cat_mod } from '../cat_mod';
import { cat_pro_mod } from '../cat_pro_mod';
import { UsermodService } from '../usermod.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  i: number;
  index: number;
  p_id: number;
  pro_arr: product_mod[] = [];
  cat_pro_arr: cat_pro_mod[] = [];
  cat_pro: cat_pro_mod;
  img: string = '';
  name: string = '';
  mfg: string = '';
  qty: number;
  color: string = '';
  price: number;
  desc: string = '';

  onlclickpro(p_id) {
     this.p_id = p_id;
    this._ser.getProById(p_id).subscribe(
      (data: product_mod[]) => {
        console.log(data);
        this.pro_arr = data;
        this.img = data[0].p_img;
        this.name = data[0].p_name;
        this.mfg = data[0].p_mfg;
        this.qty = data[0].p_qty;
        this.color = data[0].p_color;
        this.price = data[0].p_price;
        this.desc = data[0].p_desc;
        this._ser.getProByCatId(data[0].fkcat_id).subscribe(
          (data: cat_pro_mod[]) => {
            this.cat_pro_arr = data;
          }
        );
        }
     );
  }

  constructor(private _actroute: ActivatedRoute, private _ser: UsermodService, private _router: Router) { }


  ngOnInit() {
    //this.p_id=this._actroute.snapshot.params['id'];
    this._actroute.params.subscribe(
      (x: Params) => {
        this.p_id = x['id'];
      }
    );
    this._ser.getProById(this.p_id).subscribe(
      (data: product_mod[]) => {
        console.log(data);
        this.pro_arr = data;
        this.img = data[0].p_img;
        this.name = data[0].p_name;
        this.mfg = data[0].p_mfg;
        this.qty = data[0].p_qty;
        this.color = data[0].p_color;
        this.price = data[0].p_price;
        this.desc = data[0].p_desc;
        this._ser.getProByCatId(data[0].fkcat_id).subscribe(
          (data: cat_pro_mod[]) => {
            this.cat_pro_arr = data;
          }
        );


      }
    );
  }

}
