<template>
  <span>
    <v-divider></v-divider>
    <br />
    <center>
      <h1>Follow Us</h1>
      <br />
      <div class="showsocial">
        <app-tooltip top tooltip="Facebook">
          <v-btn text height="50px">
            <img src="@/assets/social/facebook-circle-fill.png" />&nbsp;
            <img src="@/assets/social/like.png" />&nbsp;&nbsp;&nbsp;&nbsp;14,044 Followers
          </v-btn>
        </app-tooltip>
      </div>
      <div class="showsocial">
        <app-tooltip top tooltip="Instagram">
          <v-btn text height="50px">
            <img src="@/assets/social/instagram-fill.png" />&nbsp;
            <img src="@/assets/social/heart.png" />&nbsp;&nbsp;&nbsp;&nbsp;733 Followers
          </v-btn>
        </app-tooltip>
      </div>
      <br />
      <br />

      <div class="showsocial2" v-for="soc in social" :key="soc.name">
        <app-tooltip top :tooltip="soc.name">
          <v-btn text fab :to="soc.link">
            <v-icon color="#3c485e" x-large>{{soc.iconalt}}</v-icon>
            <!-- <img :alt="soc.name" :src="soc.icon" /> -->
          </v-btn>
        </app-tooltip>
      </div>

      <br />
      <br />
      <div>
        <img src="@/assets/wflogo.png" />
      </div>
    </center>
  </span>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        name: "Email",
        link: "",
        icon: "./img/icons/email.png",
        iconalt: "mdi-email",
        active: true
      },
      {
        name: "Messenger",
        link: "",
        icon: "./img/icons/messenger.png",
        iconalt: "mdi-facebook-messenger",

        active: true
      },
      {
        name: "Skype",
        link: "",
        icon: "./img/icons/skype-logo.png",
        iconalt: "mdi-skype",
        active: true
      },
      {
        name: "WhatsApp",
        link: "",
        icon: "./img/icons/whatsapp.png",
        iconalt: "mdi-whatsapp",
        active: true
      },
      {
        name: "Slack",
        link: "",
        icon: "./img/icons/slack.png",
        iconalt: "mdi-slack",
        active: true
      }
    ]
  })
};
</script>

<style>
.showsocial,
.showsocial2 {
  display: inline-block;
}

.showsocial {
  margin: 20px;
}

.showsocial2 {
  margin: 10px 40px;
}
</style>