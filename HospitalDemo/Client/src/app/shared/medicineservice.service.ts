import { Injectable } from '@angular/core';
import { Medincine } from './medincine.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  formData : Medincine;
  list : Medincine[];
  readonly rootUrl = "../api";
  //readonly rootUrl = "http://localhost:50758/api";
  constructor(private http : HttpClient) { }

  postMedicine(formData: Medincine) {
    debugger;
    return this.http.post(this.rootUrl + '/Medicines',formData);
  }

  putMedicine(formData : Medincine){
    return this.http.put(this.rootUrl + '/Medicines/' +formData.MedID,formData);
  }

  refreshList (){
    return this.http.get(this.rootUrl + '/Medicines').toPromise().then(res => this.list = res as Medincine[]);
  }

  deleteMed(id :number)
  {
    return this.http.delete(this.rootUrl + '/Medicines/'+ id);
  }

}
