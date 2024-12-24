import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

 apiUrl = 'https://api-generator.retool.com/T9Y6PK/data';

  constructor(private http:HttpClient) { }


  get():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  post(userData: any):Observable<any>{
    return this.http.post(this.apiUrl, userData)
  }

  put(userData: any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${userData.id}`, userData)
  }

  delete(userData:any){
    return this.http.delete(`${this.apiUrl}/${userData}`)
  }


}