import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private cartServ: CartService) {
    router.events.pipe(filter(eve=>eve instanceof NavigationEnd)).subscribe(
      (eve)=>{
        this.currentNavigation = (<NavigationEnd>eve).url.split("/").slice(1)
        if((<NavigationEnd>eve).url.includes("cart"))
        {
          this.isCart = true;
        }
        else {
          this.isCart = false;
        }
      }
    );

    cartServ.cartProductsChanged.subscribe(()=>
    {
      this.cartChanged = true;
      setTimeout(()=>{
        this.cartChanged=false;
      },300)
    })
   }

  cartChanged = false;
  isCart = false;
  currentNavigation : string[] = [];

  ngOnInit(): void {
  }

}
