import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlucoseReading} from "../models/glucose-reading";

@Injectable({
  providedIn: 'root'
})
export class GlycoseReadingServiceService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/glucoseReadings';
  }

  public getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  public getById(id: number): Observable<GlucoseReading> {
    return this.http.get<GlucoseReading>(`${this.apiUrl}/${id}`);
  }

  create(reading: GlucoseReading): Observable<GlucoseReading> {
    return this.http.post<GlucoseReading>(this.apiUrl, reading);
  }

  update(reading: GlucoseReading): Observable<GlucoseReading> {
    return this.http.put<GlucoseReading>(`${this.apiUrl}/${reading.glucoseReadingId}`, reading);
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
