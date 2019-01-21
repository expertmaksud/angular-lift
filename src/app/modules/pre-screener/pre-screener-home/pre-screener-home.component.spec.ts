import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScreenerHomeComponent } from './pre-screener-home.component';

describe('PreScreenerHomeComponent', () => {
  let component: PreScreenerHomeComponent;
  let fixture: ComponentFixture<PreScreenerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreScreenerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScreenerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
