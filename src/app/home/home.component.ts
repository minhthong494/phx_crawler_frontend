import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  isUpload = false;
  crawlLink = '';
  ngOnInit(): void {
  }

  setUpload(isUpload: boolean) {
    this.isUpload = isUpload;
  }

  onSubmit() {
    this.apiService.uploadCrawlLink(this.crawlLink).subscribe(
      (res) => console.log('upload sucess'),
      (err) => console.log('upload failed')
    );
  }
}
