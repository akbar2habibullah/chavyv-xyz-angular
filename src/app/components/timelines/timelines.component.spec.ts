import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesComponent } from './timelines.component';

describe('TimelinesComponent', () => {
  let component: TimelinesComponent;
  let fixture: ComponentFixture<TimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
