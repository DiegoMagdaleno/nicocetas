import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food.model';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from '../food-card/food-card.component';
import { Category } from '../model/category.model';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, FoodCardComponent, CategoryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  query: string = '';
  food: Food[] = [];
  categories: Category[] = [];

  constructor(private foodService: FoodService) {
    this.foodService.categories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  search() {
    this.foodService.search(this.query).subscribe((data) => {
      this.food = data;
      console.log(this.food);
    });
  }
}
