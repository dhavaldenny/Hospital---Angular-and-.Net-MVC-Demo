import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/shared/medicineservice.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor(private service : MedicineService, private toaster :  ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
   
    if(form != null)
      form.resetForm();

    this.service.formData = {
      MedID : null,
      Name  :'',
      Type  :'',
      Manufacturer  :'',
      PrescriptionRequired : true
    };
  }

  onSubmit(form  : NgForm){
    if(form.value.MedID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);

     
  }

  insertRecord(form  : NgForm){
    this.service.postMedicine(form.value)
    .subscribe(res =>{
      this.toaster.success('Inserted Successfully','Added');
      this.resetForm(form);
      this.service.refreshList();
    });



  }

  updateRecord(form  : NgForm){
    this.service.putMedicine(form.value)
    .subscribe(res =>{
      this.toaster.success('Updated Successfully','Updated');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
