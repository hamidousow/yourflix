import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoviesListComponent } from './user-movies-list.component';

describe('UserMoviesListComponent', () => {
  let component: UserMoviesListComponent;
  let fixture: ComponentFixture<UserMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMoviesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
