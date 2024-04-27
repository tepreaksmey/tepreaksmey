<script setup>
import barVue from "../src/components/bar.vue";
import { ref } from "vue";
import { Title } from "chart.js";
const header = ref([
  {
    key: "bookId",
    title: "ID",
  },
  {
    key: "title",
    title: "Title",
  },
  {
    key: "author",
    title: "Author",
  },
]);
const items = ref([
  {
    id: "#77124",
    title: "React Js",
    author: "Eng Titya",
  },
  {
    id: "#25183",
    title: "JavaScript",
    author: "Horn Somart",
  },
  {
    id: "#92841",
    title: "Java",
    author: "Eng Titya",
  },
  {
    id: "#19401",
    title: "PHP",
    author: "Bey Suchea",
  },
  {
    id: "#88221",
    title: "Laravel",
    author: "Eng Titya",
  },
  {
    id: "#91410",
    title: "Vue JS",
    author: "Bey Suchea",
  },
  {
    id: "#99313",
    title: "C",
    author: "Eng Titya",
  },
]);
</script>
<template>
  <div style="background-color: whitesmoke">
    <div class="px-10 py-4">
      <v-row>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Borrowed Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-red"
                >230</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Returned Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-green"
                >120</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Order Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-gray"
                >70</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Missing Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-blue"
                >20</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="px-10 py-2">
      <v-row>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Total Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-black"
                >1020</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Victor Books</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-yellow"
                >210</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Members</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-cyan"
                >10</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="py-3">
            <v-card-item>
              <v-card-title>Preding fees</v-card-title>
              <v-card-title class="mt-4 mb-2 text-h4 bold text-brown"
                >150$</v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="px-10 pt-15">
      <v-row class="px-2">
        <v-col cols="12" md="7" class="md:mx-12">
          <barVue />
        </v-col>
        <v-col cols="12" md="5" class="mt-8 md:mx-12">
          <v-card>
            <v-card-title class="bg-cyan text-white">Top Book</v-card-title>
            <table class="table ">
              <thead>
                <tr >
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in items" :key="items.id">
                 <th>{{ items.id }}</th>
                 <th>{{ items.title }}</th>
                 <th>{{ items.author }}</th>
                </tr>
              </tbody>  
            </table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
