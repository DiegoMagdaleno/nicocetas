import { Component, Input } from '@angular/core';
import { Category } from '../model/category.model';
import { FoodService } from '../service/food.service';
import { CatItemsDialogComponent } from '../dialog/cat-items-dialog/cat-items-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    MatDialogModule,
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input()
  category!: Category;

  constructor(private foodService: FoodService, public dialog: MatDialog) {}

  explore(term: string) {
    const dialogRef = this.dialog.open(CatItemsDialogComponent, {
      data: {term: term},
      width: '80%',
      height: '80%',
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  } 
}
