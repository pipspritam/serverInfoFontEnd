import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServerByidComponent } from './get-server-byid.component';

describe('GetServerByidComponent', () => {
  let component: GetServerByidComponent;
  let fixture: ComponentFixture<GetServerByidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetServerByidComponent]
    });
    fixture = TestBed.createComponent(GetServerByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
