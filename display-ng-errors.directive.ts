import { Directive, Input,Injector } from '@angular/core';
import { TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NgErrorComponent } from './ng-error-template.component';

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
