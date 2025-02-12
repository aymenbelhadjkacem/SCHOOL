<template>
  <footer class="footer">
    <b-container>
      <b-row class="align-items-center">
        <!-- Left: Logo -->
        <b-col cols="12" md="4" class="text-center text-md-left">
          <img src="images/logo.png" alt="School Logo" class="footer-logo" />
        </b-col>

        <!-- Center: Copyright Text -->
        <b-col cols="12" md="4" class="text-center">
          <p>© 2025 Copyright: <a href="#">Aymen Bel Hadj Kacem</a></p>
        </b-col>

        <!-- Right: Social Media -->
        <b-col cols="12" md="4" class="text-center text-md-right">
          <ul class="social-network">
            <li>
              <a href="#" class="social-link icoFacebook"><i class="bx bxl-facebook"></i></a>
            </li>
            <li>
              <a href="#" class="social-link icoInstagram"><i class="bx bxl-instagram"></i></a>
            </li>
            <li>
              <a href="#" class="social-link icoLinkedin"><i class="bx bxl-linkedin"></i></a>
            </li>
            <li>
              <a href="#" class="social-link icoYoutube"><i class="bx bxl-youtube"></i></a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* Footer Styling */
.footer {
  background-color:  #009FB7; /* Deep Blue Background */
  color: white;
  padding: 2rem 0;
  text-align: center;
}

/* Logo Styling */
.footer-logo {
  max-width: 150px;
}

/* Copyright Text */
p {
  margin: 5px 0;
  font-size: 14px;
}

p a {
  color: #fed766;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}

/* Social Media Icons */
.social-network {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-network li {
  display: inline-block;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #555;
  color: white;
  border-radius: 50%;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

/* Hover Effects */
.icoFacebook:hover {
  background-color:  #009FB7;
}

.icoInstagram:hover {
  background-color: #bc2a8d;
}

.icoLinkedin:hover {
  background-color: #0077b5;
}

.icoYoutube:hover {
  background-color: #e52d27;
}
</style>