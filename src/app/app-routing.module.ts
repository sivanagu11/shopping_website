import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { WatchesComponent } from './watches/watches.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'footer', component: FooterComponent },
  {path: 'watches', component: WatchesComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MyRoutings = [
  HeaderComponent,
  SidenavComponent,
  FooterComponent,
  PageNotFoundComponent,
  LoginComponent,
  SignupComponent,
  HomeComponent,ProductComponent,WatchesComponent,
];


