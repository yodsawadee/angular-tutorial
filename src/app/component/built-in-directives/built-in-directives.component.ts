import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

const dataList = [
  {
     "id":"0",
     "author":"Alejandro Escamilla 1",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/yC-Yzbqy7PY",
     "download_url":"https://picsum.photos/id/0/5000/3333"
  },
  {
     "id":"1",
     "author":"Alejandro Escamilla 2",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/LNRyGwIJr5c",
     "download_url":"https://picsum.photos/id/1/5000/3333"
  },
  {
     "id":"2",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/N7XodRrbzS0",
     "download_url":"https://picsum.photos/id/2/5000/3333"
  },
  {
     "id":"3",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/Dl6jeyfihLk",
     "download_url":"https://picsum.photos/id/3/5000/3333"
  },
  {
     "id":"4",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/y83Je1OC6Wc",
     "download_url":"https://picsum.photos/id/4/5000/3333"
  },
  {
     "id":"5",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3334,
     "url":"https://unsplash.com/photos/LF8gK8-HGSg",
     "download_url":"https://picsum.photos/id/5/5000/3334"
  },
  {
     "id":"6",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/tAKXap853rY",
     "download_url":"https://picsum.photos/id/6/5000/3333"
  },
  {
     "id":"7",
     "author":"Alejandro Escamilla",
     "width":4728,
     "height":3168,
     "url":"https://unsplash.com/photos/BbQLHCpVUqA",
     "download_url":"https://picsum.photos/id/7/4728/3168"
  },
  {
     "id":"8",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/xII7efH1G6o",
     "download_url":"https://picsum.photos/id/8/5000/3333"
  },
  {
     "id":"9",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3269,
     "url":"https://unsplash.com/photos/ABDTiLqDhJA",
     "download_url":"https://picsum.photos/id/9/5000/3269"
  }
];
export interface IPicSum {
   author: string;
   download_url: string;
   height: number;
   id: string;
   url: string;
   width: number;
 }

export enum ETypeOfForm {
   FORM_1 = 'form1',
   FORM_2 = 'form2',
}

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements AfterViewInit, OnInit {

  name: string = '';
  nameStr: any;
  dataList: Array<Partial<IPicSum>> = dataList;

  title: string = '';
  subtitle: string = '';

  typeOfForm: string = ETypeOfForm.FORM_1;

  @ViewChild('nameRef') nameElementRef: ElementRef;

  // @ViewChild('focusContent') sidePanelContent: TemplateRef<any> = any;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus(); //not working dont khow why
    this.nameElementRef.nativeElement.style.backgroundColor="#C8E6C9";
  }

  ngOnInit(): void {
      this.dataList = this.dataList.filter((item, index) => index % 2 !== 0)
      .map((item:Partial<IPicSum>) => {
         let isHaveNumAtLast = item.author?.endsWith('2');
         return {
            // ...item, add the rest data
            id: '00000'+item.id,
            download_url: item.download_url,            
          ...(isHaveNumAtLast
            ? { author: item.author?.replace('Escamilla 2','==> -+-') }
            : { author: item.author?.replace('Escamilla','<==')}
            ),
         }
      })
      console.log('this.dataList', this.dataList)

      const newDate = { id: this.dataList.length.toString(), author: 'janny' }
      const dataListAfter = [...this.dataList, newDate];
      console.log('dataListAfter', dataListAfter)
      
      const newDate2 = [{ id: dataListAfter.length.toString(), author: 'jan yod' }]
      const dataListAfter2 = [...dataListAfter, ...newDate2];
      console.log('dataListAfter2', dataListAfter2)

      this.dataList = dataListAfter2;
  }

  nameChange(evenet: any) {
    console.log('nameChange',evenet);
    this.nameStr = evenet;
  }

  titleChange(evenet: any) {
   this.title = evenet;
  }
  subtitleChange(evenet: any) {
   this.subtitle = evenet;
  }

  trackByFn(index: any, item: any) {
   // console.log('index',index);
   // console.log('item',item);
  }

  toggleForm() {
   this.typeOfForm = this.typeOfForm === ETypeOfForm.FORM_1 ? ETypeOfForm.FORM_2 : ETypeOfForm.FORM_1;
  }
}
