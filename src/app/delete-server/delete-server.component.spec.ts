import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServerComponent } from './delete-server.component';

describe('DeleteServerComponent', () => {
  let component: DeleteServerComponent;
  let fixture: ComponentFixture<DeleteServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteServerComponent]
    });
    fixture = TestBed.createComponent(DeleteServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
