import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperComponentsComponent } from './super-components.component';

describe('SuperComponentsComponent', () => {
  let component: SuperComponentsComponent;
  let fixture: ComponentFixture<SuperComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
