import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlycemieComponent } from './add-glycemie.component';

describe('AddGlycemieComponent', () => {
  let component: AddGlycemieComponent;
  let fixture: ComponentFixture<AddGlycemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGlycemieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGlycemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
