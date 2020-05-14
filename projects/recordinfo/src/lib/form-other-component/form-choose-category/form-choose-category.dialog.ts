import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog,MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorMessageService } from '../../formErrorMessage.service';
@Component({
    selector: 'form-choose-category-dialog',
    templateUrl: './form-choose-category.dialog.html',
    styleUrls: ['./form-choose-category.dialog.scss'],
    providers:[FormErrorMessageService]
})
export class FormChooseCategoryDialog {
    loading: boolean = false;
    myForm: FormGroup;
    parentInfo : any = []
    categoryName : ''
    categoryId  : ''
    constructor(
        private fb: FormBuilder,
        public _formErrorMessageService: FormErrorMessageService,        
        public dialogRef: MatDialogRef<FormChooseCategoryDialog>,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data
    ) {     
    }
    ngOnInit(){
        this.createForm()
    }

    async createRootCategory() {     
        try{
            this.loading = true
            let res = await this.data._dwClassManageServiceGetMetadataCategoryInfo(this.myForm.value.metadataSchemeId)
            this.loading = false
            this.dialogRef.close({id:this.myForm.value.metadataSchemeId,name:res.name})        
        }catch(err){
            console.log(err)
            this.loading = false
        }        
    }

    createForm() {
        this.myForm = this.fb.group({
            metadataSchemeId : [[],Validators.required]
        });                  
    }

}
