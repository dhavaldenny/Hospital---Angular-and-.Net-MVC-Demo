var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MedicineService = /** @class */ (function () {
    //readonly rootUrl = "http://localhost:50758/api";
    function MedicineService(http) {
        this.http = http;
        this.rootUrl = "../api";
    }
    MedicineService.prototype.postMedicine = function (formData) {
        debugger;
        return this.http.post(this.rootUrl + '/Medicines', formData);
    };
    MedicineService.prototype.putMedicine = function (formData) {
        return this.http.put(this.rootUrl + '/Medicines/' + formData.MedID, formData);
    };
    MedicineService.prototype.refreshList = function () {
        var _this = this;
        return this.http.get(this.rootUrl + '/Medicines').toPromise().then(function (res) { return _this.list = res; });
    };
    MedicineService.prototype.deleteMed = function (id) {
        return this.http.delete(this.rootUrl + '/Medicines/' + id);
    };
    MedicineService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MedicineService);
    return MedicineService;
}());
export { MedicineService };
//# sourceMappingURL=medicineservice.service.js.map