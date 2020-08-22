import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowMenuPage } from './show-menu.page';

describe('ShowMenuPage', () => {
  let component: ShowMenuPage;
  let fixture: ComponentFixture<ShowMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
