import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforProfileComponent } from './infor-profile.component';

describe('InforProfileComponent', () => {
  let component: InforProfileComponent;
  let fixture: ComponentFixture<InforProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
