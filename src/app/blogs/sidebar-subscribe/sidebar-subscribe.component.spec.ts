import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBlogComponent } from './subscribe-blog.component';

describe('SubscribeBlogComponent', () => {
  let component: SubscribeBlogComponent;
  let fixture: ComponentFixture<SubscribeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
