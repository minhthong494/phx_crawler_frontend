import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrawlLogComponent } from './crawl-log/crawl-log.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  // { path: '/history', component: CrawlLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
