
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, LogIn, UserPlus, User, LogOut } from 'lucide-react';
import restaurantsData from '../data/restaurants.json'; 
import './Home.css';


const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(restaurantsData);
  }, []);

  return (
    <div className="home-container">
    <header>
      <div className='navbar'>
      <Link to="/" className="nav-link">
        <Utensils size={24}  style={{color:'#800020'}}/>
          <span className='name'>Indian Flavors Explorer</span>
      </Link>

      <nav className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/restaurants" className="nav-link">Restaurants</Link>
        <Link to="/cuisines" className="nav-link">Cuisines</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to='/login'><button style={{
          height:'5vh',
          width:'6vw',
          paddingRight:'2px',
          marginRight:'5px',
          backgroundColor:'#FFFFFF',
          border:'1px solid #8B0000',
          color:' #8B0000',
          }}>Log Out</button></Link>
      </nav>

      

      </div>
    </header>
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className='main'>Discover the Finest Indian Cuisine</h1>
          <div className="search-bar">
            <input type="text" placeholder="Enter location..." className='location'/>
            <select className='cuisine'>
              <option>All Cuisines</option>
              <option>North-Indian</option>
              <option>Indian</option>
              <option>Italian</option>
              <option>Japanese</option>
              <option>Chinese</option>
            </select>
            <button>Find Restaurants</button>
          </div>

        </div>
      </section>

      <section className="featured-section">
        <div className="featured-header">
          <h2>Featured Restaurants</h2>
          <Link to="/restaurants" className="view-all-link">View All →</Link>
        </div>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.id}>
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="card-content">
                <h3>{restaurant.name}</h3>
                <p className="location">{restaurant.location}</p>
                <p className="cuisine">{restaurant.cuisine} • {restaurant.price}</p>
                <Link to={`/restaurant/${restaurant.id}`} className="details-link">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
