import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotContentComponent } from './pot-content.component';

describe('PotContentComponent', () => {
  let component: PotContentComponent;
  let fixture: ComponentFixture<PotContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
