import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SigninWithProzComponent } from './signin-with-proz.component';

describe('SigninWithProzComponent', () => {
  let component: SigninWithProzComponent;
  let fixture: ComponentFixture<SigninWithProzComponent>;
  let httpMock: HttpTestingController; // declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninWithProzComponent],
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
    });
    fixture = TestBed.createComponent(SigninWithProzComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
