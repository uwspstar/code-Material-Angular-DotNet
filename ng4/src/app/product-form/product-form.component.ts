import { ProductService } from '../services/product/product.service';
import { CategoryService } from '../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {}; // <-- two way binding initial value

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = categoryService.getCategories();

    const id: string = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.get(id).take(1).subscribe(p => this.product = p);
    }

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  isNumber(e) {
    return typeof e === 'number';
  }

  ngOnInit() {
  }

}
