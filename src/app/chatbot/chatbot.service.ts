import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:3000'; // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  sendMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/message`, message);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/messages`);
  }

  getImageUrl(filename: string): string {
    return `${this.apiUrl}/image/${filename}`;
  }
}
