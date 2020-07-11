import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerContentComponent } from './flower-content.component';

describe('FlowerContentComponent', () => {
  let component: FlowerContentComponent;
  let fixture: ComponentFixture<FlowerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
