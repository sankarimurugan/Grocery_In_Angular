import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomComponent } from './components/hom/hom.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ReviewComponent,
    BlogComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    HomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
