import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationuserComponent } from './operationuser.component';

describe('OperationuserComponent', () => {
  let component: OperationuserComponent;
  let fixture: ComponentFixture<OperationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
