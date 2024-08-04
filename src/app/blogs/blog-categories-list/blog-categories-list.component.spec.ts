import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoriesListComponent } from './blog-categories-list.component';

describe('BlogCategoriesListComponent', () => {
  let component: BlogCategoriesListComponent;
  let fixture: ComponentFixture<BlogCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCategoriesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
