import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgmobileComponent } from './pubgmobile.component';

describe('PubgmobileComponent', () => {
  let component: PubgmobileComponent;
  let fixture: ComponentFixture<PubgmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubgmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
