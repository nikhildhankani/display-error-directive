import { Component,ContentChildren, ViewChild,ViewContainerRef } from '@angular/core';

@Component({
  template: '<label aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation tooltip-sm" [class.invalid]="error && error.length>0">'+
                      '<template #t></template>'+
                      '<span [hidden]="!(error && error.length>0)" class="tooltip-content">'+
                         '{{error}}'
                      +'</span>'+
                 '</label>'
})
export class ClarityFieldError {
  error:string='';
  @ViewChild("t", { read: ViewContainerRef }) templateToBeReplaced;
}
