<template>
  <div class="team-container py-5">
    <b-container id="Teachers">
      <!-- Section Header -->
      <b-row class="pb-5">
        <b-col cols="12" class="text-center">
          <h1 class="team-header">OUR TEAM</h1>
        </b-col>
      </b-row>

      <!-- Team Members -->
      <b-row class="justify-content-center">
        <b-col cols="6" md="4" lg="3" class="text-center">
          <div class="team-member">
            <img src="images/1.png" alt="Omar Yahia" class="team-img" />
            <h3 class="team-name">Omar Yahia</h3>
            <span class="team-role">Mentor at Holberton School</span>
          </div>
        </b-col>

        <b-col cols="6" md="4" lg="3" class="text-center">
          <div class="team-member">
            <img src="images/2.png" alt="Aymen Hadj Kacem" class="team-img" />
            <h3 class="team-name">Aymen Hadj Kacem</h3>
            <span class="team-role">Student at Holberton School</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Teachers",
};
</script>

<style scoped>
/* Overall container */
.team-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full height */
  background-color: #f8f9fa; /* Light gray background */
  padding: 3rem 0;
}

/* Header styling */
.team-header {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

/* Centering each team member */
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: scale(1.05);
}

/* Image styling */
.team-img {
  width: 150px; /* Adjust image size */
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #009fb7; /* Matching the button color */
}

/* Name & role styling */
.team-name {
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
}

.team-role {
  font-size: 1rem;
  color: #555;
}
</style>