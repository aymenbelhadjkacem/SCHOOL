<template>
  <div class="approach-container">
    <div class="text-center">
      <b-jumbotron header="OUR APPROACH" lead="" id="Services" class="approach-jumbotron">
        <h4 class="approach-text">
          Students work collaboratively in small classes. They are mentored by
          teachers to be inquisitive, think critically, and engage with their
          peers to draw on other perspectives. Together they explore diverse
          knowledge, tackle complex problems to achieve common goals—and develop
          projects that demonstrate learning, innovation, and creativity. Pear
          Tree Elementary delivers a well-rounded, inspired education that
          cultivates each child’s individuality, academic, and personal lifelong
          success. Combined grade classes enhance learning, help children
          develop stronger social-emotional skills, and provide natural
          leadership opportunities. Through the unique Pear Tree model, students
          develop real-world abilities, public speaking prowess, and learn how
          to learn.
        </h4>
      </b-jumbotron>
      <div>
        <b-container>
          <b-row>
            <b-col class="text-center">
              <b-card
                title="Our Courses"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="courses" variant="primary">Discover more</b-button>
              </b-card>
            </b-col>
            <b-col class="text-center">
              <b-card
                title="Our Activities"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="activities" variant="primary">Discover more</b-button>
              </b-card>
            </b-col>
            <b-col class="text-center">
              <b-card
                title="Our Classes"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="classes" variant="primary">Discover more</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container for approach section */
.approach-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* Make it take full height */
}

/* Center and style jumbotron */
.approach-jumbotron {
  background: #f8f9fa; /* Light background */
  padding: 3rem;
  border-radius: 10px;
}

/* Style the approach text */
.approach-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
}

/* Primary button styles */
.btn-primary {
  color: #fff;
  background-color: #009fb7;
  border-color: #009fb7;
}

.btn-primary:hover {
  background-color: #fed766;
  border-color: #fed766;
}
</style>