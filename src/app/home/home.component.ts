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
  uploadFile: File | null = null;
  ngOnInit(): void {
  }

  setUpload(isUpload: boolean) {
    this.isUpload = isUpload;
  }

  onSubmit() {
    this.apiService.uploadLink(this.crawlLink).subscribe(
      (res) => console.log('upload sucess'),
      (err) => console.log('upload failed')
    );
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
     }
    this.uploadFile = input.files[0];
  }

  onUploadFile() {
    if (!this.uploadFile) {
      return;
    }
    this.apiService.uploadFile(this.uploadFile).subscribe(
      (res) => {
        (document.getElementById('formFile') as HTMLInputElement).value = '';
      },
      (err) => {}
    );
  }
}
