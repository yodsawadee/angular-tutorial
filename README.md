# Angular Tutorial

reference: https://angular.io/guide/cheatsheet

## BUILT-IN DIRECTIVES:
1. __ngIf__
```
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome back, friend.
</div>

<ng-template #loggedOut>
  Please friend, login.
</ng-template>
```
2. __ngFor__
* html file: `<ng-container *ngFor="let item of items; index as i; trackBy: trackByFn">...</ng-container>`
* typescript file: `trackByFn(index, item) { return item.accountRefId; }`
```
<li *ngFor="let user of users; index as i; first as isFirst">
  {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```
- `index`: number: The index of the current item in the iterable.
- `count`: number: The length of the iterable.
- `first`: boolean: True when the item is the first item in the iterable.
- `last`: boolean: True when the item is the last item in the iterable.
- `even`: boolean: True when the item has an even index in the iterable.
- `odd`: boolean: True when the item has an odd index in the iterable.
3.  __ngSwitch__
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
4. __ngClass__
- `<div [ngClass]="condition ? 'filled' : 'not-fill'">`
- `<div [ngClass]="{'checkbox-active': isSelectedAllAccount || isIndeterminate, 'disabled': isDisabled}">`
5. __ngClass__
- `<div [ngStyle]="{'pointer-events': condition ? 'none' : 'unset'}">`
- `<div [ngStyle]="{'property': 'value'}">`
- `<div [ngStyle]="dynamicStyles()">`

### Content projection 
ref: https://angular.io/guide/content-projection
```
<ng-container *ngTemplateOutlet="detailsBody"></ng-container>

<ng-template #detailsBody>
  <ng-container [ngSwitch]="typeOfForm?.value">
    <ng-container *ngSwitchCase="form1" [ngTemplateOutlet]="form1Body"></ng-container>
    <ng-container *ngSwitchCase="form2" [ngTemplateOutlet]="form2Body"></ng-container>
  </ng-container>
</ng-template>

<ng-template #form1Body>
  <div *ngFor="let item of data.list">
    <label>{{ item.label }}</label>
    <div>{{ item.value }}</div>
  </div>
</ng-template>
```
__Multi-slot content projection__
```
  selector: 'app-zippy-multislot',
  template: `
    <h2>Multi-slot content projection</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `
```
```
<app-zippy-multislot>
  <p question>
    Is content projection cool?
  </p>
  <p>Let's learn about content projection!</p>
</app-zippy-multislot>
```

## CLASS DECORATORS:
`import { Directive, … } from '@angular/core';`
- `@Component`
- `@Injectable` defines a class as a service
- `@Directive` are defined as classes that can add new behavior to the elements in the template or modify existing behavior. The purpose of Directives in Angular is to maneuver the DOM, be it by adding new elements to DOM or removing elements and even changing the appearance of the DOM elements.
- `@Pipe` a simple way to transform values in an Angular template.

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
