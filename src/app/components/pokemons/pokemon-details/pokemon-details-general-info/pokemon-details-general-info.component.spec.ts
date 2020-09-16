import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsGeneralInfoComponent } from './pokemon-details-general-info.component';

describe('PokemonDetailsGeneralInfoComponent', () => {
  let component: PokemonDetailsGeneralInfoComponent;
  let fixture: ComponentFixture<PokemonDetailsGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
