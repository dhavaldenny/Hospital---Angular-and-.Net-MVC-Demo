var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MedicineService } from 'src/app/shared/medicineservice.service';
import { ToastrService } from 'ngx-toastr';
var MedicineComponent = /** @class */ (function () {
    function MedicineComponent(service, toaster) {
        this.service = service;
        this.toaster = toaster;
    }
    MedicineComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    MedicineComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            MedID: null,
            Name: '',
            Type: '',
            Manufacturer: '',
            PrescriptionRequired: true
        };
    };
    MedicineComponent.prototype.onSubmit = function (form) {
        if (form.value.MedID == null)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    MedicineComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postMedicine(form.value)
            .subscribe(function (res) {
            _this.toaster.success('Inserted Successfully', 'Added');
            _this.resetForm(form);
            _this.service.refreshList();
        });
    };
    MedicineComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.putMedicine(form.value)
            .subscribe(function (res) {
            _this.toaster.success('Updated Successfully', 'Updated');
            _this.resetForm(form);
            _this.service.refreshList();
        });
    };
    MedicineComponent = __decorate([
        Component({
            selector: 'app-medicine',
            templateUrl: './medicine.component.html',
            styleUrls: ['./medicine.component.css']
        }),
        __metadata("design:paramtypes", [MedicineService, ToastrService])
    ], MedicineComponent);
    return MedicineComponent;
}());
export { MedicineComponent };
//# sourceMappingURL=medicine.component.js.map