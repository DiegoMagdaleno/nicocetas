import { Injectable } from '@angular/core';
import { WebAPIService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl = 'http://localhost:3000/food'

  constructor(private web: WebAPIService) { }

  search(food: string) {
    return this.web.get(`${this.baseUrl}/${food}`)
  }

  categories() {
    return this.web.get(`${this.baseUrl}/cat/categories`)
  }

  filter(category: string) {
    return this.web.get(`${this.baseUrl}/filter/${category}`)
  }

}
