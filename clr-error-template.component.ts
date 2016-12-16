/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component,ContentChildren, ViewChild,ViewContainerRef } from '@angular/core';

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
