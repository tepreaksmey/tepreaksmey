<script setup>
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
const open = ref(null);

</script>
<template>
  <v-app>
    <v-app-bar class="pa-1" :elevation="3">
      <v-app-title class="text-h5"
        >&nbsp;TRIBBLE &nbsp;
        <v-icon>mdi-library</v-icon>
      </v-app-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-bell-ring</v-icon>
      <!-- btn humburger -->
      <v-app-bar-nav-icon @click="open = !open" ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-container>
      <v-navigation-drawer v-model="open">
        <v-list>
          <v-list-item>
            <div class="text-center mt-5">
              <v-avatar
                style="box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);"
                image="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/374284984_1748587125568883_6214812177515658774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHssP8Hw8aYHeFzVoEODhK-JbWsXZdNolUltaxdl02iVWatz9kGx_zjlw7uiqp6vpk8C005qfAxGRYWWViEEtBx&_nc_ohc=oqZ95GLT2EcAb7vMSGu&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfD4eVQ8qgBjdRXPxwzlCfv7_-91GtLZ0zMHRgsIotpFOQ&oe=662D04B1"
                size="90"
              ></v-avatar>
              <v-list-item-title class="m-2">Smey</v-list-item-title>
              <v-list-item-subtitle>Smey</v-list-item-subtitle>
            </div>
          </v-list-item>
          <v-list-item to="/" color="primary" class="mt-4">
            <v-icon>mdi-view-dashboard</v-icon>&nbsp;Dasboard
          </v-list-item>
          <v-list-item to="/member" color="primary">
            <v-icon>mdi-account-multiple</v-icon> {{ $t("Members") }}
          </v-list-item>
          <v-list-item to="/showbook" color="primary">
            <v-icon>mdi-book-open-variant</v-icon> View Book
          </v-list-item>
          <v-list-item to="/addBook" color="primary">
            <v-icon>mdi-book-plus-multiple</v-icon> Add Book
          </v-list-item>
          <v-list-item to="/book" color="primary">
            <v-icon>mdi-book</v-icon> Check Out Book
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-4">
            <v-btn color="red"> <v-icon>mdi-logout</v-icon>log out </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-container>
    <div style="background-color: whitesmoke; height: full">
      <v-container style="background-color: whitesmoke">
        <v-main>
          <RouterView />
        </v-main>
      </v-container>
    </div>
  </v-app>
</template>
