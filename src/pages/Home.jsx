import '../static/Home.css';

export default function Home() {
  return (
    <>
      <body class="stop-scroll">

        <div class="dots">
          <div class="active one" data-x="header"></div>
          <div class="two" data-x=".recipes"></div>
          <div class="three" data-x=".fixed-image"></div>
        </div>

        <div class="about-us">
          <div class="text">
            <h2>Discover</h2>
            <h3>Our Story</h3>
            <div><i class="fas fa-asterisk"></i></div>
            <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>
            <div><a class="a-CTA" href="#">About Us</a></div>
          </div>
          <div class="image-container">
            <div class="image image1">
            </div>
            <div class="image image2">
            </div>
          </div>
        </div>

        <div class="recipes">
          <div class="image"></div>
          <div class="text">
            <h2>Tasteful</h2>
            <h3>Recipes</h3>
          </div>
        </div>

        <div class="menu">
          <div class="box-model">
            <i class="fas fa-times fa-2x close"></i>
            <div class="arrow">
              <div class="arrow arrow-right"></div>
              <div class="arrow arrow-left"></div>
            </div>
            <div class="box-image-container">
              <div class="box-image">
              </div>
            </div>
          </div>
          <div class="menu-image-container">
            <div class="image active">
            </div>
            <div class="image">
            </div>
            <div class="image">
            </div>
            <div class="image">
            </div>
          </div>
          <div class="text">
            <h2>Discover</h2>
            <h3>Menu</h3>
            <div><i class="fas fa-asterisk"></i></div>
            <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.</p>
            <div><a class="a-CTA" href="#">View The Full Menu</a></div>
          </div>
        </div>

        <div class="fixed-image">
          <div class="text">
            <h2>The Perfect</h2>
            <h3>Blend</h3>
          </div>
        </div>

        <div class="reservation">
          <div class="text">
            <h2>Culinary</h2>
            <h3>Delight</h3>
            <div><i class="fas fa-asterisk"></i></div>
            <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
            <div><a class="a-CTA" href="#">Make a Reservation</a></div>
          </div>
          <div class="image-container">
            <div class="image image1">
            </div>
            <div class="image image2">
            </div>
          </div>
        </div>


        <footer>
          <div class="text">
            <h2>ABOUT ROSA</h2>
            <div><i class="fas fa-asterisk"></i></div>
            <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
          </div>
          <div class="contact-container">
            <div class="social-media">
              <h3>Follow Along</h3>
              <div class="links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="newsletter">
              <h3>NewsLetter</h3>
              <form method="post">
                  <i class="fas fa-envelope"></i>
              </form>
            </div>
          </div>
        </footer>


        <div class="copyright">
          <svg class="svg-up" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xml:space="preserve"><path fill="#262526" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg>
          <i class="fas fa-angle-double-up arrow-up"></i>
          <ul class="info">
            <li>&copy; ROSA 2017</li>
            <li>13 Hanway Square, London</li>
            <li>Tel: 71494563</li>
            <li>Handcrafted with love by <a href="#">Pixelgrade</a> Team</li>
          </ul>
          <ul class="CTA">
            <li><a href="#">PERMISSIONS AND COPYRIGHT</a></li>
            <li><a href="#">CONTACT THE TEAM</a></li>
          </ul>
        </div>


        <script src="js/main.js"></script>
        <script src="js/main.min.js"></script>
      </body>


    </>
  );
}
