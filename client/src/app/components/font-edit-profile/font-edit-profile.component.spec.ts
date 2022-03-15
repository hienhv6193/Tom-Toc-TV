import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontEditProfileComponent } from './font-edit-profile.component';

describe('FontEditProfileComponent', () => {
  let component: FontEditProfileComponent;
  let fixture: ComponentFixture<FontEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
