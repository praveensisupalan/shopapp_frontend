import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopAppService {
  private token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }


  signup(info:any){
    const header = new Headers({
      'Content-Type':'application/json'
    });
    let options:any={
      headers : header
    }
    return this.http.post(`http://127.0.0.1:8000/shopapi/user/create/`,info,options)
  }

  login_fun(info: any) {
    const header = new Headers({
      'Content-Type':'application/json'
    });
    let options:any={
    headers :header
    }

    return this.http.post(`http://127.0.0.1:8000/shopapi/user/login/`,info, options)
    
    }


addShop(formdata:any){
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   return this.http.post(`http://127.0.0.1:8000/shopapi/shops/`,formdata,{ headers })
  

}




  getShops() {
   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      
    return this.http.get(`http://127.0.0.1:8000/shopapi/shops/`, { headers })
   
  }

  getShopDetail(id:any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://127.0.0.1:8000/shopapi/shops/${id}/`,{ headers })
  }
  dlete_Shop(id:any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.delete(`http://127.0.0.1:8000/shopapi/shops/delete/${id}`, { headers })

  }


  logout_fun() {
        
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      
    return this.http.post(`http://127.0.0.1:8000/shopapi/user/logout/`,{},{ headers })
    
    }

}
