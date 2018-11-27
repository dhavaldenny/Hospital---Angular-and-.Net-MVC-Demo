import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/shared/medicineservice.service';
import { Medincine } from 'src/app/shared/medincine.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  constructor(private service : MedicineService, private toaster :  ToastrService) {

   }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(med : Medincine){
    this.service.formData = Object.assign({},med);  
  }

  deleteMed(id :number){
    this.service.deleteMed(id)
    .subscribe(res =>{
      this.toaster.success('Deleted Successfully','Deleted');
      this.service.refreshList();
    });
  }
}
