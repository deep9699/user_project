import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user_mod } from './user_mod';

@Injectable({
  providedIn: 'root'
})
export class UsermodService {
private url:string='http://localhost:3000/usermod/';
private url1:string='http://localhost:3000/usermod1/';
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

}
