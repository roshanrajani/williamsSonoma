import { Component, OnInit, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsMock } from '../../mockData/mockData';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
  cols: number;
  images: string;
  screenWidth: number;
  @ViewChild('insideContent', {static: true})
	insideContent: TemplateRef<any>;
  @HostListener("window:resize", []) resizeBrowser() {
    this.screenWidth = window.innerWidth
    if (this.screenWidth >= 1200) {
      this.cols = 3; //lg
    } else if (this.screenWidth >= 992) {
      this.cols = 2; //md
    } else if (this.screenWidth  >= 768) {
      this.cols = 1; //sm
    } else if (this.screenWidth < 768) {
      this.cols = 1; //xs
    }
  }
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cols = 3;
    this.screenWidth = window.innerWidth;
    this.products = ProductsMock;
    this.getProducts(ProductsMock);
  }

  getProducts(data) {
    this.title = data.name;
    this.groups = data.groups;
  }

  openModal(insideContent, group) {
    this.modalService.open(insideContent, { size: 'md' });
    this.name = group.name;
    this.images = group.images.map((image) => image.href);
  }

}
