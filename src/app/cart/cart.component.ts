import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartServ: CartService) {
     this.refreshCart()
     this.cartServ.cartProductsChanged.subscribe(this.refreshCart)
   }

   refreshCart = ()=>
   {
    this.productsInCart = this.cartServ.getCartProducts();
   }

   removeFromCart(no:number)
   {
    this.cartServ.removeCartProduct(no);
   }

  ngOnInit(): void {
  }

  productsInCart : any = []

}
