import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private cartServ: CartService) {
    let typeOfCateogory = this.route.snapshot.paramMap.get("type");
    switch(typeOfCateogory)
    {
      case "Electronics":
        this.products = this.productsElectronics
        break;
      case "Furniture":
        this.products = this.productsFurniture
        break;
      default:
        this.products = [];
    }

   }

   products: any = []

  productsElectronics = [
    {
      imgUrl : "assets/product-list/laptop.png",
      productName : "Samsung laptop",
      productDetails : ["8 GB ram","i9 Processor"]
    },
        {
      imgUrl : "assets/product-list/mouse.jpeg",
      productName : "Dell mouse",
      productDetails : ["1 year warranty","Wireless"]
    },
    {
      imgUrl : "assets/product-list/mobile.jpeg",
      productName : "IPHONE",
      productDetails : ["3 GB ram","A12 Chip"]
    },
    {
      imgUrl : "assets/product-list/washingMachine.jpeg",
      productName : "Samsung smart washing machine",
      productDetails : ["3 Years warranty","Full automatic"]
    }
    ]

    productsFurniture = [
      {
        imgUrl : "assets/product-list/chair.jpeg",
        productName : "Chair",
        productDetails : ["Made with good material","Premium Quality"]
      },
          {
        imgUrl : "assets/product-list/sofa.jpeg",
        productName : "Sofa",
        productDetails : ["Made with good material","Premium Quality"]
      },
      {
        imgUrl : "assets/product-list/table.jpeg",
        productName : "Table",
        productDetails : ["Made with good material","Premium Quality"]
      },
      ]

  addToCart(no: number)
  {
    this.cartServ.addProductToCart(this.products[no]);
    
  }

  ngOnInit(): void {
  }

}
