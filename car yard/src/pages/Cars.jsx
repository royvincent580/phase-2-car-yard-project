import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarDetail from '../components/CarDetail';
import SearchBar from '../components/SearchBar';
import '../styles/Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
        setLoading(false);
      });
  }, []);
  
  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = cars.filter(car => 
      car.make.toLowerCase().includes(term) || 
      car.model.toLowerCase().includes(term) || 
      car.year.toString().includes(term)
    );
    setFilteredCars(filtered);
  };
  
  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };
  
  const handleCloseDetails = () => {
    setSelectedCar(null);
  };
  
  if (loading) {
    return <div className="loading">Loading cars...</div>;
  }
  
  return (
    <div className="cars-page">
      <div className="cars-header">
        <h1>Available Cars</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="cars-container">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard 
              key={car.id} 
              car={car} 
              onViewDetails={handleViewDetails} 
            />
          ))
        ) : (
          <div className="no-cars">No cars match your search criteria.</div>
        )}
      </div>
      
      {selectedCar && (
        <CarDetail car={selectedCar} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default Cars;