import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: "", component: CategoriesComponent
  },
  {
        path: ":type",
        loadChildren: () => import ('./product-list/product-list.module').then(m => m.ProductListModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
