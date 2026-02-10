import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchImg } from './switch-img';

describe('SwitchImg', () => {
  let component: SwitchImg;
  let fixture: ComponentFixture<SwitchImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
