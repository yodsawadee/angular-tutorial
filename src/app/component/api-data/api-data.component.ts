import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpService, IPicSum } from 'src/app/service/http.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {

  imgSource: string = '';

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getPicSum().subscribe((it) => {
      it.forEach((element:IPicSum) => {
        this.imgSource = element.download_url;
      });
    });

    this.getObservableAndPromise();
    this.getTodos();
  }

  async getObservableAndPromise() {
    const data$ = new Observable(subscriber => {
      subscriber.next('todo 1')
      subscriber.next('todo 2')
      subscriber.next('todo 3')
      subscriber.complete()
    })
    console.log('before data$.subscribe')
    data$.subscribe((value:any) => console.log(value))

    const value = await data$.toPromise(); // wait for all data to come
    console.log('value ->', value)


    // Hadle empty
    const emptyData$ = new Observable(subscriber => {
      subscriber.complete()
    })
    const valueEmpty = await lastValueFrom(emptyData$, {defaultValue: 'Default'}); // if empty retrun default value
    console.log('valueEmpty ->', valueEmpty)

    // Handel undefined
    const UndefinedData$ = new Observable(subscriber => {
      subscriber.next(undefined)
      subscriber.complete()
    })
    try {
      const valueUndefined = await lastValueFrom(UndefinedData$, {defaultValue: 'Default'}) ?? 'Default 2'; // if not empty but undefined retrun default value 2
      console.log('valueUndefined ->', valueUndefined)
    } catch(e) {
      console.log(e)
    }
  }

  async getTodos() {
    console.log('getTodos',await this.httpService.getTodos())
  }
}
