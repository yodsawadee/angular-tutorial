import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [HelperService]
})
export class MainComponent implements OnInit {
  visible = [
    false, // Template-driven form
    false, // Reactive Form
    false, // Subject, Observables
    false, // Built-in Directives
    false, // Directive
    false, // Pipe
    false, // API
    false, // table
  ];

  constructor(
    private router: Router
    ) { }

  // solutionOddOccurrencesInArray(A: number[]):number {
  //     //{3: 2, 7: 1, 9: 4}
  //     let map = new Map<number, number>();
  //     for (let i = 0; i < A.length; i++) {
  //       let currentItem = A[i];
  //       if (map.has(currentItem)) {
  //         let valOfcurrentItem:any = map.get(currentItem);
  //         map.set(currentItem, valOfcurrentItem + 1);
  //       } else {
  //         map.set(currentItem, 1);
  //       }
  //     }
  //     console.log(map)
  //     let res = 0;
  //     for (let entry of map.entries()) {
  //       // console.log(entry[0], entry[1]);   
  //       if(entry[1]===1) {
  //         res = entry[0];
  //       } 
  //     }
  //     return res;
  //   }

  ngOnInit() { 
    // console.log(this.solutionOddOccurrencesInArray([9, 3, 9,3,9,7,9]));
  }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  goto() {
    this.router.navigateByUrl('/page');
  }

  getReactiveFormVal(val:any) {
    console.log('getReactiveFormVal', val)
  }

}