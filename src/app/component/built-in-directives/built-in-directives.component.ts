import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements AfterViewInit {

  name: string = '';
  nameStr: any;

  @ViewChild('nameRef') nameElementRef: ElementRef;

  // @ViewChild('focusContent') sidePanelContent: TemplateRef<any> = any;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus(); //not working dont khow why
    this.nameElementRef.nativeElement.style.backgroundColor="yellow";
  }

  nameChange(evenet: any) {
    console.log('nameChange',evenet);
    this.nameStr = evenet;
  }

}
