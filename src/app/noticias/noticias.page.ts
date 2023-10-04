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
// Segmentos

  public categories: string[] = ['business', 'entertainment',
   'general', 'health',
    'science', 'sports',
     'technology'];
    public selectedCategory: string = this.categories[1];
    public articles: Article[] = [];

  constructor( private newService: NewsService) { }

  ngOnInit() {
    
    return this.newService.getTopHeadlines()
    .subscribe( articles => this.articles.push(...articles));

    this.newService.getTopHeadLinesByCaterory(this.selectedCategory)
    .subscribe(articles => {
      this.articles = [...this.articles, ...articles]
    })
  } 
   
  
  

  segmentChanged(event: any){
    this.selectedCategory = event.detail.value;
    this.newService.getTopHeadLinesByCaterory(this.selectedCategory)
    .subscribe(articles => {
      this.articles = [...articles]
    })
    //console.log(event.detail.value);
  }

}
