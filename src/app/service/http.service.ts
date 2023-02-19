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
}
