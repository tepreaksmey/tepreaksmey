<script setup>
import { ref } from "vue";
const dialog = ref(false);
const search = ref("");
const header = ref([
  {
    key: "id",
    title: "Book ID",
  },
  {
    key: "name",
    title: "Name",
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
    key: "borrow",
    title: "Borrowed Date",
  },
  {
    key: "return",
    title: "Returned Date",
  },
  {
    key: "action",
    title: "Status",
  },
]);
const items = ref([
  {
    id: "#77124",
    name: "Sal Sava",
    title: "React Js",
    author: "Eng Titya",
    borrow: "2024-01-11",
    return: "2024-01-20",
  },
  {
    id: "#25183",
    name: "Tela",
    title: "JavaScript",
    author: "Horn Somart",
    borrow: "3/3/2024",
    return: "23/4/2024",
  },
  {
    id: "#92841",
    name: "Smey",
    title: "Java",
    author: "Eng Titya",
    borrow: "12/3/2024",
    return: "03/4/2024",
  },
  {
    id: "#19401",
    name: "David",
    title: "PHP",
    author: "Bey Suchea",
    borrow: "18/3/2024",
    return: "07/4/2024",
  },
  {
    id: "#88221",
    name: "RafatZ",
    title: "Laravel",
    author: "Bey Suchea",
    borrow: "20/3/2024",
    return: "13/4/2024",
  },
  {
    id: "#91410",
    name: "BunChhi",
    title: "Vue JS",
    author: "Bey Suchea",
    borrow: "28/3/2024",
    return: "15/4/2024",
  },
]);
const deleteItem = ref({});
const addId = ref("");
const addTitle = ref("");
const addName = ref("");
const addAuthor = ref("");
const addBorrow = ref("");
const addReturn = ref("");
const addIdError = ref("");
const addNameError = ref("");
const addTitleError = ref("");
const addAuthorError = ref("");
const addBorrowError = ref("");
const addreturnError = ref("");
const isEditing = ref(false);
// btn addItem
const addItem = () => {
  if (
    addId.value &&
    addTitle.value &&
    addAuthor.value &&
    addName.value &&
    addBorrow.value &&
    addReturn.value
  ) {
    const index = items.value.findIndex(
      (item) => item.id === addId.value
    );
    if (index !== -1) {
      items.value[index] = {
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        name: addName.value,
        borrow: addBorrow.value,
        return: addReturn.value,
      };
    } else {
      items.value.push({
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        name: addName.value,
        borrow: addBorrow.value,
        return: addReturn.value
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
  addName.value = item.name;
  addBorrow.value = item.borrow;
  addReturn.value = item.return;
  dialog.value = true;
  isEditing.value = true;
};
// Method to save the edited item
const saveItem = () => {
  if (
    addId.value &&
    addTitle.value &&
    addAuthor.value &&
    addName.value &&
    addBorrow.value &&
    addReturn.value
  ) {
    const index = items.value.findIndex((item) => item.id === addId.value);
    if (index !== -1) {
      items.value[index] = {
        id: addId.value,
        title: addTitle.value,
        author: addAuthor.value,
        name: addName.value,
        borrow: addBorrow.value,
        return: addReturn.value
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
  addNameError.value = "Please field a Name";
  addAuthorError.value = "Please field a Author";
  addTitleError.value = "Please field a Title";
  addBorrowError.value = "Please field a Borrow Date";
  addreturnError.value = "Please field a Return Date";
};
const clearErrors = ()=> {
  addIdError.value = null;
  addNameError.value = null;
  addTitleError.value = null;
  addAuthorError.value = null;
  addBorrowError.value = null;
  addreturnError.value = null;
};
const reset = () => {
  addId.value = null;
  addName.value = null;
  addTitle.value = null;
  addAuthor.value = null;
  addBorrow.value = null;
  addReturn.value = null;
};
const deleteFunction = (id) => {
  deleteItem.value = items.value.findIndex((t) => t.id == id);
  items.value.splice(deleteItem.value, 1);
};

</script>
<template>
  <div class="px-10 py-4" style="background-color: whitesmoke;height: 87vh">
    <v-row>
      <v-col cols="12" md="12">
        <v-dialog v-model="dialog" width="600">
          <v-card>
            <v-card-title class="ml-2" v-if="!isEditing"> Add Borrow Book</v-card-title>
            <v-card-title class="ml-2" v-if="isEditing"> Edit Borrow Book</v-card-title>
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
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addName"
                      label="Name"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Name']"
                      :error-messages="addNameError"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="addTitle"
                      label="Title"
                      :items="['Java', 'Html', 'PHP', 'Cambodia History', 'Talk English','Chinese Book','C Programming','Khmer Dancer','My Sql','Dictionary Book']"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Title']"
                      :error-messages="addTitleError"
                    >
                    </v-select>
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
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addBorrow"
                      density="compact"
                      label="Borrowed Date"
                      variant="outlined"
                      persistent-hint
                      type="date"
                      :rules="[(v) => !!v || 'Please field a Borrow Date']"
                      :error-messages="addBorrowError"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addReturn"
                      density="compact"
                      label="Returned Date"
                      variant="outlined"
                      type="date"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Returned Date']"
                      :error-messages="addreturnError" 
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-btn class="bg-green" @click="addItem" v-if="!isEditing">Borrow</v-btn>
                <v-btn class="bg-red ml-2" @click="reset" v-if="!isEditing">Clear</v-btn>
                <v-btn class="bg-green " @click="saveItem" v-if="isEditing">Save</v-btn>
                <v-btn class="bg-red ml-2" @click="cancelEdit" v-if="isEditing">Cancle</v-btn>
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
                <v-btn @click="clearErrors(),reset(),isEditing= false,dialog = true" class="bg-green">
                  <v-icon class="mr-2">mdi-book</v-icon>Borrow Book</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-data-table :headers="header" :items="items" :search="search">
          <template v-slot:item.action="row">
            <v-icon class="text-green mr-2" @click="editItem(row.item); clearErrors();">mdi-pencil</v-icon>
            <v-icon  class="text-red " @click="deleteFunction(row.item.id)">mdi mdi-keyboard-return</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
