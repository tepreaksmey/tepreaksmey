<script setup>
import { ref } from "vue";
const dialog = ref(false);
const search = ref("");
const header = ref([
  {
    key: "id",
    title: "Book ",
  },
  {
    key: "title",
    title: "Title",
  },
  {
    key: "author",
    title: "Author",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "action",
    title: "Action",
  },
]);
const items = ref([
  {
    id: "#77124",
    title: "React Js",
    author: "Eng Titya",
    date: "2024-02-25",
  },
  {
    id: "#25183",
    title: "JavaScript",
    author: "Horn Somart",
    date: "2024-2-28",
  },
  {
    id: "#92841",
    title: "Java",
    author: "Eng Titya",
    date: "2024-3-02",
  },
  {
    id: "#19401",
    title: "PHP",
    author: "Bey Suchea",
    date: "2024-3-09",
  },
  {
    id: "#88221",
    title: "Laravel",
    author: "Bey Suchea",
    date: "2024-3-10",
  },
  {
    id: "#91410",
    title: "Vue JS",
    author: "Bey Suchea",
    date: "2024-3-28",
  },
]);
const deleteItem = ref({});
const addId = ref("");
const addTitle = ref("");
const addName = ref("");
const addAuthor = ref("");
const addDate = ref("");
const addIdError = ref("");
const addNameError = ref("");
const addTitleError = ref("");
const addAuthorError = ref("");
const addDateError = ref("");
const isEditing = ref(false);
// btn addItem
const addItem = () => {
  if (addId.value && addTitle.value && addAuthor.value && addDate.value) {
    const index = items.value.findIndex((item) => item.id === addId.value);
    if (index !== -1) {
      items.value[index] = {
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        date: addDate.value,
      };
    } else {
      items.value.push({
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        date: addDate.value,
      });
    }
    dialog.value = false;
    reset();
    clearErrors();
  } else {
    console.error("Please fill in all required fields.");
    Error();
  }
};
// show items to edit
const editItem = (item) => {
  addId.value = item.id;
  addTitle.value = item.title;
  addAuthor.value = item.author;
  addDate.value = item.date;
  dialog.value = true;
  isEditing.value = true;
};
// Method to save the edited item
const saveItem = () => {
  if (addId.value && addTitle.value && addAuthor.value && addDate.value) {
    const index = items.value.findIndex((item) => item.id === addId.value);
    if (index !== -1) {
      items.value[index] = {
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        date: addDate.value,
      };
      dialog.value = false;
      reset();
      clearErrors();
    } else {
      console.error("Item not found for editing.");
    }
  } else {
    console.error("Please fill in all required fields.");
    Error();
  }
};
const cancelEdit = () => {
  dialog.value = false;
  isEditing.value = false;
  reset();
  clearErrors();
};
const Error = () => {
  addIdError.value = "Please field a Book ID";
  addAuthorError.value = "Please field a Author";
  addTitleError.value = "Please field a Title";
  addDateError.value = "Please field a Date";
};
const clearErrors = () => {
  addIdError.value = null;
  addTitleError.value = null;
  addAuthorError.value = null;
  addDateError.value = null;
};
const reset = () => {
  addId.value = null;
  addTitle.value = null;
  addAuthor.value = null;
  addDate.value = null;
};
const deleteFunction = (id) => {
  deleteItem.value = items.value.findIndex((t) => t.id == id);
  items.value.splice(deleteItem.value, 1);
};
</script>
<template>
  <div class="px-10 py-4" style="background-color: whitesmoke; height: 87vh">
    <v-row>
      <v-col cols="12" md="12">
        <v-dialog v-model="dialog" width="600">
          <v-card>
            <v-card-title v-if="isEditing">Edit Book</v-card-title>
            <v-card-title v-else>Add New Book</v-card-title>
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addId"
                      label="Book ID"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Book ID']"
                      :error-messages="addIdError"
                      :readonly="isEditing"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addTitle"
                      label="Title"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Title']"
                      :error-messages="addTitleError"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addAuthor"
                      density="compact"
                      label="Author"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Author']"
                      :error-messages="addAuthorError"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addDate"
                      density="compact"
                      label="Date"
                      variant="outlined"
                      persistent-hint
                      type="date"
                      :rules="[(v) => !!v || 'Please field a Date']"
                      :error-messages="addDateError"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row> </v-row>
                <v-btn class="bg-green" @click="addItem" v-if="!isEditing"
                  >Add</v-btn
                >
                <v-btn class="bg-red ml-2" @click="reset" v-if="!isEditing"
                  >Clear</v-btn
                >
                <v-btn class="bg-green ml-2" @click="saveItem" v-if="isEditing"
                  >Edit</v-btn
                >
                <v-btn class="bg-red ml-2" @click="cancelEdit" v-if="isEditing"
                  >Cancle</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col cols="12" md="7" class="mb-10">
            <h1>Books</h1>
            <p style="color: gray">To Createa Book and View the Book Report</p>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="6" md="6" class="mt-5 mb-3">
                <div class="w-100">
                  <v-text-field
                    :loading="loading"
                    append-inner-icon="mdi-magnify"
                    density="compact"
                    label="Search Book"
                    variant="outlined"
                    hide-details
                    single-line
                    @click:append-inner="onClick"
                    v-model="search"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="6" md="6" class="mt-5">
                <v-btn
                  @click="
                    clearErrors(), reset(), (isEditing = false), (dialog = true)
                  "
                  class="bg-green"
                >
                  <v-icon class="mr-2">mdi-book-plus-multiple</v-icon>Add
                  Book</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-data-table :headers="header" :items="items" :search="search">
          <template v-slot:item.action="row">
            <v-icon
              class="text-green mr-2"
              @click="
                editItem(row.item);
                clearErrors();
              "
              >mdi-pencil</v-icon
            >
            <v-icon @click="deleteFunction(row.item.id)" class="text-red"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
