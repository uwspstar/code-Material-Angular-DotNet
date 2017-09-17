import { ProductService } from '../services/product/product.service';
import { CategoryService } from '../services/category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService, productService: ProductService) {
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    console.log(product);
  }

  ngOnInit() {
  }

}
