import { ComponentFixture, TestBed, waitForAsync, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ExtraTestConfig, { cleanStylesFromDom } from 'src/extra-test-config';
import { configureTestSuite } from 'ng-bullet';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductsComponent } from './products.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  const matchObj = [ // initially all are false
    { matchStr: '(min-width: 1024px)', result: false },
    { matchStr: '(min-width: 1366px)', result: false },
    { matchStr: '(max-width: 1366px)', result: false }
  ];
  const fakeObserve = (s: string[]): Observable<BreakpointState> => from(matchObj).pipe(
    filter(match => match.matchStr === s[0]),
    map(match => <BreakpointState>{ matches: match.result, breakpoints: {} })
  );
  const bpSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  bpSpy.observe.and.callFake(fakeObserve);

  const DECLARATIONS = [
    ProductsComponent
  ];
  const resize = jasmine.createSpy('resizeBrowser');

  const IMPORTS = [
    BrowserModule,
    NgbModule,
    MatGridListModule,
    BrowserAnimationsModule
  ];

  const PROVIDERS = [
    { provide: NgbModal },
    { provide: NgbCarouselConfig },
    { provide: BreakpointObserver }
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

  describe('Template', () => {
    let html: DebugElement;
    beforeEach(() => {
      html = fixture.debugElement;
    });
    it('should create products component', () => {
      expect(component).toBeTruthy();
    });
    it('should render title on dashboard', () => {
      fixture.detectChanges();
      const title = html.queryAll(By.css('h1'));
      expect(title).toBeTruthy('All New Williams Products');
    });
    it('called when resizing the browser', () => {
      component.screenWidth = 1200;
      fixture.detectChanges();
      component.resizeBrowser();
    });
    it('should call openModal', () => {
      let insideContent = `<h1>something</h1>`;
      let group = {
        id: 'walnut-led-desk-lamp-w4013',
        name: 'Walnut LED Desk Lamp',
        links: {
          www: 'https://www.westelm.com/products/walnut-led-desk-lamp-w4013/',
        },
        price: { regular: 159, selling: 159 },
        thumbnail: {
          size: 'm',
          meta: '',
          alt: '',
          rel: 'thumbnail',
          width: 363,
          href:
            'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg',
          height: 363,
        },
        hero: {
          size: 'm',
          meta: '',
          alt: '',
          rel: 'hero',
          width: 363,
          href:
            'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg',
          height: 363,
        },
        images: [
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-2-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-5-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-3-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-7-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-1-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-4-m.jpg',
            height: 363,
          },
        ],
        swatches: [],
        messages: [],
        flags: [{ bopisSuppress: false, rank: 3, id: 'newcore' }],
        reviews: {
          recommendationCount: 0,
          likelihood: 0,
          reviewCount: 0,
          averageRating: 0,
          id: 'walnut-led-desk-lamp-w4013',
          type: 'GROUP_REVIEWS',
        },
      };
      const img = html.query(By.css('img'));
      component.openModal(insideContent, group);
      fixture.detectChanges();
      expect(img).toBeTruthy();
    });
    it('should call openModal', () => {
      let insideContent = `<h1>something</h1>`;
      let group = {
        id: 'walnut-led-desk-lamp-w4013',
        name: 'Walnut LED Desk Lamp',
        links: {
          www: 'https://www.westelm.com/products/walnut-led-desk-lamp-w4013/',
        },
        price: { regular: 159, selling: 159 },
        thumbnail: {
          size: 'm',
          meta: '',
          alt: '',
          rel: 'thumbnail',
          width: 363,
          href:
            'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg',
          height: 363,
        },
        hero: {
          size: 'm',
          meta: '',
          alt: '',
          rel: 'hero',
          width: 363,
          href:
            'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg',
          height: 363,
        },
        images: [
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-2-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-5-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-3-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-7-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-1-m.jpg',
            height: 363,
          },
          {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
              'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-4-m.jpg',
            height: 363,
          },
        ],
        swatches: [],
        messages: [],
        flags: [{ bopisSuppress: false, rank: 3, id: 'newcore' }],
        reviews: {
          recommendationCount: 0,
          likelihood: 0,
          reviewCount: 0,
          averageRating: 0,
          id: 'walnut-led-desk-lamp-w4013',
          type: 'GROUP_REVIEWS',
        },
      };
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

