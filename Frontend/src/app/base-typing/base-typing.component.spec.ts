import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTypingComponent } from './base-typing.component';

describe('BaseTypingComponent', () => {
  let component: BaseTypingComponent;
  let fixture: ComponentFixture<BaseTypingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseTypingComponent]
    });
    fixture = TestBed.createComponent(BaseTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
