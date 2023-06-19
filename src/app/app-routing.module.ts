import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'products',component:ProductsComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
