import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesTableComponent } from './abilities-table.component';

describe('AbilitiesTableComponent', () => {
  let component: AbilitiesTableComponent;
  let fixture: ComponentFixture<AbilitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
