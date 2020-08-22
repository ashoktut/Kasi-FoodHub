import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestApplyPage } from './rest-apply.page';

describe('RestApplyPage', () => {
  let component: RestApplyPage;
  let fixture: ComponentFixture<RestApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
