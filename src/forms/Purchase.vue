<template>
 <v-container>
    <v-form>
      <v-row dense>
        <v-col cols="7">
          <v-text-field v-model="Licensee" :rules='[dataRequired]' dense outlined label="Licensee">
          </v-text-field> 
        </v-col>
         <v-col cols="5">
          <v-text-field v-model="PermitNo" :rules='[dataRequired]' dense outlined label="PermitNo">
          </v-text-field> 
        </v-col>
         <v-col cols="12">
          <v-text-field v-model="Address" :rules='[dataRequired]' dense outlined label="Address">
          </v-text-field> 
        </v-col>
      </v-row>
    </v-form>
 </v-container>
</template>

 