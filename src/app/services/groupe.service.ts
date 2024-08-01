import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Groupe} from "../models/groupe";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private baseUrl = 'http://localhost:5248/api/Groupe';

  constructor(private http: HttpClient) { }

  addGroupe(info: Groupe): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, info);
  }

  getAllGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(`${this.baseUrl}/getAll`);
  }

  getGroupeById(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.baseUrl}/get/${id}`);
  }

  updateGroupe(id: number, value: Groupe): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteGroupe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
