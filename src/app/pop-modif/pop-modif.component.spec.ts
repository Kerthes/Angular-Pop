import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopModifComponent } from './pop-modif.component';

describe('PopModifComponent', () => {
  let component: PopModifComponent;
  let fixture: ComponentFixture<PopModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
