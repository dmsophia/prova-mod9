import { Injectable } from '@angular/core';
import { environment } from '../environment'; // Confirme o caminho correto
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMonthlyAverage(): Observable<any[]> {
    const url = `${this.baseUrl}api/saude/monthlyaverages/days`;
    return this.http.get<any[]>(url);
  }
}
