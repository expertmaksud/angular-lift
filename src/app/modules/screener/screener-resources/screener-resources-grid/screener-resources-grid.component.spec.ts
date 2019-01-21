import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerResourcesGridComponent } from './screener-resources-grid.component';

describe('ScreenerResourcesGridComponent', () => {
  let component: ScreenerResourcesGridComponent;
  let fixture: ComponentFixture<ScreenerResourcesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerResourcesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerResourcesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
