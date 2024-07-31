import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import SearchBar from './SearchBar';
import './MedicineCatalog.css';

const MedicineCatalog = ({ db, onAddToCart }) => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const medicinesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched Medicines:', medicinesData); // Debug log
        setMedicines(medicinesData);
      } catch (error) {
        console.error('Error fetching medicines:', error); // Error log
      }
    };

    fetchMedicines();
  }, [db]);

  const filteredMedicines = medicines.filter(medicine =>
    medicine.medicine_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="MedicineCatalog">
      <h1>Medicine Catalog</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="MedicineList">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map(medicine => (
            <div key={medicine.id} className="MedicineItem">
              <h2 className="MedicineName">{medicine.medicine_name}</h2>
              <p className="MedicineDescription">{medicine.description}</p>
              <p className="MedicinePrice">Price: ${medicine.price}</p>
              <button onClick={() => onAddToCart(medicine)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No medicines found</p>
        )}
      </div>
    </div>
  );
};

export default MedicineCatalog;
