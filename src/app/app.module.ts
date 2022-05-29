import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './secciones/header/header.component';
import { BodyComponent } from './secciones/body/body.component';
import { FooterComponent } from './secciones/footer/footer.component';
import { SearchComponent } from './pages/search/search.component';
import { GenresComponent } from './pages/genres/genres.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SearchComponent,
    GenresComponent,
    InfoComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
