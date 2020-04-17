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
    headers.append('accessToken','85890db2e8a2fdce31dd73e39d07c437')         
    params.set('id','bf832091683553280')    
    return this.http.get('./tdrapi/record/get_record_details',{ headers:headers,search: params })
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
