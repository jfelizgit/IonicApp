import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../interfaces';
//import { NewResponse } from '../interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public articles: Article[] = [];

  constructor( private newService: NewsService) { }

  ngOnInit() {
    
    return this.newService.getTopHeadlines()
    .subscribe( articles => this.articles.push(...articles));
  }

}
