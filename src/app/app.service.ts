import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http : Http,
  ) { }


  getRecordInfo() : Promise<any> {
    let params = new URLSearchParams();
    let headers = new Headers()
    headers.append('accessToken','8ae6829154ef58b02402260dd190ef1d')         
    params.set('parentId','/金华市人民检察院/文件整理/2018/WS.文书档案/A.文书档案（件）')  
    params.set('collectionWay','record') 
    params.set('actionType','1') 
    params.set('sceneCode','erms_zljh') 
    return this.http.get('./ermsapi/metadata/get_form_base_info',{ headers:headers,search: params })
                    .toPromise()
                    .then(res =>{
                        let body = res.json();
                        return body
                    })
                    .catch(error =>
                      alert (error)
                    );
  }
}
