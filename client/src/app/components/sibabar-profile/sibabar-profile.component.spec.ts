import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibabarProfileComponent } from './sibabar-profile.component';

describe('SibabarProfileComponent', () => {
  let component: SibabarProfileComponent;
  let fixture: ComponentFixture<SibabarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibabarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibabarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
