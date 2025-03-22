document.addEventListener("DOMContentLoaded", () => {
  // Create the HTML structure
  document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ladle and the Whisk | New Orleans' Culinary Haven</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary: #34785a;
          --secondary: #f9f6f0;
          --accent: #e9a13a;
          --text-dark: #333;
          --text-light: #fff;
          --font-heading: 'Playfair Display', serif;
          --font-body: 'Poppins', sans-serif;
          --shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
          --border-radius: 8px;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: var(--font-body);
          color: var(--text-dark);
          line-height: 1.6;
          background-color: var(--secondary);
          position: relative;
          -webkit-text-size-adjust: 100%;
        }
        
        header {
          background-color: transparent;
          color: var(--text-light);
          padding: 1.5rem;
          position: absolute;
          width: 100%;
          z-index: 1000;
          top: 0;
          left: 0;
          transition: background-color 0.3s;
        }
        
        .header-scrolled {
          background-color: var(--primary);
          box-shadow: var(--shadow);
          position: fixed;
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
          letter-spacing: 1px;
        }
        
        nav ul {
          display: flex;
          list-style: none;
        }
        
        nav ul li {
          margin-left: 2rem;
        }
        
        nav a {
          color: var(--text-light);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          font-size: 1.05rem;
          transition: color 0.3s;
        }
        
        nav a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s;
        }
        
        nav a:hover {
          color: var(--accent);
        }
        
        nav a:hover::after {
          width: 100%;
        }
        
        .mobile-menu {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: var(--text-light);
          display: flex;
          align-items: center;
          padding: 2rem;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero h1 {
          font-family: var(--font-heading);
          font-size: 4rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero h2 {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
        
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }
        
        .btn {
          display: inline-block;
          background-color: var(--accent);
          color: var(--text-dark);
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          border: 2px solid var(--accent);
          cursor: pointer;
          margin: 0 0.5rem 0.5rem;
          min-width: 150px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.85rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 100%;
          background-color: var(--primary);
          transition: width 0.3s, left 0.3s;
          z-index: -1;
        }
        
        .btn:hover {
          color: var(--text-light);
          border-color: var(--primary);
        }
        
        .btn:hover::before {
          width: 100%;
          left: 0;
        }
        
        .btn-outline {
          background-color: transparent;
          color: var(--text-light);
          border-color: var(--text-light);
        }
        
        .btn-outline::before {
          background-color: var(--accent);
        }
        
        .btn-outline:hover {
          color: var(--text-dark);
          border-color: var(--accent);
        }
        
        .section {
          padding: 6rem 2rem;
          position: relative;
        }
        
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-heading {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
          color: var(--primary);
          margin-bottom: 3rem;
        }
        
        .section-heading::after {
          content: '';
          position: absolute;
          height: 3px;
          width: 70px;
          background-color: var(--accent);
          bottom: -15px;
          left: 0;
        }
        
        .section-intro {
          max-width: 800px;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .about {
          background-color: white;
        }
        
        .about-content {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-top: 2rem;
          flex-direction: column;
        }
        
        .about-text {
          flex: 1;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .about-image {
          flex: 1;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          max-width: 100%;
          position: relative;
        }
        
        .about-image::after {
          content: '';
          position: absolute;
          top: 20px;
          right: 20px;
          bottom: 20px;
          left: 20px;
          border: 3px solid var(--accent);
          border-radius: var(--border-radius);
          pointer-events: none;
          z-index: 1;
        }
        
        .about-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s;
        }
        
        .about-image:hover img {
          transform: scale(1.05);
        }
        
        .services {
          background-color: var(--secondary);
          position: relative;
          overflow: hidden;
        }
        
        .services::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background-color: rgba(52, 120, 90, 0.05);
          border-radius: 50%;
          top: -150px;
          right: -150px;
          z-index: 0;
        }
        
        .services::after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background-color: rgba(233, 161, 58, 0.05);
          border-radius: 50%;
          bottom: -100px;
          left: -100px;
          z-index: 0;
        }
        
        .services-container {
          position: relative;
          margin-top: 2rem;
          z-index: 1;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          background-color: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
        
        .service-img {
          height: 220px;
          overflow: hidden;
          position: relative;
        }
        
        .service-img::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6) 100%);
          z-index: 1;
        }
        
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .service-card:hover .service-img img {
          transform: scale(1.1);
        }
        
        .service-content {
          padding: 1.8rem;
        }
        
        .service-content h3 {
          font-family: var(--font-heading);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: var(--primary);
          position: relative;
          padding-bottom: 0.8rem;
        }
        
        .service-content h3::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 2px;
          background-color: var(--accent);
          bottom: 0;
          left: 0;
        }
        
        .service-content p {
          color: #555;
          line-height: 1.8;
        }
        
        .announcement {
          background-color: var(--primary);
          color: var(--text-light);
          text-align: center;
          padding: 5rem 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .announcement::before {
          content: '';
          position: absolute;
          width: 150%;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.05);
          transform: rotate(-3deg);
          top: -100px;
          left: -25%;
        }
        
        .announcement h2 {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .announcement h2::after {
          content: '';
          position: absolute;
          width: 80px;
          height: 3px;
          background-color: var(--accent);
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .announcement p {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .announcement .btn {
          background-color: var(--text-light);
          color: var(--primary);
          border-color: var(--text-light);
        }
        
        .announcement .btn:hover {
          color: var(--text-light);
        }
        
        .announcement .btn::before {
          background-color: var(--accent);
        }
        
        .contact {
          background-color: white;
          position: relative;
        }
        
        .contact-content {
          display: flex;
          gap: 4rem;
          margin-top: 2rem;
          flex-direction: column;
        }
        
        .contact-info {
          flex: 1;
        }
        
        .contact-info h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--primary);
          position: relative;
          padding-bottom: 1rem;
        }
        
        .contact-info h3::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 2px;
          background-color: var(--accent);
          bottom: 0;
          left: 0;
        }
        
        .contact-details {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .contact-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
          color: var(--accent);
          width: 40px;
          height: 40px;
          background-color: rgba(233, 161, 58, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-item p {
          margin-bottom: 0.3rem;
        }
        
        .map {
          flex: 1;
          height: 400px;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          width: 100%;
        }
        
        .map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(52, 120, 90, 0.1);
          border-radius: 50%;
          color: var(--primary);
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .social-link:hover {
          background-color: var(--primary);
          color: var(--text-light);
          transform: translateY(-3px);
        }
        
        .newsletter {
          background-color: var(--accent);
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .newsletter::before {
          content: '';
          position: absolute;
          width: 150%;
          height: 100px;
          background-color: rgba(255, 255, 255, 0.1);
          transform: rotate(2deg);
          bottom: -50px;
          left: -25%;
        }
        
        .newsletter h2 {
          font-family: var(--font-heading);
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-size: 2.2rem;
        }
        
        .newsletter p {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--text-dark);
          font-size: 1.1rem;
        }
        
        .newsletter-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          width: 100%;
          box-shadow: var(--shadow);
        }
        
        .newsletter-form button {
          background-color: var(--primary);
          color: var(--text-light);
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          width: 100%;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        
        .newsletter-form button:hover {
          background-color: #28604a;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-3px);
        }
        
        footer {
          background-color: #1e442f;
          color: var(--text-light);
          padding: 5rem 2rem 1rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-column h3 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          padding-bottom: 0.8rem;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 40px;
          background-color: var(--accent);
          bottom: 0;
          left: 0;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 1rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
          padding-left: 15px;
        }
        
        .footer-links a::before {
          content: '→';
          position: absolute;
          left: 0;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform: translateX(-5px);
        }
        
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 20px;
        }
        
        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        /* Larger devices (tablets and above) */
        @media (min-width: 768px) {
          .section {
            padding: 8rem 2rem;
          }
          
          .about-content {
            flex-direction: row;
          }
          
          .contact-content {
            flex-direction: row;
          }
          
          .newsletter-form {
            flex-direction: row;
          }
          
          .newsletter-form input {
            border-radius: 50px 0 0 50px;
            width: auto;
          }
          
          .newsletter-form button {
            border-radius: 0 50px 50px 0;
            width: auto;
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Desktop */
        @media (min-width: 992px) {
          .section-heading {
            font-size: 2.8rem;
          }
          
          .footer-content {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .header-container {
            position: relative;
          }
          
          .mobile-menu {
            display: block;
          }
          
          nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--primary);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            display: none;
            border-radius: 0 0 var(--border-radius) var(--border-radius);
          }
          
          nav.active {
            display: block;
          }
          
          nav ul {
            flex-direction: column;
          }
          
          nav ul li {
            margin: 0;
            margin-bottom: 1.2rem;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero h2 {
            font-size: 1.5rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
          
          .section-heading {
            font-size: 2rem;
          }
          
          .btn {
            display: block;
            margin: 0 auto 1rem auto;
            text-align: center;
          }
          
          .announcement h2 {
            font-size: 2rem;
          }
          
          .service-card {
            max-width: 350px;
            margin: 0 auto;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <div class="header-container">
          <a href="#" class="logo">
            Ladle and the Whisk
          </a>
          <button class="mobile-menu">☰</button>
          <nav>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Offerings</a></li>
              <li><a href="#contact">Location</a></li>
              <li><a href="#newsletter">Join Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section class="hero" id="home">
        <div class="hero-content">
          <h1>Ladle and the Whisk</h1>
          <h2>Everyday Gourmet</h2>
          <p>Welcome to New Orleans' culinary haven where kitchen enthusiasts discover innovative gadgets, gourmet food, and a community of food lovers.</p>
          <div>
            <a href="#about" class="btn">Discover More</a>
            <a href="#contact" class="btn btn-outline">Find Us</a>
          </div>
        </div>
      </section>
      
      <section class="section about" id="about">
        <div class="section-container">
          <h2 class="section-heading">Our Story</h2>
          <div class="about-content">
            <div class="about-text">
              <p>Welcome to Ladle and the Whisk, where the culinary passion of a mother-daughter team in the heart of New Orleans comes alive. Our store is a haven for kitchen enthusiasts, offering a meticulously curated selection of innovative gadgets alongside gourmet food mixes, teas, and coffees.</p>
              <p>With a commitment to both practicality and style, we aim to inspire creativity in the kitchen and simplify the cooking experience for everyone. Beyond our products, Ladle and the Whisk fosters a community of food lovers through cooking classes and events, inviting all to share in the joy of cooking.</p>
              <p>Visit us at 2130 Magazine St in the Lower Garden District of New Orleans and discover the magic of Ladle and the Whisk, where every meal becomes a celebration of flavor and tradition.</p>
            </div>
            <div class="about-image">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Mother and daughter cooking">
            </div>
          </div>
        </div>
      </section>
      
      <section class="announcement">
        <div class="section-container">
          <h2>We're Officially Open</h2>
          <p>Our storefront is now open, ready to welcome you into our culinary haven in the heart of NoLA. While our physical doors are open for business, stay tuned as our online store will be launching soon, bringing the convenience of shopping with us to your fingertips from anywhere.</p>
          <a href="#contact" class="btn">Visit Us Today</a>
        </div>
      </section>
      
      <section class="section services" id="services">
        <div class="section-container">
          <h2 class="section-heading">What Ladle and the Whisk Offers</h2>
          <p class="section-intro">At Ladle and the Whisk, we curate a unique selection of products and experiences for culinary enthusiasts. Explore our offerings that are designed to inspire creativity in your kitchen.</p>
          <div class="services-container">
            <div class="services-grid">
              <div class="service-card">
                <div class="service-img">
                  <img src="https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Kitchen Gadgets">
                </div>
                <div class="service-content">
                  <h3>Kitchen Gadgets</h3>
                  <p>Discover innovative tools that make cooking easier and more enjoyable, from specialized utensils to modern appliances.</p>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-img">
                  <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Gourmet Food">
                </div>
                <div class="service-content">
                  <h3>Gourmet Food & Mixes</h3>
                  <p>Elevate your home cooking with our selection of premium spices, sauces, and specialty food mixes inspired by global cuisines.</p>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-img">
                  <img src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Teas & Coffee">
                </div>
                <div class="service-content">
                  <h3>Teas & Coffees</h3>
                  <p>Sample our carefully selected teas and coffees from around the world, perfect for pairing with your culinary creations.</p>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-img">
                  <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Cooking Classes">
                </div>
                <div class="service-content">
                  <h3>Cooking Classes</h3>
                  <p>Join our community events and cooking classes where you can learn new techniques, recipes, and meet fellow food enthusiasts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section contact" id="contact">
        <div class="section-container">
          <h2 class="section-heading">Visit Ladle and the Whisk</h2>
          <div class="contact-content">
            <div class="contact-info">
              <h3>Come Say Hello</h3>
              <div class="contact-details">
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div>
                    <p>2130 Magazine St</p>
                    <p>Lower Garden District</p>
                    <p>New Orleans, LA</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">🕒</span>
                  <div>
                    <p>Open 10am-6pm</p>
                    <p>Closed Mondays</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <p>(504) 910-6199</p>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <p>hello@ladleandthewhisk.com</p>
                </div>
              </div>
              <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
              </div>
            </div>
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8833406326243!2d-90.07968702421294!3d29.9312110744472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5f8a5a2417b%3A0x18a2fcd88afaa11e!2s2130%20Magazine%20St%2C%20New%20Orleans%2C%20LA%2070130!5e0!3m2!1sen!2sus!4v1710376000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section class="newsletter">
        <div class="section-container">
          <h2>Stay Connected with Ladle and the Whisk</h2>
          <p>Subscribe to our newsletter for updates on new products, cooking classes, and special events at Ladle and the Whisk.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address">
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      
      <footer>
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>Ladle and the Whisk</h3>
              <p>A culinary haven in the heart of New Orleans where every meal becomes a celebration of flavor and tradition.</p>
              <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
                <a href="#" class="social-link">📸</a>
              </div>
            </div>
            <div class="footer-column">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Offerings</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Our Offerings</h3>
              <ul class="footer-links">
                <li><a href="#">Kitchen Gadgets</a></li>
                <li><a href="#">Gourmet Food</a></li>
                <li><a href="#">Teas & Coffees</a></li>
                <li><a href="#">Cooking Classes</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Hours</h3>
              <p>Tuesday - Sunday: 10am - 6pm</p>
              <p>Monday: Closed</p>
              <p>Phone: (504) 910-6199</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 Ladle and the Whisk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
    </html>
  `;

  // Add loading overlay
  const loadingOverlay = document.createElement("div");
  loadingOverlay.className = "loading-overlay";
  loadingOverlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p>Loading Ladle and the Whisk...</p>
  `;
  document.body.appendChild(loadingOverlay);

  // Function to initialize the site
  function initializeSite() {
    // Simplified initialization with minimal DOM manipulation
    const header = document.querySelector("header");
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    // Simple toggle for mobile menu with no transitions
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Static smooth scrolling function with no animations
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;
          window.scrollTo(0, targetPosition);

          // Close mobile menu if open
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
          }
        }
      });
    });

    // Simple form submission
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value) {
          alert(
            "Thank you for subscribing! We'll keep you updated on all things Ladle and the Whisk."
          );
          emailInput.value = "";
        } else {
          alert("Please enter your email address.");
        }
      });
    }

    // Basic slider functionality with minimal style manipulation
    const servicesSlider = document.querySelector(".services-slider");
    const serviceCards = document.querySelectorAll(".service-card");
    const sliderDots = document.querySelector(".slider-dots");
    const sliderPrev = document.querySelector(".slider-prev");
    const sliderNext = document.querySelector(".slider-next");

    if (!servicesSlider || !serviceCards.length) return;

    let currentSlide = 0;
    let slideWidth = 0;
    let slidesPerView = 1;

    // Simplified calculation function
    function calculateSlidesPerView() {
      if (window.innerWidth >= 1200) {
        slidesPerView = 4;
      } else if (window.innerWidth >= 992) {
        slidesPerView = 3;
      } else if (window.innerWidth >= 768) {
        slidesPerView = 2;
      } else {
        slidesPerView = 1;
      }

      // Calculate slide width
      const containerWidth =
        document.querySelector(".slider-container").offsetWidth;
      slideWidth = containerWidth / slidesPerView;

      // Update slider
      updateSlider();
    }

    // Create dots
    function createDots() {
      sliderDots.innerHTML = "";
      const numDots = Math.ceil(serviceCards.length / slidesPerView);

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        sliderDots.appendChild(dot);
      }
    }

    // Update slider
    function updateSlider() {
      createDots();
      goToSlide(0);
    }

    // Go to slide
    function goToSlide(slideIndex) {
      const maxSlide = serviceCards.length - slidesPerView;
      currentSlide = Math.max(0, Math.min(slideIndex, maxSlide));

      // Use transform without transitions for better performance
      servicesSlider.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;

      // Update dots
      const dots = document.querySelectorAll(".slider-dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle(
          "active",
          i === Math.min(slideIndex, dots.length - 1)
        );
      });
    }

    // Event listeners for buttons
    sliderPrev.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
    });

    sliderNext.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });

    // Initialize slider
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);

    // Remove loading overlay
    const loadingOverlay = document.querySelector(".loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.style.display = "none";
      loadingOverlay.remove();
    }
  }

  // Load everything without animation or fancy preloading
  function preloadImages() {
    // Start immediately
    initializeSite();
  }

  // Start immediately
  preloadImages();

  // Create a new script element after all the HTML content generation
  document.addEventListener("DOMContentLoaded", function () {
    // Handle header scroll state
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    }

    // Close the mobile menu when clicking a navigation link
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          nav.classList.remove("active");
        }
      });
    });

    // Enhanced smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    // Form submission with validation
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value && validateEmail(emailInput.value)) {
          // Success animation
          const button = newsletterForm.querySelector("button");
          button.innerHTML = "Thank you! ✓";
          button.style.backgroundColor = "#34785a";

          setTimeout(() => {
            button.innerHTML = "Subscribe";
            emailInput.value = "";
          }, 3000);
        } else {
          // Show error
          emailInput.style.border = "1px solid #e74c3c";
          emailInput.style.backgroundColor = "rgba(231, 76, 60, 0.1)";

          setTimeout(() => {
            emailInput.style.border = "none";
            emailInput.style.backgroundColor = "white";
          }, 3000);

          if (!emailInput.value) {
            alert("Please enter your email address.");
          } else {
            alert("Please enter a valid email address.");
          }
        }
      });
    }

    // Email validation helper function
    function validateEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // Image hover effects
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "var(--shadow)";
      });
    });
  });
});
