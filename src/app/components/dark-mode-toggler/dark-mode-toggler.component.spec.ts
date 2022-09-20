import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeTogglerComponent } from './dark-mode-toggler.component';

describe('DarkModeTogglerComponent', () => {
  let component: DarkModeTogglerComponent;
  let fixture: ComponentFixture<DarkModeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
