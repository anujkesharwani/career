import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { SigningComponent } from './signing/signing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{path:'Signing',component:SigningComponent},
                        {path:'SignUp',component:SignUpComponent},
                        {path:'Home',component:HomeComponent},
                        {path:'About Us',component:AboutUsComponent},
                        {path:'Features',component:FeaturesComponent},
                        {path:'Contact-us',component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
