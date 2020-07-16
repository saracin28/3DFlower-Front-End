import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsContentComponent } from './our-products-content.component';

describe('OurProductsContentComponent', () => {
  let component: OurProductsContentComponent;
  let fixture: ComponentFixture<OurProductsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
