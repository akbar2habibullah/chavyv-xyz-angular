import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLineComponent } from './top-line.component';

describe('TopLineComponent', () => {
  let component: TopLineComponent;
  let fixture: ComponentFixture<TopLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
