import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent} from './user/sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { WriteComponent } from './write/write.component'; 
import { TestComponent } from './test/test.component'; 
import { ViewComponent } from './view/view.component'; 
import { EditComponent } from './edit/edit.component'; 
import { UsereditComponent } from './useredit/useredit.component'; 
import { PostSearchComponent } from './post-search/post-search.component'; 

export const appRoutes: Routes = [
    
        {path: '', component: WelcomeComponent},
        {path: 'signup', component: SignUpComponent},
      
        {path: 'signin', component: SignInComponent},
        {path: 'userprofile', component:  UserProfileComponent, canActivate:[AuthGuard]},
        {path: 'write', component:  WriteComponent, canActivate:[AuthGuard]},  
        {path: 'test', component: TestComponent},
        {path: 'view', component: ViewComponent},
        {path: 'edit', component: EditComponent},
        {path: 'useredit', component: UsereditComponent},
        {path: 'post-search', component: PostSearchComponent},
        ];
      