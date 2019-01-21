import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerLayoutComponent } from './screener-layout.component';

describe('ScreenerLayoutComponent', () => {
  let component: ScreenerLayoutComponent;
  let fixture: ComponentFixture<ScreenerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
