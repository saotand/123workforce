<template>
  <span>
    <v-container grid-fluid>
      <v-layout row nowrap>
        <v-flex lg8 offset-lg-2>
          <div class="divspacer"></div>
          <app-card-profile :user="user"></app-card-profile>
          <div class="divspacer"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: "Jose",
      last: "Quintero",
      url: "king",
      image: "./img/user1.jpg",
      occupation: "Full Stack Developper",
      skills: [
        { name: "PHP", icon: "mdi-language-php", percent: "95%" },
        { name: "Visual Studio", icon: "mdi-visual-studio", percent: "75%" },
        { name: "Python", icon: "mdi-language-python", percent: "75%" },
        { name: "C++", icon: "mdi-language-cpp", percent: "85%" },
        { name: "JavaScript", icon: "mdi-language-javascript", percent: "88%" }
      ]
    }
  })
};
</script>

<style>
.profileshape {
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
}

.divspacer {
  height: 40px;
}
</style>