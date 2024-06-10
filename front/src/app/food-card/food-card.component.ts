import { Component, Input } from '@angular/core';
import { Food } from '../model/food.model';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faAppleAlt, faBalanceScale, faTag, faFileAlt, faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  faYoutube = faYoutube;
  faGlobe = faGlobe;
  faPlateUtensils = faPlateWheat;
  faList = faList;
  faAppleAlt = faAppleAlt;
  faBalanceScale = faBalanceScale;
  faTag = faTag;
  faFileAlt = faFileAlt;

  @Input() 
  food!: Food;
}
