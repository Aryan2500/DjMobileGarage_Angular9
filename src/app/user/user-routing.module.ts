import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "../auth/register/register.component";
import { HomeComponent } from "./dashboard/home/home.component";

const routes: Routes = [
  { path: "dashboard", component: HomeComponent, canActivate: [] },
  {path:"reg" , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
