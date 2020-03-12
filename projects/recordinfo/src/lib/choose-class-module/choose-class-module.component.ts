import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as _ from 'lodash';
import { NzFormatEmitEvent,NzTreeNodeOptions } from 'ng-zorro-antd';
import { NzNotificationService } from 'ng-zorro-antd';
import {
    debounceTime, distinctUntilChanged, switchMap
  } from 'rxjs/operators';
export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => chooseClassModuleContentComponent),
    multi: true
};
@Component({
    selector: 'choose-class-module',
    templateUrl: './choose-class-module.component.html',
    styleUrls: ['./choose-class-module.component.scss'],
    providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class chooseClassModuleContentComponent implements ControlValueAccessor {
    @ViewChild('nzTreeSelect') nzTreeSelect: any;
    loading: boolean = false;
    classList: Array<any> = [];
    selectedItem: any = {}
    @Input() _parentInfo: any = [];
    @Input() _dwClassManageServiceGetMetaSysClassList : (id:string)=> Promise<any>
    constructor(
        private notification: NzNotificationService,
    ) {
        this.getClassList()
    }


    get parentInfo() {
        return this._parentInfo;
    }

    set parentInfo(value: any) {
        this._parentInfo = value;
        this.propagateChange(this._parentInfo);
    }

    propagateChange = (_: any) => { };

    writeValue(value: any) {
        if (value !== undefined) {
            this.parentInfo = value;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }


    async onExpandChange(e: Required<NzFormatEmitEvent>){
        const node = e.node;        
        if (node && node.getChildren().length === 0 && node.isExpanded) {
            let res = await this._dwClassManageServiceGetMetaSysClassList(node.key)
            let children = res.map(c=>{
                return {
                    key : c.id,
                    children : [],
                    value : c,
                    isLeaf:c.bottom,
                    disabled : !c.bottom,
                    title : c.objectName
                }
            })        
            node.addChildren(children);
        }
    }

    async getClassList() {
        let res = await this._dwClassManageServiceGetMetaSysClassList('0')
        this.classList = res.map(c=>{
            return {
                key : c.id,
                children : [],
                isLeaf:c.bottom,
                value : c,
                title : c.objectName,
                disabled : !c.bottom
            }
        })  
        this.nzTreeSelect.nzTreeClick.pipe(debounceTime(500)).subscribe(($event)=>{                           
            if (!$event.node.isLeaf){
                this.notification.blank(
                    '请选择下一级门类',
                    ''
                  );
                // this._ResponseHandleService.showMessage('')
            }
        })
    }

    changeSelect(e){
        this.parentInfo = e
    }
}



