import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignInGuard } from "./guards/sign-in.guard";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { ADMIN_ROUTES } from "./routes/admin-layout-route";
import { HomeComponent } from "./user/dashboard/home/home.component";

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
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
    canLoad: [AuthGuard],
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
