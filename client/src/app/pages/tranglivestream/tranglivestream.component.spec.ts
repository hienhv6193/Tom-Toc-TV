import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranglivestreamComponent } from './tranglivestream.component';

describe('TranglivestreamComponent', () => {
  let component: TranglivestreamComponent;
  let fixture: ComponentFixture<TranglivestreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranglivestreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranglivestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
