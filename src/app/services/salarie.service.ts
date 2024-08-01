import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salarie } from '../models/salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
  private baseUrl = 'http://localhost:5248/api/Salarie';

  constructor(private http: HttpClient) {}


  recruitSalarie(id: number, salaire: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/recruter/${id}/${salaire}`, null);
  }


  getAllSalaries(): Observable<Salarie[]> {
    return this.http.get<Salarie[]>(`${this.baseUrl}/getAll`);
  }


  getSalarieById(id: number | undefined): Observable<Salarie> {
    return this.http.get<Salarie>(`${this.baseUrl}/get/${id}`);
  }


  updateSalarie(id: number | undefined, salaire: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}/${salaire}`, null);
  }


  deleteSalarie(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
