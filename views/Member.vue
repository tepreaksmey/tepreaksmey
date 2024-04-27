<script setup>
import { ref } from "vue";
import { errorMessages } from "vue/compiler-sfc";
const dialog = ref(false);
const search = ref("");
const header = ref([
  {
    key: "id",
    title: "Member ID",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "gender",
    title: "Gender",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "phone",
    title: "PhoneNumber",
  },
  {
    key: "action",
    title: "Actions",
  },
]);
const items = ref([
  {
    id: "001",
    name: "Smey",
    gender: "M",
    email: "reaksmey726@gamil.com",
    phone: "093554241",
  },
  {
    id: "002",
    name: "David",
    gender: "M",
    email: "davidcute002@gamil.com",
    phone: "092663514",
  },
  {
    id: "003",
    name: "Tela",
    gender: "M",
    email: "telasadboy22@gamil.com",
    phone: "0964162479",
  },
  {
    id: "004",
    name: "RafatZ",
    gender: "F",
    email: "rafatbeksloy@gamil.com",
    phone: "0972250295",
  },
  {
    id: "005",
    name: "Sal Sava",
    gender: "M",
    email: "salsava913@gamil.com",
    phone: "012552814",
  },
  {
    id: "006",
    name: "BunChhi",
    gender: "F",
    email: "chhikmengtoch@gamil.com",
    phone: "0881255185",
  },
]);
const deleteItem = ref({});
const addId = ref("");
const addgender = ref("");
const addName = ref("");
const addEmail = ref("");
const addPhone = ref("");
const addIdError = ref("");
const addNameError = ref("");
const addGenderError = ref("");
const addEmailError = ref("");
const addPhoneError = ref("");
const isEditing = ref(false);
// btn addItem
const addItem = () => {
  if (
    addId.value &&
    addgender.value &&
    addName.value &&
    addEmail.value &&
    addPhone.value
  ) {
    const existingIndex = items.value.findIndex(
      (item) => item.id === addId.value
    );
    if (existingIndex !== -1) {
      // Update existing item
      items.value[existingIndex] = {
        id: addId.value, //can't change ID
        gender: addgender.value,
        name: addName.value,
        email: addEmail.value,
        phone: addPhone.value,
      };
    } else {
      // Add new item
      items.value.push({
        id: addId.value,
        gender: addgender.value,
        name: addName.value,
        email: addEmail.value,
        phone: addPhone.value,
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
const clearErrors = () => {
  addIdError.value = null;
  addNameError.value = null;
  addGenderError.value = null;
  addEmailError.value = null;
  addPhoneError.value = null;
};
const Error = () => {
  addIdError.value = "Please field a Member ID";
  addNameError.value = "Please field a Name";
  addGenderError.value = "Please field a Gender";
  addEmailError.value = "Please field a Email";
  addPhoneError.value = "Please field a Phone";
};
const reset = () => {
  addId.value = null;
  addName.value = null;
  addEmail.value = null;
  addgender.value = null;
  addPhone.value = null;
};
const deleteFunction = (id) => {
  deleteItem.value = items.value.findIndex((t) => t.id == id);
  items.value.splice(deleteItem.value, 1);
};
// Method to handle editing an item
const editItem = (item) => {
  addId.value = item.id;
  addName.value = item.name;
  addgender.value = item.gender;
  addEmail.value = item.email;
  addPhone.value = item.phone;
  dialog.value = "edit"; // Set dialog mode to 'edit'
  isEditing.value = true; // Set editing  true
};
// Method to save the edited item
const saveItem = () => {
  if (
    addId.value &&
    addgender.value &&
    addName.value &&
    addEmail.value &&
    addPhone.value
  ) {
    const index = items.value.findIndex((item) => item.id === addId.value);
    if (index !== -1) {
      items.value[index] = {
        id: addId.value,
        gender: addgender.value,
        name: addName.value,
        email: addEmail.value,
        phone: addPhone.value,
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
</script>
<template>
  <div class="px-10 py-4" style="background-color: whitesmoke; height: 87vh">
    <v-row>
      <v-col cols="12" md="12">
        <v-dialog v-model="dialog" width="600">
          <v-card>
            <v-card-title>
              {{
                dialog === "edit" ? "Edit Member" : "Add New Member"
              }}</v-card-title
            >
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addId"
                      label="Member ID"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Member ID']"
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
                      label="Gender"
                      :items="['Male', 'Female', 'Others']"
                      v-model="addgender"
                      density="compact"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Gender']"
                      :error-messages="addGenderError"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addEmail"
                      density="compact"
                      label="Email"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Email']"
                      :error-messages="addEmailError"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="addPhone"
                      density="compact"
                      label="Phone"
                      variant="outlined"
                      persistent-hint
                      :rules="[(v) => !!v || 'Please field a Phone']"
                      :error-messages="addPhoneError"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-btn v-if="!isEditing" class="bg-green" @click="addItem"
                  >Add</v-btn
                >
                <v-btn v-if="!isEditing" class="bg-red ml-2" @click="reset"
                  >Clear</v-btn
                >
                <v-btn v-if="isEditing" class="bg-green" @click="saveItem"
                  >Save</v-btn
                >
                <v-btn v-if="isEditing" class="bg-red ml-2" @click="cancelEdit"
                  >Cancle</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col cols="12" md="7" class="mb-10">
            <h1>
              {{ $t("Members") }}
            </h1>
            <p style="color: gray">
              To Createa Member and View the member Report
            </p>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="6" md="6" class="mt-5 mb-3">
                <div class="w-100">
                  <v-text-field
                    :loading="loading"
                    append-inner-icon="mdi-magnify"
                    density="compact"
                    label="Search Member"
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
                    clearErrors();
                    reset();
                    dialog = true;
                    isEditing = false;
                  "
                  class="bg-green"
                >
                  <v-icon class="mr-2">mdi-account-plus</v-icon>Add
                  Member</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Your existing template code -->
        <v-data-table :headers="header" :items="items" :search="search">
          <template v-slot:item.action="{ item: rowItem }">
            <v-icon
              class="text-green mr-2"
              @click="
                editItem(rowItem);
                clearErrors();
              "
              >mdi-pencil</v-icon
            >
            <v-icon @click="deleteFunction(rowItem.id)" class="text-red"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
