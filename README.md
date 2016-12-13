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
<input type="text" id="name" class="form-control" formControlName="name" required *displayClrError="formErrors.name">
```

All this directive does is that adds the div at runtime to the html, hence reducing the clutter in html. And if in future you decide to change the style of your filed validation error messages all you need to change is the directive.

For example, to use [clarity field validation error messages](https://vmware.github.io/clarity/documentation/input-fields) you can use display-clr-error directive. https://plnkr.co/bAP4qn/

## How to use
* Copy these two files([clarity-field-error.component.ts](https://github.com/nikhildhankani/display-error-directive/blob/master/clarity-field-error.component.ts) and [display-clr-error.ts](https://github.com/nikhildhankani/display-error-directive/blob/master/display-clr-error.ts) ) in your project.
* Import them in your root module, and add the display component(ClarityFieldError) in your entryComponents
```javascript
@NgModule({
  imports: [
    ....
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...
    DisplayClarityErrorDirective,
    ClarityFieldError
  ],
  entryComponents:[ClarityFieldError]
```
