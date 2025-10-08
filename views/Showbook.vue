<script setup>
import { ref, onMounted } from "vue";
const books = ref([
  {
    id: 1,
    title: "JAVA",
    image: "https://betanews.com/wp-content/uploads/2023/01/Java.jpg",
    text: "Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built.",
    rating: 4,
    author: "Eng Titya",
    PublisherDate: "2010",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 2,
    title: "TALK ENGLISH",
    image: "https://m.media-amazon.com/images/I/511ULzvQN3L.jpg",
    text: "English is a West Germanic language in the Indo-European , whose speakers, called Anglophones, originated in early medieval England.",
    rating: 4.5,
    author: "Chin Nat",
    PublisherDate: "2016",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 3,
    title: "CAMBODIA HISTORY",
    image:"https://bookdoggy.com/wp-content/uploads/2021/04/Cambodian-History-A-Captivating-Guide-to-the-History-of-Cambodia-and-the-Khmer-Empire.jpg",
    text: "The Khmer empire was a state  Asia that lasted from about ad 802 to 1431. It enjoyed its greatest prosperity from the 11th to the 13th century.",
    rating: 5,
    author: "Soam Rafat ",
    PublisherDate: "2000",
    publisher: "NUBB",
    langauge: "English & Khmer",
  },
  {
    id: 4,
    title: "PHP",
    image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/book/d/h/g/php-programming-the-complete-guide-2022-original-imagh4wmmbxh8fpy.jpeg?q=90&crop=false",
    text: "PHP is an open-source, server-side programming language that can be used to create websites, applications, management systems and more.",
    rating: 4.5,
    author: "Bey Suchea",
    PublisherDate: "2015",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 5,
    title: "ENGLISH GRAMMAR",
    image: "https://aksosbookstore.af/wp-content/uploads/2022/09/3D_01.jpg",
    text: "Grammar, rules of a language governing the sounds, words, sentences, and other elements, as well as their combination and interpretation.",
    rating: 4.5,
    author: "Chhoeun Bunchhi",
    PublisherDate: "2012",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 6,
    title: "HTML & CSS",
    image:"https://images-platform.99static.com/wwkYCQ7kAYwkM-msZoBOIpY0--M=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/97/97477/attachment_97477487",
    text: "HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation.",
    rating: 4.5,
    author: "Tep Reaksmey",
    PublisherDate: "2008",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 7,
    title: "CHINESE BOOK",
    image: "https://studycli.org/wp-content/uploads/2021/06/Best-Chinese-Textbooks-8.jpg",
    text: "Chinese languages form the Sinitic branch of the Sino-Tibetan language family.The spoken varieties are usually considered to be dialects.",
    rating: 5,
    author: "Chhoeun Bunchhi",
    PublisherDate: "2010",
    publisher: "NUBB",
    langauge: "English & Chinese",
  },
  {
    id: 8,
    title: "THE SECRET HISTORY",
    image:"https://sybazzar.com.kh/public/832-832/files/1E6FBF179031A58-Book%20The%20Secret%20History%20Donna%20Tartt.jpg",
    text: "The Secret History is an inverted detective story narrated by one of the six students, Richard Papen, Corcoran  wherein the events.",
    rating: 4,
    author: "Khom Somnea",
    PublisherDate: "2011",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 9,
    title: "MY SQL",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580033769i/50660049.jpg",
    text: "Structured Query Language is a domain-specific language used to manage data, especially in a relational database management system. ",
    rating: 4.5,
    author: "Yorn Sokha",
    PublisherDate: "2014",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 10,
    title: "C PROGRAMMING",
    image: "https://rukminim2.flixcart.com/image/850/1000/l51d30w0/book/c/z/q/c-programming-language-comprehensive-book-2022-original-imagfsqwmhyepk7n.jpeg?q=90&crop=false",
    text: "C is a general-purpose computer programming language created in the 1970s by Dennis Ritchie, and remains very widely used and influential.",
    rating: 5,
    author: "Horn Somart",
    PublisherDate: "2015",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 11,
    title: "MAKETING BOOK",
    image: "https://www.buyqualityplr.com/wp-content/uploads/edd/2017/03/60-UNRESTRICTED-BOOK-MARKETING-PLR-ARTICLES.png",
    text: "Marketing is the act of satisfying and retaining customers. It is one of the primary components of business management and commerce.",
    rating: 4,
    author: "Teang Tela",
    PublisherDate: "2019",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 12,
    title: "KHMER DANCER",
    image: "https://m.media-amazon.com/images/I/81kHyrbfj+L._SY466_.jpg",
    text: "Dance in Cambodia consists of three main categories: classical dance of the royal court, folk dance ",
    rating: 5,
    author: "Chhoeun Bunchhi",
    PublisherDate: "2000",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 13,
    title: "SCARY BOOK ",
    image:"https://media.baamboozle.com/uploads/images/57778/1598326868_694380",
    text: "Stephen Edwin King is an American author. Called the King of Horror, he has also explored other genres, crime, science-fiction, fantasy and mystery.",
    rating: 4,
    author: "Sem Visal",
    PublisherDate: "2016",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 14,
    title: "VUE JS",
    image: "https://miro.medium.com/v2/resize:fit:620/1*wyjeSgsNA7Qn9Usv3dT4-g.png",
    text: "Vue.js is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. ",
    rating: 5,
    author: "Bey Sochea",
    PublisherDate: "2014",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 15,
    title: "LARAVEL",
    image: "https://orangeava.com/cdn/shop/files/Ultimate-Laravel-for-Modern-Web-Development.jpg?v=1705663879",
    text: "Laravel is a free and open-source PHP- based web framework for building high-end web applications. It was created by Taylor Otwell.",
    rating: 4.5,
    author: "Tep Reaksmey",
    PublisherDate: "2010",
    publisher: "NUBB",
    langauge: "English",
  },
  {
    id: 16,
    title: "DICTIONARY BOOK",
    image: "https://cdn.shopify.com/s/files/1/0024/6874/1219/products/B2D3037-OxfordEnglishSchoolDictionaryByOxfordDictionaries-thumbnail-compressed.jpg",
    text: "A dictionary is a listing of lexemes from the lexicon of one or more specific languages, often arranged alphabetically,include information on definitions.",
    rating: 4,
    author: "Soam Rafat",
    PublisherDate: "2010",
    publisher: "NUBB",
    langauge: "English",
  },
]);
const findID = ref({});
const dialog = ref(false);
const showDetail = (id) => {
  dialog.value = true;
  findID.value = books.value.find((p) => p.id == id);
  console.log(findID.value);
};
const visibleBooks = ref([]);//store book jea array
const pageSize = 10; // Number of books per page
const loadMoreBooks = () => {
  const startIndex = visibleBooks.value.length; // STORE BOOK 
  const nextBooks = books.value.slice(startIndex, startIndex + pageSize);//BOOK DL TROV SHOW MORE
  visibleBooks.value = [...visibleBooks.value, ...nextBooks];
  // (...)  to concatenate the existing visible books with the newly fetched nextBooks.
  // (...) CONNECT OLD BOOK AND CATCH NEW BOOK IN ARRAY 
};
onMounted(() => {
  // Initially load some books 
  visibleBooks.value = books.value.slice(0, pageSize);
});

