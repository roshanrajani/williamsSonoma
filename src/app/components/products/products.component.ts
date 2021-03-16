import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  ProductsMock
} from '../../mockData/mockData';
import {
  ProductsModel
} from '../../models/productsModel'
import {
  GroupsModel
} from '../../models/groupModel'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title: string;
  groups: any;
  name: string;
  images: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getProducts(ProductsMock);
  }

  getProducts(data: ProductsModel) {
    this.title = data.name;
    this.groups = data.groups;
  }

  openModal(insideContent: string, group: GroupsModel) {
    this.modalService.open(insideContent, {
      size: 'md'
    });
    this.name = group.name;
    this.images = group.images.map((image) => image.href);
  }

}
