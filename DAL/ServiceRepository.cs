using DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ServiceRepository
    {
        private HospitalDemoEntities db = new HospitalDemoEntities();

        public IQueryable<Medicine> GetMedicines()
        {
            return db.Medicines;
        }

        public Medicine GetMedicine(int id)
        {
            Medicine medicine = db.Medicines.Find(id);
            if (medicine == null)
            {
                return null;
            }

            return medicine;
        }

        public bool PutMedicine(int id, Medicine medicine)
        {
            db.Entry(medicine).State = EntityState.Modified;

            try
            {
               return db.SaveChanges() > 0;
            }
            catch (DbUpdateConcurrencyException)
            {
                return false;
            }
        }

        public bool PostMedicine(Medicine medicine)
        {
            db.Medicines.Add(medicine);
            return db.SaveChanges() > 0;
        }

        public Medicine DeleteMedicine(int id)
        {
            Medicine medicine = db.Medicines.Find(id);
            if (medicine != null)
            {
                db.Medicines.Remove(medicine);
                db.SaveChanges();
            }

            return medicine;
        }
    }
}
