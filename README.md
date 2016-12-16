# display-error-directive
Directive to display error in fields in angular2

When I started reading about showing [validation error in angular 2](https://angular.io/docs/ts/latest/cookbook/form-validation.html), I realized that it was too much of markup in the html to display error.

```html
<input type="text" id="name" class="form-control" formControlName="name" required >

<div *ngIf="formErrors.name" class="alert alert-danger">
  {{ formErrors.name }}
</div>
```

This means that for every field I will need this div which displays the errors if any for the field. This directive is to reduce this clutter from the templates.

```html
<input type="text" id="name" class="form-control" formControlName="name" required *displayNgError="formErrors.name">
```

All this directive does is that adds the div at runtime to the html, hence reducing the clutter in html. And if in future you decide to change the style of your filed validation error messages all you need to change is the directive.

For example, to use [clarity field validation error messages](https://vmware.github.io/clarity/documentation/input-fields) you can use display-clr-error directive. https://plnkr.co/Sc3k31

## How to use
* Copy the directive you want to use [display-clr-errors.directive.ts](https://github.com/nikhildhankani/display-error-directive/blob/master/display-clr-errors.directive.ts) or [display-ng-errors.ts](https://github.com/nikhildhankani/display-error-directive/blob/master/display-ng-errors.directive.ts) in your project.
* Import it in your root module, and add the tempate component(ClrErrorComponent for clarity directive, NgErrorComponent for ng directive) it uses in your entryComponents
```javascript
//for clarity error
import { DisplayClrErrorsDirective, ClrErrorComponent } from './directive/display-clr-errors.directive';
//for ng error
import { DisplayNgErrorsDirective, NgErrorComponent } from './directive/display-ng-errors.directive'

@NgModule({
  imports: [
    ....
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...
    //for clarity error
    DisplayClarityErrorDirective,
    ClrErrorComponent,
    //for ng error
    DisplayNgErrorsDirective, 
    NgErrorComponent
  ],
  //for clarity error
  entryComponents:[ClrErrorComponent]
  //for ng error
  //entryComponents:[ClrErrorComponent]
```
* 
Use it in your field where you want validation and pass it the errors you want to display
<input type="text" id="name" class="form-control" formControlName="name" required *displayNgError="formErrors.name">

* Check https://plnkr.co/Sc3k31 for an example
