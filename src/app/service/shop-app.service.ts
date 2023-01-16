import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopAppService {

  constructor() { }

login_fun(){

}

  getShops(){

    const csrf_token = localStorage.getItem('csrftoken')
    console.log(csrf_token);
    const header = new Headers({
      'Content-Type' : 'application/json',
      'X-CSRFToken' : csrf_token ||'default_value'
      
      
    });

    let options:any={
      method :"GET",
      headers:header
    }

    return fetch(`http://127.0.0.1:8000/api/shops/`,options)
  }
}

