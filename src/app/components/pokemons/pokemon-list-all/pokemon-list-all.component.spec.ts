import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListAllComponent } from './pokemon-list-all.component';

describe('PokemonAllListComponent', () => {
  let component: PokemonListAllComponent;
  let fixture: ComponentFixture<PokemonListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
