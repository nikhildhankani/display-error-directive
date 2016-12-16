/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component,ContentChildren, ViewChild,ViewContainerRef } from '@angular/core';

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
