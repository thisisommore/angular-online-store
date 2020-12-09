import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
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
   }

  isCart = false;
  currentNavigation : string[] = [];

  ngOnInit(): void {
  }

}
