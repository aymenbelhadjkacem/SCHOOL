<template>
  <div id="About" class="about-container">
    <b-container fluid>
      <b-row>
        <!-- Left Side: Image -->
        <b-col cols="4">
          <div class="about-image"></div>
        </b-col>

        <!-- Right Side: Text Content -->
        <b-col cols="8" class="about-text-container">
          <b-jumbotron header="ABOUT OUR SCHOOL" lead="" id="Services" class="about-jumbotron">
            <p>
              Education is an essential part of our lives. We are nothing
              without knowledge, and education is what separates us from others.
              The main step to acquire education is enrolling oneself in a
              school. School serves as the first learning place for most of the
              people. Similarly, it is the first spark in receiving an
              education. My school is my second home where I spend most of my
              time. Above all, it gives me a platform to do better in life and
              also builds my personality. I feel blessed to study in one of the
              most prestigious and esteemed schools of the city. In addition, my
              school has a lot of assets which makes me feel fortunate to be a
              part of it.
            </p>
            <p>
              School teaches us some of the great things like first of all, it
              gives us basic education. It teaches us to develop our skills like
              art, dance, public speaking and more. Most importantly, it teaches
              us discipline.
            </p>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Overall container to match the approach section */
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full height */
  padding: 3rem 0;
}

/* Left Side - Image Styling */
.about-image {
  height: 100%;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
}

/* Right Side - Text Container */
.about-text-container {
  background-color: #f0f0f0; /* Light gray background */
  padding: 2rem;
  border-radius: 10px;
}

/* Jumbotron text styling */
.about-jumbotron {
  background: transparent; /* Remove default bg */
  padding: 2rem;
}

.about-jumbotron p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  text-align: justify;
}
</style>
