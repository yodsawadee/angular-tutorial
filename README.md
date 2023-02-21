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
- `@Injectable` defines a class as a __service__
- `@Directive` are defined as classes that can __add new behavior to the elements in the template or modify existing behavior__. The purpose of Directives in Angular is to maneuver the DOM, be it by adding new elements to DOM or removing elements and even changing the appearance of the DOM elements.
- `@Pipe` a simple way to __transform values__ in an Angular template.

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
> Called __before any other lifecycle__ hook. Use it to inject dependencies, but avoid any serious work here.
2. implements __OnChanges__ : `ngOnChanges(changeRecord)`
> Called __after every change to input__ properties and before processing content or child views. (if not have `@Input() myProperty;`, __ngOnChanges__ will not be called)
3. implements __OnInit__ : `ngOnInit()`
> Called `once` __after the [1]constructor__, initializing input properties, and the __first/after call to [2]ngOnChanges__.
4. implements __DoCheck__ : `ngDoCheck()`
> Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
5. implements __AfterContentInit__ : `ngAfterContentInit()`
> Called `once` __after the first [4]ngDoCheck()__, after __[3]ngOnInit__ when the component's or directive's content has been initialized.
6. implements __AfterContentChecked__ : `ngAfterContentChecked()`
> Called after every check of the component's or directive's content.
7. implements __AfterViewInit__ : `ngAfterViewInit()`
> Called `once` __after the first [6]ngAfterContentChecked()__, after __[5]ngAfterContentInit__ when the component's views and child views / the view that a directive is in has been initialized.
8. implements __AfterViewChecked__ : `ngAfterViewChecked()`
> Called __after the [7]ngAfterViewInit() and every subsequent [6]ngAfterContentChecked()__, after every check of the component's views and child views / the view that a directive is in.
9. implements __OnDestroy__ : `ngOnDestroy()`
> Called once, __before the instance is destroyed__.

__constructor => OnChanges => OnInit => DoCheck => AfterContentInit => AfterContentChecked => AfterViewInit => AfterViewChecked =>
DoCheck => AfterContentChecked => AfterViewChecked => OnDestroy__
