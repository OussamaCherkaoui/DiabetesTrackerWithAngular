import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemiesComponent } from './glycemies.component';

describe('GlycemiesComponent', () => {
  let component: GlycemiesComponent;
  let fixture: ComponentFixture<GlycemiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
