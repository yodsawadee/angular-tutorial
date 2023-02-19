# Angular Tutorial

reference: https://angular.io/guide/cheatsheet

## BUILT-IN DIRECTIVES:
1. `<section *ngIf="showSection">`
2. `<li *ngFor="let item of list">` or `<ng-container *ngFor="let item of list; let i = index; let last = last">`
3. 
```
<div [ngSwitch]="conditionExpression">
    <ng-template [ngSwitchCase]="case1Exp"> 
        … 
    </ng-template>
    <ng-template ngSwitchCase="case2LiteralString"> 
        … 
    </ng-template>
    <ng-template ngSwitchDefault> 
        … 
    </ng-template> 
</div>
```
4. `<div [ngClass]="condition ? 'filled' : 'not-fill'">` or `<div [ngClass]="{'checkbox-active': isSelectedAllAccount || isIndeterminate, 'disabled': isDisabled}">`
5. `<div [ngStyle]="{'pointer-events': condition ? 'none' : 'unset'}">` or `<div [ngStyle]="{'property': 'value'}">` or `<div [ngStyle]="dynamicStyles()">`
6.
```
<ng-container *ngTemplateOutlet="detailsBody"></ng-container>

<ng-template #detailsBody>
  <ng-container [ngSwitch]="typeOfForm?.value">
    <ng-container *ngSwitchCase="form1" [ngTemplateOutlet]="form1Body"></ng-container>
    <ng-container *ngSwitchCase="form2" [ngTemplateOutlet]="form2Body"></ng-container>
  </ng-container>
</ng-template>

<ng-template #form1Body>
  <div class="mt-12px text-data color-precious-blue" uiGrid [cols]="2" [gap]="'24px'">
    <div *ngFor="let item of data.list">
      <label>{{ item.label }}</label>
      <div>{{ item.value }}</div>
    </div>
  </div>
</ng-template>
```

## CLASS DECORATORS:
`import { Directive, … } from '@angular/core';`
- `@Component`
- `@Injectable`
- `@Directive`
- `@Pipe`

## CLASS FIELD DECORATORS FOR DIRECTIVES AND COMPONENTS:
`import { Input, … } from '@angular/core';`
- `@Input() myProperty;`
- `@Output() myEvent = new EventEmitter();`
- `@HostBinding('class.valid') isValid;`
- `@HostListener('click', ['$event']) onClick(e)`
- `@ContentChild(myPredicate) myChildComponent;`
- `@ContentChildren(myPredicate) myChildComponents;`
- `@ViewChild(myPredicate) myChildComponent;`
- `@ViewChildren(myPredicate) myChildComponents;`

## DIRECTIVE AND COMPONENT CHANGE DETECTION AND LIFECYCLE HOOKS (IMPLEMENTED AS CLASS METHODS):
1. `constructor(myService: MyService, …)`
Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
2. `ngOnChanges(changeRecord)`
Called after every change to input properties and before processing content or child views.
3. `ngOnInit()`
Called after the constructor, initializing input properties, and the first call to ngOnChanges.
4. `ngDoCheck()`
Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
5. `ngAfterContentInit()`
Called after ngOnInit when the component's or directive's content has been initialized.
6. `ngAfterContentChecked()`
Called after every check of the component's or directive's content.
7. `ngAfterViewInit()`
Called after ngAfterContentInit when the component's views and child views / the view that a directive is in has been initialized.
8. `ngAfterViewChecked()`
Called after every check of the component's views and child views / the view that a directive is in.
9. `ngOnDestroy()`
Called once, before the instance is destroyed.
