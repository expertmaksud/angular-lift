import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScreenerLayoutComponent } from './pre-screener-layout.component';

describe('PreScreenerLayoutComponent', () => {
  let component: PreScreenerLayoutComponent;
  let fixture: ComponentFixture<PreScreenerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreScreenerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScreenerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
