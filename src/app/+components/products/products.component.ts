import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from '../../+models/product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product[]=[
    {title:'لپ تاپ اپل MacBook Air 13 (2020)-MGN63',pic:'',count:1,details:'اپل M سری',price:42500000},
    {title:'لپ تاپ اپل MacBook Air 13 (2022)-MLXY3',pic:'',count:2,details:'اپل M سری',price:56400000},
    {title:'لپ تاپ لنوو ThinkBook 15-GQ',pic:'',count:3,details:'core i5',price:30000000},
    {title:'لپ تاپ ایسوس TUF Gaming F15 FX507ZC4-B',pic:'',count:1,details:'core i5',price:42500000},
    {title:'لپ تاپ ایسر Aspire 3 A315-58G-79RH',pic:'',count:2,details:'core i5',price:30600000} 
  ]
 
}
