<template>
  <div class="news-container py-5">
    <b-container>
      <!-- Section Header -->
      <b-row class="pb-4">
        <b-col cols="12" class="text-center">
          <h1 class="news-header">Latest News</h1>
        </b-col>
      </b-row>

      <!-- News Items -->
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" lg="5" class="text-center">
          <a href="NewsItem" class="news-link">
            <b-card overlay img-src="./images/SL3.jpg" img-alt="News Image" text-variant="white" class="news-card">
              <b-card-text>
                <h3>All the updates and news related to our school</h3>
              </b-card-text>
            </b-card>
          </a>
        </b-col>

        <b-col cols="12" md="6" lg="5" class="text-center">
          <a href="update" class="news-link">
            <b-card overlay img-src="./images/person_1.jpg" img-alt="Update Image" text-variant="white" class="news-card">
              <b-card-text>
                <h3>Stay informed with the latest school updates</h3>
              </b-card-text>
            </b-card>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
/* News Page Container */
.news-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full height */
  background-color: #f8f9fa; /* Light gray background */
  padding: 3rem 0;
}

/* Header Styling */
.news-header {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

/* Centered Cards */
.news-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.news-card:hover {
  transform: scale(1.05);
}

/* Link Styling */
.news-link {
  text-decoration: none;
}
</style>