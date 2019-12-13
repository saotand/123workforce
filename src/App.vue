<template>
  <div id="app">
    <app-main-bar></app-main-bar>
    <router-view />
  </div>
</template>



<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ntext {
  text-transform: capitalize;
}

.dialog-btn {
  display: inline-block;
  margin: 0;
  padding: 0;
}

img {
  vertical-align: middle;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  background-position: center center;
}

.thumbnail {
  > img,
  a > img {
    display: block;
    max-width: 100%;
    height: auto;
    background-position: center center;
  }
}

.carousel-inner > .item > {
  img,
  a > img {
    display: block;
    max-width: 100%;
    height: auto;
    background-position: center center;
  }
}

.img-rounded {
  border-radius: 6px;
}

.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.img-circle {
  border-radius: 50%;
}
</style>
