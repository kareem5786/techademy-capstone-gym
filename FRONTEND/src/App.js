import React, { useState } from 'react';   //returns the values

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import images
import facebookIcon from './facebook.png';
import instagramIcon from './instagram.jpeg';
import twitterIcon from './twitter.png';
import youtubeIcon from './youtube.png';
import whatsappIcon from './whatsapp.png';
import cp from './corporate-membership.jpg';
import pt from './personal-training.jpg';
import gp from './group-programs.jpg';



// Import components
import Register from './Register';
import Login from './Login';
import ManageSlots from './ManageSlots';
import BookSlot from './BookSlot';
import UserDashboard from './UserDashboard';
import MembershipForm from './MembershipForm';
import TL from './TL';
import PaymentForm from './PaymentForm';
import Gallery from './gallery';
import Contact from './Contact';
import Admin from './Admin';
import AdminLogin from './AdminLogin';




function App() {
  const [clientSecret] = useState('');
  const [membershipId] = useState('');

  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-top">
            <div className="contact-info">
              <span>Email: AK@gmail.com :: </span> 
              <i class="fa-solid fa-mobile"> <span>Phone: +919996668882 </span> </i>
            </div>
            <div className="gym-name">
              <h1>AK BOOSTER GYM</h1>
            </div>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="Whatsapp" />
              </a>
            </div>
          </div>
          <nav>
            <ul className="nav-list">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/register">Register</Link></li>
              <li><Link className="nav-link" to="/login">Login</Link></li>
              <li><Link className="nav-link" to="/book-slot">Book Slot</Link></li>
              <li><Link className="nav-link" to="/TL">Trainer List</Link></li>
              <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
              <li><Link className="nav-link" to="/MembershipForm">MembershipForm</Link></li>
              <li><Link className="nav-link" to="/AdminLogin">AdminLogin</Link></li>
              
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manage-slots" element={<ManageSlots />} />
            <Route path="/book-slot" element={<BookSlot />} />
            <Route path="/UD" element={<UserDashboard />} />
            <Route path="/MembershipForm" element={<MembershipForm />} />
            <Route path="/TL" element={<TL/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/AdminLogin" element={<AdminLogin />} />

            
            
          </Routes>
          {clientSecret && membershipId && (
            <PaymentForm clientSecret={clientSecret} membershipId={membershipId} />
          )}
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="background-image">
        <div className="content-overlay">
          <h1>Welcome to Our AK gym</h1>
          <p>NOTHING IS OVER UNTIL U ARE TRYING</p>
        </div>
      </div>
      <div className="tabs">
      </div>
      <section className="unique-features">
        <h2>What Makes Us Different</h2>
        <p> State-of-the-Art Equipment
At  AK BOOSTER Gym, we pride ourselves on offering the latest in fitness technology and equipment. Our state-of-the-art machines, free weights, and cardio equipment are meticulously maintained and regularly updated to ensure you have access to the best tools for achieving your fitness goals. Whether you're a seasoned athlete or just starting your fitness journey, our cutting-edge equipment provides the versatility and support you need to succeed.

Personalized Training Programs
We understand that every individual has unique fitness goals and needs. That's why our certified personal trainers work closely with you to design personalized training programs tailored specifically to your objectives. From weight loss and muscle building to sports-specific training and injury rehabilitation, our trainers use their expertise to create customized plans that maximize your results and keep you motivated.

Expert Guidance and Support
Our team of fitness professionals includes certified trainers, nutritionists, and wellness coaches who are dedicated to your success. We provide ongoing guidance and support to help you navigate your fitness journey with confidence. Our trainers offer one-on-one coaching, group classes, and workshops that cover various aspects of health and wellness, ensuring you have access to expert advice every step of the way.
Community and Motivation
At Peak Performance Gym, we believe in the power of community to drive motivation and success. Our supportive environment fosters a sense of camaraderie among members, creating an encouraging space where you can connect with like-minded individuals. We regularly host fitness challenges, group classes, and social events that bring our members together, making your fitness journey not only effective but also enjoyable.

Comprehensive Wellness Services
We go beyond traditional gym services to offer a holistic approach to wellness. Our facility includes amenities such as a wellness center, massage therapy, and nutrition counseling. We provide a full spectrum of services designed to enhance your overall well-being, helping you achieve a balanced and healthy lifestyle both inside and outside the gym.

Flexible Membership Options
We recognize that everyone's lifestyle and fitness needs are different. That's why we offer a variety of membership options to suit your individual preferences and schedule. Whether you prefer a short-term commitment or a long-term plan, we have flexible memberships that provide access to our extensive facilities and services, making it easier for you to stay consistent and achieve your fitness goals.</p>
      </section>
      <section className="legacy">
  <h2>Our Legacy</h2>
  <ul>
    <li><strong>Founded in 2005:</strong> AK Booster Gym has established itself as a leader in fitness and wellness, becoming a trusted name in the community.</li>
    <li><strong>Building a Strong Community:</strong> We have fostered a supportive environment through various events and workshops, creating lasting relationships and a sense of belonging.</li>
    <li><strong>Pioneering Fitness Innovations:</strong> We continually integrate the latest equipment and innovative training programs, ensuring our members benefit from cutting-edge solutions.</li>
    <li><strong>Celebrating Achievements:</strong> We take pride in our members' success stories and transformative journeys, celebrating milestones that reflect the effectiveness of our programs.</li>
    <li><strong>Future Aspirations:</strong> We are dedicated to evolving and enhancing our facilities and services to inspire and support individuals towards a healthier and more fulfilling life.</li>
  </ul>
</section>

      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program">
          <img src={cp} alt="Corporate Membership" />
          <h3>Corporate Membership</h3>
          <p>Enhance your employee wellness with our corporate membership packages. Enjoy exclusive benefits and discounts for your company.</p>
        </div>
        <div className="program">
          <img src={pt} alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>Our certified personal trainers will work with you to create a customized fitness plan that helps you achieve your personal goals.</p>
        </div>
        <div className="program">
          <img src={gp} alt="Group Programs" />
          <h3>Group Programs</h3>
          <p>Join our group classes to stay motivated and fit. We offer a variety of classes, including yoga, HIIT, and strength training.</p>
        </div>
      </section>
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" placeholder='Enter name'required />
          <label>Email:</label>
          <input type="email" name="email" placeholder='Enter emial'required />
          <label>Phone:</label>
          <input type="tel" name="phone"placeholder='Enter phone number' required />
          <label>State:</label>
          <input type="text" name="state"  placeholder='Enter State'required />
          <label>City:</label>
          <input type="text" name="city" placeholder='enter City'required />
          <label>Gym:</label>
          <input type="text" name="gym" required placeholder='from which gym ' />
          <label>Message:</label>
          <textarea name="message"  placeholder='Enter Your Massage'required></textarea>
          <div className="captcha">
            <label>Prove you are not a robot:</label>
            {/* Replace with a real CAPTCHA implementation */}
            <input type="checkbox" name="captcha" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </section>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      
    </div>
    <div className="footer-links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/manage-slots">Manage Slots</a></li>
        <li><a href="/book-slot">Book Slot</a></li>
        <li><a href="/UD">Trainer List</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h2>Contact Us</h2>
      <p>Email: info@akboostergym.com</p>
      <p>Phone: +589 654 321 4658</p>
      <p>Address: 783 Howrah Palace Road, Delhi City, INDIA</p>
    </div>
    <div className="footer-social">
      <h2>Follow Us</h2>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/24x24.png?text=F" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/24x24.png?text=I" alt="Instagram" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/24x24.png?text=T" alt="Twitter" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/24x24.png?text=Y" alt="YouTube" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/24x24.png?text=L" alt="LinkedIn" />
      </a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 AK Booster Gym. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
