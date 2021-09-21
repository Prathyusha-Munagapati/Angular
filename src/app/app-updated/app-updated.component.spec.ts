import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdatedComponent } from './app-updated.component';

describe('AppUpdatedComponent', () => {
  let component: AppUpdatedComponent;
  let fixture: ComponentFixture<AppUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
