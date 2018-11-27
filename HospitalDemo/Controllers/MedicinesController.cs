using DAL;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace HospitalDemo.Controllers
{
    public class MedicinesController : ApiController
    {
        private ServiceRepository dbService = new ServiceRepository();
        // GET: api/Medicines
        public IHttpActionResult GetMedicines()
        {
            return Json(dbService.GetMedicines());
        }

        // GET: api/Medicines/5
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult GetMedicine(int id)
        {
            return Ok(dbService.GetMedicine(id));
        }

        // PUT: api/Medicines/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMedicine(int id, Medicine medicine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != medicine.MedID)
            {
                return BadRequest();
            }


            try
            {
                dbService.PutMedicine(id, medicine);
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Medicines
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult PostMedicine(Medicine medicine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbService.PostMedicine(medicine);

            return CreatedAtRoute("DefaultApi", new { id = medicine.MedID }, medicine);
        }

        // DELETE: api/Medicines/5
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult DeleteMedicine(int id)
        {
            return Ok(dbService.DeleteMedicine(id));
        }


    }
}