import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: "",
        redirectTo: "categories",
        pathMatch: "full"
    }, {
        path: "categories",
        loadChildren: () => import ('./categories/categories.module').then(m => m.CategoriesModule)
    },
    {
      path: "cart",
        loadChildren: () => import ('./cart/cart.module').then(m => m.CartModule)

    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
