import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProzComponent } from './proz.component';

describe('ProzComponent', () => {
  let component: ProzComponent;
  let fixture: ComponentFixture<ProzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProzComponent]
    });
    fixture = TestBed.createComponent(ProzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
