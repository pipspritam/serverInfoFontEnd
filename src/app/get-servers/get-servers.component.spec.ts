import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServersComponent } from './get-servers.component';

describe('GetServersComponent', () => {
  let component: GetServersComponent;
  let fixture: ComponentFixture<GetServersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetServersComponent]
    });
    fixture = TestBed.createComponent(GetServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
