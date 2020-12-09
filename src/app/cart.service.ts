import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts :any = [];
  cartProductsChanged = new Subject();

  getCartProducts()
  {
    return this.cartProducts.slice();
  }

  removeCartProduct(no: number)
  {
    this.cartProducts.splice(no,1)
    this.cartProductsChanged.next()
  }

  addProductToCart(product:any)
  {
    this.cartProducts.push(product);
    this.cartProductsChanged.next()

  }

  getCount()
  {
    return this.cartProducts.length
  }
  constructor() { }


}
