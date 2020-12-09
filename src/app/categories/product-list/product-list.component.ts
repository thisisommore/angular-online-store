import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products = [
    {
      imgUrl : "assets/product-list/laptop.png",
      productName : "Samsung laptop",
      productDetails : ["8 GB ram","i9 Processor"]
    },
        {
      imgUrl : "assets/product-list/laptop.png",
      productName : "Samsung laptop",
      productDetails : ["8 GB ram","i9 Processor"]
    },
        {
      imgUrl : "assets/product-list/laptop.png",
      productName : "Samsung laptop",
      productDetails : ["8 GB ram","i9 Processor"]
    },
        {
      imgUrl : "assets/product-list/laptop.png",
      productName : "Samsung laptop",
      productDetails : ["8 GB ram","i9 Processor"]
    }
  ]

  ngOnInit(): void {
  }

}
