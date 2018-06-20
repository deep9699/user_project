import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user_mod } from './user_mod';
import { product_mod } from './product_mod';
import { cat_mod } from './cat_mod';
import { cat_pro_mod } from './cat_pro_mod';



@Injectable({
  providedIn: 'root'
})
export class UsermodService {
private url:string='http://localhost:3000/usermod/';
private url1:string='http://localhost:3000/usermod1/';
private url2:string='http://localhost:3000/cat/';
private url3:string='http://localhost:3000/pro/';
private url4:string='http://localhost:3000/catpro/';
  constructor(private _http:HttpClient) { }
  getUsermodLogin(item:user_mod){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getAllUsermodById(id)
  {
    return this._http.get(this.url+id)
  }
  addUsermod(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.url1,body,{headers:head1});
  }
  updateUsermod(id,item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+id,body,{headers:head1});
  }
  updatepass(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }
  getAllCat()
  {
    return this._http.get(this.url2);
  }
  getAllPro()
  {
    return this._http.get(this.url3);
  }
  getProByCat(cat_name)
  {
    return this._http.get(this.url3+cat_name);
  }
  getProById(p_id)
  {
    return this._http.get(this.url2+p_id);
  }
  getProByCatId(cat_id)
  {
    return this._http.get(this.url4+cat_id);
  }
}
