import { useState } from 'react';
import '../styles/CarDetail.css';

function CarDetail({ car, onClose }) {
  const [imageError, setImageError] = useState(false);
  
  if (!car) return null;
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="car-detail-overlay">
      <div className="car-detail-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="car-detail-content">
          <div className="car-detail-image">
            <img 
              src={imageError ? 'https://i.pinimg.com/564x/91/87/47/9187472c200a8f78f93599181f4abb99.jpg' : car.image} 
              alt={`${car.year} ${car.make} ${car.model}`} 
              onError={handleImageError}
            />
          </div>
          <div className="car-detail-info">
            <h2>{car.year} {car.make} {car.model}</h2>
            <p className="car-price">KSh {car.price.toLocaleString()}</p>
            <div className="car-specs">
              <div className="spec">
                <span className="spec-label">Mileage:</span>
                <span className="spec-value">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec">
                <span className="spec-label">Color:</span>
                <span className="spec-value">{car.color}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Fuel Type:</span>
                <span className="spec-value">{car.fuelType}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Transmission:</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
            </div>
            <div className="car-description">
              <h3>Description</h3>
              <p>{car.description}</p>
            </div>
            <div className="car-actions">
              <button className="inquiry-btn">Make Inquiry</button>
              <button className="test-drive-btn">Schedule Test Drive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;