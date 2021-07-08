import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from '../crawl-log.model';

@Component({
  selector: 'app-crawl-log-detail',
  templateUrl: './crawl-log-detail.component.html',
  styleUrls: ['./crawl-log-detail.component.css']
})
export class CrawlLogDetailComponent implements OnInit, OnChanges {

  constructor(
    private apiService: ApiService
  ) { }

  @Input('crawlLogID') log_id = 0;
  
  page = 1;
  pageSize = 10;
  totalItems = 0;

  movies: Movie[] = [];
  yearFilter = -1;
  isCompleteFilter = -1;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanged ', changes);
    if (changes["log_id"] && changes["log_id"].currentValue > 0) {
      this.fetchCrawLogDetail();
    }
  }

  fetchCrawLogDetail() {
    const params = {
      limit: this.pageSize,
      offset: (this.page -1 ) * this.pageSize,
    }

    if (this.yearFilter !== -1) {
      Object.assign(params, {year: this.yearFilter});
    }
    if (this.isCompleteFilter !== -1) {
      Object.assign(params, {is_complete: this.isCompleteFilter});
    }

    this.apiService.getCrawlMoviesByLogId(this.log_id, params).subscribe(
      (res) => {  
        this.movies = res.body ? res.body : [];
        const total = res.headers.get('x-total-items');
        this.totalItems = total ? +total : 0;
      },
      (err) => {

      }
    );
  }

  onPageChange(currentPage: any) {
    this.page = currentPage;
    this.fetchCrawLogDetail();
  }

  onYearFilter(year: number) {
    this.page = 1;
    this.yearFilter = year;
    this.fetchCrawLogDetail();
  }

  onCompleteStatusFilter(isComplete: number) {
    this.page = 1;
    this.isCompleteFilter = isComplete;
    this.fetchCrawLogDetail();
  }
}
