import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  reg(data:any){
    console.log(data);
    this.http.post<any>("http://localhost:7000/signUp",data).subscribe((res)=>{

    })
  }
}

