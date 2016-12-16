import { Directive, Input,Injector } from '@angular/core';
import { TemplateRef, 
          ViewContainerRef, 
          ComponentFactoryResolver, 
          ComponentRef,
          Component,
          ViewChild
    } from '@angular/core';
    
@Directive({ selector: '[displayClrErrors]' })
export class DisplayClrErrorsDirective {
  constructor( private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef,
  private crf: ComponentFactoryResolver,
  private injector: Injector) {
  }

  _componentReference:ComponentRef;
  _instance;
  
  @Input() set displayClrErrors(error: string){
    if(!this._instance) {
      let factory = this.crf.resolveComponentFactory(ClrErrorComponent);
      this._componentReference = factory.create(this.injector);
      this._instance = this._componentReference.instance;
      this._instance.templateToBeReplaced.createEmbeddedView(this.templateRef);
    }
    this._instance.error = error;
    this.viewContainer.insert(this._componentReference.hostView);
  }
}

@Component({
  template: '<label aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation tooltip-sm" [class.invalid]="error && error.length>0">'+
                      '<template #t1></template>'+
                      '<span [hidden]="!(error && error.length>0)" class="tooltip-content">'+
                         '{{error}}'
                      +'</span>'+
                 '</label>'
})
export class ClrErrorComponent {
  error:string='';
  @ViewChild("t1", { read: ViewContainerRef }) templateToBeReplaced;
}
