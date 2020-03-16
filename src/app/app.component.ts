import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editStatus: boolean = false;
  jsonMetadataTemplate: any = undefined
  showTemplateXml: any = undefined
  loading: boolean = false
  info: any = {}
  constructor(
    public _AppService : AppService,
  ){

  }
  ngOnInit(){
    this.getRecordInfo()
  }

  async getRecordInfo(){
    let res = await this._AppService.getRecordInfo()
    res.jsonMetadata = JSON.parse(res.jsonMetadata)
    this.jsonMetadataTemplate = res.jsonMetadata
    this.showTemplateXml = res.showTemplateXml
    this.editStatus = false
  }
  
}
