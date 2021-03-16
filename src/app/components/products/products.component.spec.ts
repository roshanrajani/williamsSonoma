import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ExtraTestConfig, { cleanStylesFromDom } from 'src/extra-test-config';
import { configureTestSuite } from 'ng-bullet';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { mockDataForUT } from '../../mockData/mockDataForUT';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  const DECLARATIONS = [
    ProductsComponent
  ];
  const IMPORTS = [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ];
  const PROVIDERS = [
    { provide: NgbModal }
  ];
  const CONFIGURATION = {
    declarations: DECLARATIONS,
    imports: IMPORTS,
    providers: PROVIDERS,
  };

  if (ExtraTestConfig.useNgBullet) {
    configureTestSuite(() => {
      TestBed.configureTestingModule(CONFIGURATION);
    });
  } else {
    beforeEach(waitForAsync (() => {
      TestBed.configureTestingModule(CONFIGURATION)
      .compileComponents();
    }));
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  if (ExtraTestConfig.cleanStylesAfterAll) {
    afterAll(() => {
      cleanStylesFromDom();
    });
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Template Cases', () => {
    let html: DebugElement;
    beforeEach(() => {
      html = fixture.debugElement;
    });
    it('should render products component template', () => {
      expect(component).toBeTruthy();
    });
    it('should render title on dashboard', () => {
      fixture.detectChanges();
      const title = html.queryAll(By.css('h1'));
      expect(title).toBeTruthy('All New Williams Products');
    });
    it('should call openModal to display carousel', () => {
      let insideContent = 'modal data';
      let group = mockDataForUT;
      const img = html.query(By.css('img'));
      component.openModal(insideContent, group);
      fixture.detectChanges();
      expect(img).toBeTruthy();
    });
    it('should render tiles on dashboard', () => {
      fixture.detectChanges();
      const tile = html.queryAll(By.css('container'));
      const img = html.query(By.css('img'));
      const overflowImage = html.query(By.css('img'));
      const overflowOption = html.nativeElement.querySelector('.container');
      expect(img).toBeTruthy();
      expect(tile.length).toEqual(0);
      overflowOption.click();
      fixture.detectChanges();
      expect(overflowImage).toBeTruthy();
    });
  });
});

