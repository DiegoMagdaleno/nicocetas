import { Component, Input } from '@angular/core';
import { Food } from '../model/food.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() 
  food!: Food;

}
