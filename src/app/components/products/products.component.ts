import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsMock } from '../../mockData/mockData';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProductsComponent implements OnInit {
  products: any;
  title: string;
  groups: any;
  name: string;
  cols : number;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }
  constructor(private modalService: NgbModal, configCarousel: NgbCarouselConfig, private breakpointObserver: BreakpointObserver) {
    configCarousel.interval = 10000;
    configCarousel.wrap = false;
    configCarousel.keyboard = false;
    configCarousel.pauseOnHover = false;
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
   }
  images: string;
  ngOnInit(): void {
    this.products = ProductsMock;
    this.getProducts(ProductsMock);
  }

  getProducts(data) {
    this.title = data.name;
    this.groups = data.groups;
  }

  openModal(insideContent: Template, group) {
    this.modalService.open(insideContent, { size: 'md' });
    this.name = group.name;
    this.images = group.images.map((image) => image.href);
  }

}
