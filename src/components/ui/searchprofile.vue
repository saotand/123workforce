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
      name: "David",
      last: "Salinas",
      url: "saotand",
      image: "/img/user.jpg",
      occupation: "Full Stack Developper"
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