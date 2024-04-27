import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Member  from "../views/Member.vue";
import Book from "../views/Book.vue";
import Showbook from "../views/Showbook.vue";
import addBook from "../views/addBook.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Dashboaad",
      component: Dashboard,
    },
    {
        path: "/member",
        name: "Member",
        component: Member
    },
    {
        path: "/book",
        name: "Books",
        component: Book
    },
    {
        path: "/addbook",
        name: "addBook",
        component: addBook
    },
    {
        path: "/showbook",
        name: "showbook",
        component: Showbook,
    },
  ],
});
export default router;
