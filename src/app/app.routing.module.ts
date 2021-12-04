import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./transactions/category/category.component";

const appRoutes: Routes = [
  { path: '', component: CategoryComponent}
]

export const appRoutingModule = RouterModule.forRoot(appRoutes)
