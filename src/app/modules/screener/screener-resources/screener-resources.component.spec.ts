import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerResourcesComponent } from './screener-resources.component';

describe('ScreenerResourcesComponent', () => {
  let component: ScreenerResourcesComponent;
  let fixture: ComponentFixture<ScreenerResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
