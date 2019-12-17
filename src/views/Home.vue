<template>
  <span>
    <app-splash></app-splash>
    <v-lazy
      v-model="active1"
      :options="{
          threshold: 1
        }"
      min-height="200"
      transition="fade-transition"
    >
      <app-type-user-bar></app-type-user-bar>
    </v-lazy>
    <v-lazy
      v-model="active1"
      :options="{
          threshold: 1
        }"
      min-height="200"
      transition="fade-transition"
    >
      <app-search-user></app-search-user>
    </v-lazy>
    <app-splash2></app-splash2>
    <app-payment-plans></app-payment-plans>
  </span>
</template>

<script>
export default {
  data: () => ({
    active1: false,
    active2: false
  })
};
</script>

<style>
</style>
