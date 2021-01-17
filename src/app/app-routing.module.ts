import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignInGuard } from "./guards/sign-in.guard";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { CommonLayoutComponent } from "./layout/common-layout/common-layout.component";
import { ADMIN_ROUTES } from "./routes/admin-layout-route";
import { DEFAULT_ROUTES } from "./routes/default-layout-routes";
import { USER_ROUTES } from "./routes/user-route";

const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: ADMIN_ROUTES,
  },
  {
    path:"admin-login",
    component: AdminLoginComponent,
    canActivate: [SignInGuard],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [SignInGuard],
  },
  {
    path: "user",
    component:CommonLayoutComponent,
    children:USER_ROUTES,
  },

  {
    path:'',
    component:CommonLayoutComponent,
    children:DEFAULT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
