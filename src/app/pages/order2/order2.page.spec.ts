import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Order2Page } from './order2.page';

describe('Order2Page', () => {
  let component: Order2Page;
  let fixture: ComponentFixture<Order2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
