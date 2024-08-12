import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Population} from "../models/population";
import {PopulationType} from "../models/population-type";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  populations: Population[]=[];
  private baseUrl = "http://localhost:5248/api/Population"
  choixmenu : string = 'A';
  public dataForm!: FormGroup ;
  constructor(private http: HttpClient, private as:AuthService) {

  }



  createData(object:Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,object);
  }

  getData(id:number): Observable<Population> {
    return this.http.get<Population>(`${this.baseUrl}/${id}`,{/*headers*/})
  }

  search(searchText:string,populationType:PopulationType): Observable<any> {
    return this.http.get<Population>(`${this.baseUrl}/search?searchText=${searchText}`,{/*headers*/})
  }


  updateData(id:number, value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  deleteData(id:Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'})
  }

  getAll(): Observable<any> {
    //const headers = this.up.createAuthorization();

    return this.http.get(`${this.baseUrl}`,{/*headers*/})
  }

}
