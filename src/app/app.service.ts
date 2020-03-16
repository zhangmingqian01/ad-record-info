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
    headers.append('accessToken','ce7bfe102db846aa94f4fdc025fc7f4f')         
    params.set('id','/桐庐档案馆/接收管理库/馆藏档案/WS.文书档案/A.文书档案（件）/d1318c47-5ba7-4e57-953b-e3aa9a4865d1')    
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
