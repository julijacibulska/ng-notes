import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingViewComponent } from './editing-view.component';

describe('EditingViewComponent', () => {
  let component: EditingViewComponent;
  let fixture: ComponentFixture<EditingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
