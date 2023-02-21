import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

const dataList = [
  {
     "id":"0",
     "author":"Alejandro Escamilla 1",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/yC-Yzbqy7PY",
     "download_url":"https://picsum.photos/id/0/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value9" }]
  },
  {
     "id":"1",
     "author":"Alejandro Escamilla 2",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/LNRyGwIJr5c",
     "download_url":"https://picsum.photos/id/1/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value8" }]
  },
  {
     "id":"2",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/N7XodRrbzS0",
     "download_url":"https://picsum.photos/id/2/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value4" }]
  },
  {
     "id":"3",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/Dl6jeyfihLk",
     "download_url":"https://picsum.photos/id/3/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value7" }]
  },
  {
     "id":"4",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/y83Je1OC6Wc",
     "download_url":"https://picsum.photos/id/4/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  },
  {
     "id":"5",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3334,
     "url":"https://unsplash.com/photos/LF8gK8-HGSg",
     "download_url":"https://picsum.photos/id/5/5000/3334",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  },
  {
     "id":"6",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/tAKXap853rY",
     "download_url":"https://picsum.photos/id/6/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  },
  {
     "id":"7",
     "author":"Alejandro Escamilla",
     "width":4728,
     "height":3168,
     "url":"https://unsplash.com/photos/BbQLHCpVUqA",
     "download_url":"https://picsum.photos/id/7/4728/3168",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  },
  {
     "id":"8",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3333,
     "url":"https://unsplash.com/photos/xII7efH1G6o",
     "download_url":"https://picsum.photos/id/8/5000/3333",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  },
  {
     "id":"9",
     "author":"Alejandro Escamilla",
     "width":5000,
     "height":3269,
     "url":"https://unsplash.com/photos/ABDTiLqDhJA",
     "download_url":"https://picsum.photos/id/9/5000/3269",
     "someList": [{ "label": "label1", "value": "value1" }, { "label": "label2", "value": "value2" }, { "label": "label3", "value": "value3" }]
  }
];
export interface IPicSum {
   author: string;
   download_url: string;
   height: number;
   id: string;
   url: string;
   width: number;
   someList: ISomeList[];
}

 export interface ISomeList {
   label: string;
   value: string;
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
  dataList: Partial<IPicSum>[] = dataList;

  title: string = '';
  subtitle: string = '';

  typeOfForm: string = '';

  @ViewChild('nameRef') nameElementRef: ElementRef;

  // @ViewChild('focusContent') sidePanelContent: TemplateRef<any> = any;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus(); //not working dont khow why
    this.nameElementRef.nativeElement.style.backgroundColor="#C8E6C9";
  }

  ngOnInit(): void {

   let str = '1234567890';
   console.log('str', str);
   console.log('str.substring(0,3)', str.substring(0,3)); // 123
   console.log('str.substring(3,0)', str.substring(3,0)); // 123
   // console.log('str.substring(3,5)', str.substring(3,5)); //45
   // console.log('str.substring(3,5)', str.substring(7,str.length)); //890
   console.log('str.slice(0,3)', str.slice(0,3)); //123
   console.log('str.slice(3,0)', str.slice(3,0)); //123
   console.log('=============================================')

   let str2 = '  01 23456 789_10_01234_56 789 '
   console.log('str2', str2)
   console.log('str2', str2.trim().split(/[ \_]+/))
   // console.log( " dasdnk asd, (naks) :d sk_ldma".trim().split(/[ \(,\)\:\_]+/) );
   // console.log('str2.split( ).join(,).split(_).join(,).split(,)', str2.split(' ').join(',').split('_').join(',').split(','))
   // console.log('"a=b,c:d".split(=).join(,).split(:).join(,).split(,)', "a=b,c:d".split('=').join(',').split(':').join(',').split(','))
   console.log('=============================================')

      this.dataList = this.dataList.filter((item, index) => index % 2 !== 0)
      .map((item) => {
         let isHaveNumAtLast = item?.author?.endsWith('2');
         return {
            // ...item, add the rest data
            id: '00000'+item?.id,
            download_url: item?.download_url,            
          ...(isHaveNumAtLast
            ? { author: item?.author?.replace('Escamilla 2','==> -+-') }
            : { author: item?.author?.replace('Escamilla','<==')}
            ),
            // someList: item.someList
            someList: item?.someList?.map((it, index) => {
               let listLength = item?.someList?.length;
               let isLast = index+1===listLength;
               return { 
                  label: it.label, 
                  ...(!isLast? {value: it.value} : {value: it.value.substring(0,it.value.length-1)+'3'}) 
                }
            })
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


      let isTrue = true; //change this to flase for testing
      let st = [ ...(isTrue ? [ 1, 'testing'] : [2]) ];
      console.log('st', st)
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
   if(this.typeOfForm) {
      this.typeOfForm = this.typeOfForm === ETypeOfForm.FORM_1 ? ETypeOfForm.FORM_2 : ETypeOfForm.FORM_1;
   } else {
      this.typeOfForm = ETypeOfForm.FORM_1;
   }
  }
}
