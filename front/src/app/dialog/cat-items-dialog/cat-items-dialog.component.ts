import { AfterContentChecked, AfterContentInit, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FoodService } from '../../service/food.service';
import { FilterResult } from '../../model/filterResult.model';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-items-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './cat-items-dialog.component.html',
  styleUrl: './cat-items-dialog.component.css'
})
export class CatItemsDialogComponent  {
  filterResult: FilterResult[] = [];
  dataSource!: MatTableDataSource<FilterResult>;
  displayedColumns: string[] = ['idMeal', 'strMeal', 'strMealThumb'];

  constructor(
    public dialogRef: MatDialogRef<CatItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private foodService: FoodService
  ) {
    console.log(data);
    this.foodService.filter(data.term).subscribe((res) => {
      this.filterResult = res;
      this.dataSource = new MatTableDataSource(this.filterResult);
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  onNoClick() {
    this.dialogRef.close();
  }



}
