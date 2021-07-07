import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanficsListComponent } from './fanfics-list.component';

describe('PostsListComponent', () => {
  let component: FanficsListComponent;
  let fixture: ComponentFixture<FanficsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanficsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanficsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
