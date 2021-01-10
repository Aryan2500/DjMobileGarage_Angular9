import {Routes} from '@angular/router'

export const DEFAULT_ROUTES : Routes = [
    {path:'' , loadChildren:()=>import('../user/user.module').then(m=>m.UserModule)},
    
]