import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaInABoxComponent } from './banana-in-abox.component';

describe('BananaInABoxComponent', () => {
  let component: BananaInABoxComponent;
  let fixture: ComponentFixture<BananaInABoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BananaInABoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BananaInABoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
