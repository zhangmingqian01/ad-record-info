import { Component, forwardRef, Input, ViewChild,OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as _ from 'lodash';
import { NzFormatEmitEvent,NzTreeNodeOptions } from 'ng-zorro-antd';
import { NzNotificationService } from 'ng-zorro-antd';
import {
    debounceTime, distinctUntilChanged, switchMap
  } from 'rxjs/operators';
@Component({
    selector: 'add-electronic-document',
    templateUrl: './add-electronic-document.component.html',
    styleUrls: ['./add-electronic-document.component.scss'],
})
export class addElectronicDocumentComponent implements OnInit,OnChanges{
    @ViewChild('nzTreeSelect') nzTreeSelect: any;
    loading: boolean = false;
    classList: Array<any> = [];
    selectedItem: any = {}
   
    constructor(
        private notification: NzNotificationService,
    ) {
    }

    ngOnInit(){
        
    }
    ngOnChanges(changes: SimpleChanges){        
                
    }
}


