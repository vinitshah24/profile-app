import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubscribeComponent } from './sidebar-subscribe.component';

describe('SidebarSubscribeComponent', () => {
  let component: SidebarSubscribeComponent;
  let fixture: ComponentFixture<SidebarSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
