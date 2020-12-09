import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts = [];
  cartProductsChanged = new Subject();
  getCartProducts()
  {
    return this.cartProducts.slice();
  }
  removeCartProduct(no: number)
  {
    this.cartProducts.splice(no,1)
  }
  constructor() { }


}
