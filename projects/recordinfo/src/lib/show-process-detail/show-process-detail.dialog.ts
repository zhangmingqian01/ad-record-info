import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog,MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
@Component({
    selector: 'show-process-detail-dialog',
    templateUrl: './show-process-detail.dialog.html',
    styleUrls: ['./show-process-detail.dialog.scss'],
})
export class ShowProcessDetailDialog implements OnInit{
    loading : boolean = false 
    info : Array<any> = []
    constructor(
        public dialogRef: MatDialogRef<ShowProcessDetailDialog>,
        public dialog: MatDialog,        

        @Inject(MAT_DIALOG_DATA) public data
    ) { }

    ngOnInit() {                    
       this.info = _.castArray(this.data.info.property)        
    }

   
}
