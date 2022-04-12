import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueuesComponent } from './user-queues.component';

describe('UserQueuesComponent', () => {
  let component: UserQueuesComponent;
  let fixture: ComponentFixture<UserQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQueuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
