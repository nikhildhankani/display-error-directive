import { Directive, Input,Injector } from '@angular/core';
import { TemplateRef, 
          ViewContainerRef, 
          ComponentFactoryResolver, 
          ComponentRef,
          Component,
          ViewChild
    } from '@angular/core';


@Directive({ selector: '[displayNgErrors]' })
export class DisplayNgErrorsDirective {
  constructor( private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef,
  private crf: ComponentFactoryResolver,
  private injector: Injector) {
  }

  _componentReference:ComponentRef;
  _instance;
  
  @Input() set displayNgErrors(error: string){
    if(!this._instance) {
      let factory = this.crf.resolveComponentFactory(NgErrorComponent);
      this._componentReference = factory.create(this.injector);
      this._instance = this._componentReference.instance;
      this._instance.templateToBeReplaced.createEmbeddedView(this.templateRef);
    }
    this._instance.error = error;
    this.viewContainer.insert(this._componentReference.hostView);
  }
}

@Component({
  template:'<template #t1></template>'+
                      '<div [hidden]="!(error && error.length>0)" class="alert alert-danger">'+
                          '{{error}}'
                      +'</div>'
                      
})
export class NgErrorComponent {
  error:string='';
  @ViewChild("t1", { read: ViewContainerRef }) templateToBeReplaced;
}
