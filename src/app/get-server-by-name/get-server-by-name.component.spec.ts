import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServerByNameComponent } from './get-server-by-name.component';

describe('GetServerByNameComponent', () => {
  let component: GetServerByNameComponent;
  let fixture: ComponentFixture<GetServerByNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetServerByNameComponent]
    });
    fixture = TestBed.createComponent(GetServerByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
