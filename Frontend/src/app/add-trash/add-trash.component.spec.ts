import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponent } from './add-trash.component';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashComponent]
    });
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
