import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorMenu1Page } from './vendor-menu1.page';

describe('VendorMenu1Page', () => {
  let component: VendorMenu1Page;
  let fixture: ComponentFixture<VendorMenu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMenu1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorMenu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
