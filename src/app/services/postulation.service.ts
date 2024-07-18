import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostulationService {
  private baseUrl = "http://localhost:5248/api/Postulation"
  public dataForm!: FormGroup ;
  constructor(private http: HttpClient, private as:AuthService) {

  }

  postulerPieceJointe(info: Object): Observable<Object> {
    //const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}/postuler_piece_jointe`,info,{/*headers*/});
  }

  getData(id:number): Observable<Object> {
    //const headers = this.as.createAuthorization();
    return this.http.get(`${this.baseUrl}/${id}`,{/*headers*/})
  }

  createData(info: Object): Observable<Object> {
    //const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}`,info,{/*headers*/});
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
