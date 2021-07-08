export class CrawlLog {
    id = 0;
    url: string = '';
    crawl_at: number = 0;
    crawl_at_display: Date | undefined;
    total: number = 0;
    movies: Movie[] = [];
    status = '';
    constructor(
    ) { }
}

export class Movie {
    id = 0;
    title: string = '';
    thumnail: string = '';
    link: string = '';
    full_series: boolean = false;
    number_of_episode: number = 0;
    year = 0;
    constructor(
    ) { }
}