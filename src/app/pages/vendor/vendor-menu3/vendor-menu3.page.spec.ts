import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorMenu3Page } from './vendor-menu3.page';

describe('VendorMenu3Page', () => {
  let component: VendorMenu3Page;
  let fixture: ComponentFixture<VendorMenu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMenu3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorMenu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
