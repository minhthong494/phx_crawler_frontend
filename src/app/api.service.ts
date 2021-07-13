import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrawlLog, Movie } from './crawl-log/crawl-log.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:4001/"
  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchCrawlHistory(params: {}): Observable<HttpResponse<CrawlLog[]>> {
    return this.httpClient.get<CrawlLog[]>(this.baseURL + "history", {params: params, responseType: 'json', observe: 'response'});
  }

  // getCrawlDataById(id: number, params: {}): Observable<HttpResponse<CrawlLog[]>> {
  //   return this.httpClient.get<CrawlLog[]>(this.baseURL + "history/" + id , {responseType: 'json', observe: 'response'});
  // }

  getCrawlMoviesByLogId(id: number, params: {}): Observable<HttpResponse<Movie[]>> {
    return this.httpClient.get<Movie[]>(this.baseURL + "history/" + id , {params: params, responseType: 'json', observe: 'response'});
  }

  getLinkExport(id: number) {
    return `${this.baseURL}history/${id}`;
  }

  uploadLink(url: string) {
    const body = {
      form_data: {
        url: url
      }
    }
    return this.httpClient.post(this.baseURL, body, {responseType: 'json', observe: 'response'});
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post(this.baseURL, formData, {responseType: 'json', observe: 'response'});
  }
}
