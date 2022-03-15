import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivstreamComponent } from './livstream.component';

describe('LivstreamComponent', () => {
  let component: LivstreamComponent;
  let fixture: ComponentFixture<LivstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivstreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
