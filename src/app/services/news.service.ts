import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Article, NewResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const API_KEY = environment.API_KEY

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines():Observable<Article[]>{

    return this.http.get<NewResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
      
    .pipe(
      map(({articles}) => articles)
    );
  
  }
}
