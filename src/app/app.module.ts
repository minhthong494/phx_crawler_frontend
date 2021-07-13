import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { CrawlLogComponent } from './crawl-log/crawl-log.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrawlLogDetailComponent } from './crawl-log/crawl-log-detail/crawl-log-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Array2textPipe } from './array2text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowMovieComponent,
    CrawlLogComponent,
    CrawlLogDetailComponent,
    Array2textPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
