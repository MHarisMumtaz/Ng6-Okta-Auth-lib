import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6OktaAuthLibComponent } from './ng6-okta-auth-lib.component';

describe('Ng6OktaAuthLibComponent', () => {
  let component: Ng6OktaAuthLibComponent;
  let fixture: ComponentFixture<Ng6OktaAuthLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6OktaAuthLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6OktaAuthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