</script>
<template>
  <div style="background-color: whitesmoke; height: full">
    <div>
      <v-row>
        <v-col cols="12" md="2" lg="3" v-for="book in visibleBooks" :key="book.id">
          <v-card class="" max-width="900" >
            <v-img height="350" :src="book.image" class="cover"> </v-img>
            <v-card-title class="pt-4">
              {{ book.title }}
            </v-card-title>
            <!-- <v-card-subtitle>
              {{ book.text }}
            </v-card-subtitle> -->
            <v-rating
                  :model-value="book.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  class="ml-3"
                ></v-rating>
            <v-card-actions>
              <v-btn color="orange" @click="showDetail(book.id)" variant="outlined" class="ml-2 my-2">
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="1000" >
        <v-card class="pa-12 " height="510">
          <v-row>
            <v-col cols="12" md="3" lg="4">
              <v-img :src="findID.image"></v-img>
            </v-col>
            <!-- <v-divider vertical></v-divider> -->
            <v-col cols="12" md="3" lg="8">
              <v-card-title class="text-h4" style="font-family: Noto Serif; font-weight:bolder">{{ findID.title }}</v-card-title>
              <v-card-text>
                <p class="text-cyan text-h5">{{ findID.author }}</p>
                <v-rating
                  :model-value="findID.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                ></v-rating>
              </v-card-text>
              <v-row class="text-center py-3">
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="py-2">
                    <v-card-subtitle class="text-body-1">Publisher Date</v-card-subtitle>
                    <span>{{ findID.PublisherDate }}</span>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="py-2">
                    <v-card-subtitle class="text-body-1">Publisher </v-card-subtitle>
                    <span>{{ findID.publisher }}</span>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card variant="outlined" class="py-2">
                    <v-card-subtitle class="text-body-1">Langauge</v-card-subtitle>
                    <span>{{ findID.langauge }}</span>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="text-body-1">{{ findID.text }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <template v-slot:actions>
            <v-btn
              class="ms-auto bg-red"
              text="Exit"
              @click="dialog = false"
            ></v-btn>
          </template>
        </v-card>
      </v-dialog>
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        "
      >
      <v-btn @click="loadMoreBooks">More Book</v-btn>
      </div>
    </div>
  </div>
</template>
