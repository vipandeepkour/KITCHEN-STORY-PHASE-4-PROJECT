import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'Log in',component:LoginComponent
  },
  {
    path:'Sign Up',component:RegisterComponent
  },
  
  {
    path:'Home',component:HomeComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  
  
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'SHOW CART',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
