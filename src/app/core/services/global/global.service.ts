import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  api:string=environment.apiURL
  constructor(private http:HttpClient) {

   
   }
   get(method:string){
    this.http.get(this.api+method)
  }
}
