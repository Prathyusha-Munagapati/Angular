import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinupCompComponent } from './signup-comp.component';

describe('SinupCompComponent', () => {
  let component: SinupCompComponent;
  let fixture: ComponentFixture<SinupCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinupCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
