import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fanfic } from '../models/fanfic.model';

const baseUrl = 'http://localhost:8080/api/fanfics';

@Injectable({
  providedIn: 'root'
})
export class FanficService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fanfic[]> {
    return this.http.get<Fanfic[]>(baseUrl);
  }

  get(id: any): Observable<Fanfic> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Fanfic[]> {
    return this.http.get<Fanfic[]>(`${baseUrl}?title=${title}`);
  }
}
