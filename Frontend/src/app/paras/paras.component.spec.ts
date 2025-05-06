import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasComponent } from './paras.component';

describe('ParasComponent', () => {
  let component: ParasComponent;
  let fixture: ComponentFixture<ParasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParasComponent]
    });
    fixture = TestBed.createComponent(ParasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
