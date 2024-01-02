import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempViewComponent } from './temp-view.component';

describe('TempViewComponent', () => {
  let component: TempViewComponent;
  let fixture: ComponentFixture<TempViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
