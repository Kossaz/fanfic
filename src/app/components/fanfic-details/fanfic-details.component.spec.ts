import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanficDetailsComponent } from './fanfic-details.component';

describe('PostDetailsComponent', () => {
  let component: FanficDetailsComponent;
  let fixture: ComponentFixture<FanficDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanficDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanficDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
