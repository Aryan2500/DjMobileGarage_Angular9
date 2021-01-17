import {Routes} from '@angular/router'
import { AdminGuard } from '../guards/admin.guard'
import { AuthGuard } from '../guards/auth.guard'

export const USER_ROUTES : Routes = [
    // {path:'login' , component:LoginComponent},
    {
        path: "",
        loadChildren: () => import("../user/user.module").then((m) => m.UserModule),
        canLoad: [AuthGuard],
      },
    
]