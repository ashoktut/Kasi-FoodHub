import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceHomePage } from './invoice-home.page';

describe('InvoiceHomePage', () => {
  let component: InvoiceHomePage;
  let fixture: ComponentFixture<InvoiceHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
