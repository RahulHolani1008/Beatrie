<template>
  <v-form class="position-absolute bottom-4 col-12 pa-4 top-right">
    <v-card
      class="pa-12 offset-md-8 col-md-4 offset-sm-6 col-sm-6 mt-auto rounded-xl"
      outlined
      flat
    >
      <v-row>
        <v-text-field
          label="Email"
          type="email"
          outlined
          class="rounded-lg"
          prepend-inner-icon="mdi-account-circle"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          label="Password"
          outlined
          class="rounded-lg"
          prepend-inner-icon="mdi-lock"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-btn
          color="primary"
          depressed
          class="col-5 ml-auto rounded-lg text-capitalize full-width"
          large
        >Login</v-btn>
      </v-row>
    </v-card>
  </v-form>
</template>
