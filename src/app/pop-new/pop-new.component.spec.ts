import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopNewComponent } from './pop-new.component';

describe('PopNewComponent', () => {
  let component: PopNewComponent;
  let fixture: ComponentFixture<PopNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
