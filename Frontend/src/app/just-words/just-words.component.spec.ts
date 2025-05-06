import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustWordsComponent } from './just-words.component';

describe('JustWordsComponent', () => {
  let component: JustWordsComponent;
  let fixture: ComponentFixture<JustWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustWordsComponent]
    });
    fixture = TestBed.createComponent(JustWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
