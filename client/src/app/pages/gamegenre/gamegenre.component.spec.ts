import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamegenreComponent } from './gamegenre.component';

describe('GamegenreComponent', () => {
  let component: GamegenreComponent;
  let fixture: ComponentFixture<GamegenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamegenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamegenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
