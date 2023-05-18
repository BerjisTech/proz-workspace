import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWithProzComponent } from './signin-with-proz.component';

describe('SigninWithProzComponent', () => {
  let component: SigninWithProzComponent;
  let fixture: ComponentFixture<SigninWithProzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninWithProzComponent]
    });
    fixture = TestBed.createComponent(SigninWithProzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
