import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatItemsDialogComponent } from './cat-items-dialog.component';

describe('CatItemsDialogComponent', () => {
  let component: CatItemsDialogComponent;
  let fixture: ComponentFixture<CatItemsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatItemsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
