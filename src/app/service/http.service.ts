import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPicSum {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface IStory {
  id: string
  title: string;
  body: string;
  author: string;
  img: string;
}
export interface TableOption {
  pageNumber: number
  pageSize: number
  sortDirection: string;
  sortProperties: string[];
}

export interface StoryReq {
  id: number
  title: string;
  body: string;
  author: string;
  tableOption: TableOption;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getPicSum(): Observable<any> { // free API opensource
    return this.httpClient.get('https://picsum.photos/v2/list?page=1&limit=1')
    .pipe(
      map((d: any) => { // d:Array<IPicSum>
        return d.map((picsum: IPicSum) => {
          return {
            author: picsum.author,
            download_url: picsum.download_url,
            height: picsum.height,
            id: picsum.id,
            url: picsum.url,
            width: picsum.width
          }
        })
      })
    );
  }

  async getTodos(): Promise<any> {
    return await this.httpClient.get('https:jsonplaceholder.typicode.com/todos/1').toPromise();
  }

  getAllStory(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/jpa/story/getAll');
  }

  getStory(storyReq: StoryReq): Observable<any> {
    // http://localhost:8080/jpa/story/get?id=14&title=voluptatem&body=fuga&author=Paul&page=1&size=5&sort=id&order=DESC
    let url = 'http://localhost:8080/jpa/story/get?';
    if (storyReq.id > 0) url += 'id='+storyReq.id+'&';
    if (storyReq.title) url += 'title='+storyReq.title+'&';
    if (storyReq.body) url += 'body='+storyReq.body+'&';
    if (storyReq.author) url += 'author='+storyReq.author+'&';

    url += 'page='+storyReq.tableOption.pageNumber+'&';
    url += 'size='+storyReq.tableOption.pageSize+'&';
    url += 'sort='+storyReq.tableOption.sortProperties+'&';
    url += 'order='+storyReq.tableOption.sortDirection;
    console.log('final url=',url)
    return this.httpClient.get(url);
  }
}
