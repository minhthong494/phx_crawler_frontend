import { Component, OnInit } from '@angular/core';
import { parseMessage } from '@angular/localize/src/utils';
import { ApiService } from '../api.service';
import { CrawlLog } from './crawl-log.model';

@Component({
  selector: 'app-crawl-log',
  templateUrl: './crawl-log.component.html',
  styleUrls: ['./crawl-log.component.css']
})
export class CrawlLogComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  crawlLogs: CrawlLog[] = [];
  crawlLogDetailID = 0;
  isPageListing = true;

  pageSize = 10;
  totalItems = 0;
  page = 1;

  linkExport = '';
  ngOnInit(): void {
    console.log('init ');
    this.fetchData();
  }

  fetchData() {
    const params = {
      limit: this.pageSize,
      offset: (this.page - 1) * this.pageSize
    }
    
    this.apiService.fetchCrawlHistory(params).subscribe(
      (res) => {
        this.crawlLogs = res.body ? res.body : [];
        this.crawlLogs.forEach(ele => {
          ele["crawl_at_display"] = new Date(ele.crawl_at * 1000);
        });
        const total = res.headers.get('x-total-items');
        this.totalItems = total ? +total : 0;
      },
      (err) => {

      }
    );
  }

  onClickDetail(log: CrawlLog) {
    this.crawlLogDetailID = log.id;
    this.linkExport = this.apiService.getLinkExport(this.crawlLogDetailID);
  }

  setPageDetail() {
    this.isPageListing = false;
  }

  setPageListing() {
    this.isPageListing = true;
  }

  onPageChange(currentPage: any) {
    this.page = currentPage;
    this.fetchData();
  }

  onExport() {
    const params = {
      limit: 10000
    }
    this.apiService.getCrawlMoviesByLogId(this.crawlLogDetailID, params).subscribe(
      (res) => {
        var a = document.createElement("a");
        const idx = this.crawlLogs.findIndex(ele => ele.id === this.crawlLogDetailID);
        const data = Object.assign({}, this.crawlLogs[idx]);
        data.movies = res.body ? res.body : [];
        var file = new Blob([JSON.stringify(data)], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "data.json";
        a.click();
      },
      (err) => {

      }
    );
  }
}
