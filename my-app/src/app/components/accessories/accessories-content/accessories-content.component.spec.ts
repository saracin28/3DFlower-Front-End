import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesContentComponent } from './accessories-content.component';

describe('AccessoriesContentComponent', () => {
  let component: AccessoriesContentComponent;
  let fixture: ComponentFixture<AccessoriesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
