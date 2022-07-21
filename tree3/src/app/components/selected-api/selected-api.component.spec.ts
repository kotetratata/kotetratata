import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedApiComponent } from './selected-api.component';

describe('SelectedApiComponent', () => {
  let component: SelectedApiComponent;
  let fixture: ComponentFixture<SelectedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
