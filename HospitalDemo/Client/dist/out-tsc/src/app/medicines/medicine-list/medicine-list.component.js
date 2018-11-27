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
var MedicineListComponent = /** @class */ (function () {
    function MedicineListComponent(service, toaster) {
        this.service = service;
        this.toaster = toaster;
    }
    MedicineListComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
    };
    MedicineListComponent.prototype.populateForm = function (med) {
        this.service.formData = Object.assign({}, med);
    };
    MedicineListComponent.prototype.deleteMed = function (id) {
        var _this = this;
        this.service.deleteMed(id)
            .subscribe(function (res) {
            _this.toaster.success('Deleted Successfully', 'Deleted');
            _this.service.refreshList();
        });
    };
    MedicineListComponent = __decorate([
        Component({
            selector: 'app-medicine-list',
            templateUrl: './medicine-list.component.html',
            styleUrls: ['./medicine-list.component.css']
        }),
        __metadata("design:paramtypes", [MedicineService, ToastrService])
    ], MedicineListComponent);
    return MedicineListComponent;
}());
export { MedicineListComponent };
//# sourceMappingURL=medicine-list.component.js.map