import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6OktaCallbackComponent } from './ng6-okta-callback.component';

describe('Ng6OktaCallbackComponent', () => {
  let component: Ng6OktaCallbackComponent;
  let fixture: ComponentFixture<Ng6OktaCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6OktaCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6OktaCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
