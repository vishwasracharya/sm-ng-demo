import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    let url = `${API_BASE_URL}`;
    return this.http.get(url);
  }
}
