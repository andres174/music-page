import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { GenresComponent } from './pages/genres/genres.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent //home
  },
  {
    path: 'search', component: SearchComponent 
  },
  {
    path: 'genres', component: GenresComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'aboutus', component: AboutUsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
