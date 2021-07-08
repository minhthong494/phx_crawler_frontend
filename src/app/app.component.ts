import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly PAGE_HOME = 'page-home';
  readonly PAGE_HISTORY = 'page-history';

  title = 'PhxCrawler';
  currentPage = this.PAGE_HOME;

  setCurrentPage(page: any) {
    console.log(this.currentPage);
    if (this.currentPage != page) {
      this.currentPage = page
    }
  }
}
