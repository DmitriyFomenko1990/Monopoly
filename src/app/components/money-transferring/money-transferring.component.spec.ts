import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferringComponent } from './money-transferring.component';

describe('MoneyTransferringComponent', () => {
  let component: MoneyTransferringComponent;
  let fixture: ComponentFixture<MoneyTransferringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTransferringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransferringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
