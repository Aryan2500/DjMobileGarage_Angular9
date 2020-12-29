import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignInGuard } from "./guards/sign-in.guard";

const routes: Routes = [
  // {
  //   path: "auth",
  //   loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  // },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[SignInGuard]
  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canLoad:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
