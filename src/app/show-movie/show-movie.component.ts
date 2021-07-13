import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Country, Director, Movie } from '../crawl-log/crawl-log.model';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit, OnChanges {

  constructor() { }

  @Input('movies') movies: Movie[] = [];
  @Output('onYearFilter') yearFilterEvent = new EventEmitter<number>();
  @Output('onCompleteStatusFilter') completeStatusFilterEvent = new EventEmitter<number>();
  @Output('onDirectorFilter') directorFilterEvent = new EventEmitter<number>();
  @Output('onCountryFilter') countryFilterEvent = new EventEmitter<number>();

  page = 1;
  pageSize = 10;
  listYears:  number[] = [];
  listDirectors: Director[] = [];
  listCountries: Country[] = [];
  faCheckSquare = faCheckSquare;
  faTimes = faTimes;
  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges["movies"]) {
      for (const mv of this.movies) {
        if (!this.listYears.includes(mv.year)) {
          this.listYears.push(mv.year);
        }
        for (const d of mv.directors) {
          if (this.listDirectors.findIndex(ele => ele.id === d.id) < 0) {
            this.listDirectors.push(d);
          }
        }
        for (const c of mv.countries) {
          if (this.listCountries.findIndex(ele => ele.id === c.id) < 0) {
            this.listCountries.push(c);
          }
        }
      }
      console.log('yearlist', this.listYears);
    }
  }
  
  onYearFilter(year: number) {
    console.log('year ', year);
    this.yearFilterEvent.emit(year);
  }

  onCompleteStatusFilter(isComplete: number) {
    this.completeStatusFilterEvent.emit(isComplete);
  }

  onDirectorFilter(id: number) {
    this.directorFilterEvent.emit(id);
  }

  onCountryFilter(id: number) {
    this.countryFilterEvent.emit(id);
  }
}
