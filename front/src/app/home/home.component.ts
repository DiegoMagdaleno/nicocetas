import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food.model';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from '../food-card/food-card.component';
import { Category } from '../model/category.model';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { Toast, ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, FoodCardComponent, CategoryCardComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faSearch = faSearch;
  query: string = '';
  food: Food[] = [];
  categories: Category[] = [];

  constructor(private foodService: FoodService, private toastr: ToastrService) {
    this.foodService.categories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  search() {
    this.foodService.search(this.query).subscribe((data) => {
      this.food = data as Food[];
      console.log(this.food);
      if (Object.keys(this.food).length === 0) {
        this.toastr.error('No se encontraron resultados', 'Busqueda fallida');
        this.query = '';
      }
    });
  }
}
