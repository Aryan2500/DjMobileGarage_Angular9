import {Routes} from '@angular/router'
import { AdminGuard } from '../guards/admin.guard'

export const ADMIN_ROUTES : Routes = [
    // {path:'login' , component:LoginComponent},
    {path:'' , loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule) , canActivate:[AdminGuard]},
    
]