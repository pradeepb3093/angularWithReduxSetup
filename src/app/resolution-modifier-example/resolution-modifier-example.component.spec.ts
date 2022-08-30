import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionModifierExampleComponent } from './resolution-modifier-example.component';

describe('ResolutionModifierExampleComponent', () => {
  let component: ResolutionModifierExampleComponent;
  let fixture: ComponentFixture<ResolutionModifierExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionModifierExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionModifierExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
