<template>
  <v-app style="-webkit-app-region: drag">
    
   <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
     color="red darken-3"
     dark
      app
    >
   
    <v-list-item class="px-2 pt-1">
      
        <v-list-item-avatar >
            <v-img src="@/assets/logo.svg" alt="admin" class="mx-auto " />
        </v-list-item-avatar>

       <v-list-item-content >
            <v-list-item-title class="profilename">Nashrudin Habibon</v-list-item-title>
            <v-list-item-subtitle class="profiletitle">Admin</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    
    <v-divider class="mx-3 my-2"></v-divider>
      <v-list>
        <div v-for="(link, i) in links" :key="link.title">
          <v-list-item v-if="!link.subLinks" :key="i" :to="link.href" class="v-list-item">
            <v-list-item-icon>
              <v-icon color="#ECEFF1">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="primary--text">
                {{
                link.title
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :key="link.title" no-action
        prepend-icon="mdi-chart-line" color="#ECEFF1">
            <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="primary--text">
                    {{
                    link.title
                    }}
                  </v-list-item-title>
                </v-list-item-content>
              
            </template>

            <v-list-item v-for="sublink in link.subLinks" :to="sublink.href" :key="sublink.title">
              <v-list-item-icon >
              <v-icon color="#ECEFF1">{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="primary--text">
                  {{
                  sublink.title
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="#2C3A47"
      dark
    >
      <v-app-bar-nav-icon @click.stop="mini = !mini"  class="clickable"/>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Web Application Projects</span>
      </v-toolbar-title>
      <v-spacer />
   
    </v-app-bar>
    <v-main>
      <v-container
       class="scroll-y"
       fluid
      >
       <v-row align="center" justify="center">
           <router-view></router-view>
       </v-row>
      
       
      </v-container>
    </v-main>

    
  </v-app>
</template>

<script>
//import * as auth from '../services/auth_service'
  export default {
    props: {
      source: String,
    },
    data: () => ({
    drawer: null,
      mini: false,
      fab: false,
      selectedItem :0,
       links: [
      {
        title: "Home",
        href: "/",
        icon: "mdi-home-outline"
      },
      {
        icon: "mdi-file-chart",
        title: "Reports",
        subLinks: [
          {
            icon: "mdi-file-chart",
            title: "Sales",
            href: "/sales"
          },
          {
            icon: "mdi-network-pos",
            title: "Orders",
            href: "/orders"
          },
          {
            icon: "fa-solid fa-cart-flatbed-empty",
            title: "Inventory",
            href: "/inventory"
          }
        ]
      },
      {
        title: "Statistics",
        href: "/statistics",
        icon: "mdi-chart-bar"
      }
    ],
    }),
  }
</script>
<style lang="scss">
// @import '@/scss/sidebarnav';

</style>