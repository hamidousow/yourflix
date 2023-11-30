import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesViewsComponent } from './movies-views.component';

describe('MoviesViewsComponent', () => {
  let component: MoviesViewsComponent;
  let fixture: ComponentFixture<MoviesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
