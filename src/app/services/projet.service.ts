import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl = 'http://localhost:5248/api/Projet';

  constructor(private http: HttpClient) { }

  addProjet(id: number, info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add/${id}`, info);
  }

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/get`);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.baseUrl}/get/${id}`);
  }

  updateProjet(id: number, value: Projet): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
