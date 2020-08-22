import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingupcustPage } from './singupcust.page';

describe('SingupcustPage', () => {
  let component: SingupcustPage;
  let fixture: ComponentFixture<SingupcustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupcustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingupcustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
