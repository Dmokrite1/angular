import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooLongToLoadComponent } from './too-long-to-load.component';

describe('TooLongToLoadComponent', () => {
  let component: TooLongToLoadComponent;
  let fixture: ComponentFixture<TooLongToLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooLongToLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooLongToLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
