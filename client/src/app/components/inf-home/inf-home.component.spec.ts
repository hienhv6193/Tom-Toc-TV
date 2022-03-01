import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfHomeComponent } from './inf-home.component';

describe('InfHomeComponent', () => {
  let component: InfHomeComponent;
  let fixture: ComponentFixture<InfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
