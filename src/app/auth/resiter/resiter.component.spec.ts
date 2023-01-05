import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiterComponent } from './resiter.component';

describe('ResiterComponent', () => {
  let component: ResiterComponent;
  let fixture: ComponentFixture<ResiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
