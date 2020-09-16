import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListTypesComponent } from './pokemon-list-types.component';

describe('PokemonListByTypeComponent', () => {
  let component: PokemonListTypesComponent;
  let fixture: ComponentFixture<PokemonListTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
