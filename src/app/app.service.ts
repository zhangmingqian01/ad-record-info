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
    headers.append('accessToken','0d1c269a5ca5abec14c0dff22ec4319e')         
    params.set('parentId','bf832558718222336')  
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
