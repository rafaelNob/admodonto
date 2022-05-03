import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAvaliacaoOrofacialComponent } from './ficha-avaliacao-orofacial.component';

describe('FichaAvaliacaoOrofacialComponent', () => {
  let component: FichaAvaliacaoOrofacialComponent;
  let fixture: ComponentFixture<FichaAvaliacaoOrofacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaAvaliacaoOrofacialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAvaliacaoOrofacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
