import { Component, Input, input } from '@angular/core';
import { Product } from '../../../+models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:Product={
    title:'',
    count:1,
    pic:'',
    details:'',
    price:4000000
  }

  showHide() { 
    console.log('صفحه مورد نظر باز شد')
  }
}
