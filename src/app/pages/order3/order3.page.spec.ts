import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Order3Page } from './order3.page';

describe('Order3Page', () => {
  let component: Order3Page;
  let fixture: ComponentFixture<Order3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
