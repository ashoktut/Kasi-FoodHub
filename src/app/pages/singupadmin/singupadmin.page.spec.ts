import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingupadminPage } from './singupadmin.page';

describe('SingupadminPage', () => {
  let component: SingupadminPage;
  let fixture: ComponentFixture<SingupadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingupadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
