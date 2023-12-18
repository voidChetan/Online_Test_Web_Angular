import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiStartPoint:string=environment.apiURL;

  constructor(private http:HttpClient) {}

   get(method:string):Observable<any>{
    return this.http.get(this.apiStartPoint + method);
  }

  post(method:string,object:any):Observable<any>{
    return this.post(this.apiStartPoint + method , object);
  }

  put(method:string,object:any):Observable<any>{
    return this.put(this.apiStartPoint + method,object);
  }

  delete(method:string):Observable<any>{
    return this.delete(this.apiStartPoint + method);
  }

}
