<template>
  <v-app style="-webkit-app-region: drag">
     <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
  <div class="page-wrapper chiller-theme toggled" >
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
          <v-list-item class="pb-2 pt-2">
            <v-badge
            bottom
            color="green"
            dot
            offset-x="20"
            offset-y="10"
            >
          <v-avatar size="33" class="mr-3">
              <v-img src="@/assets/logo.svg" alt="admin"  />
          </v-avatar>
          </v-badge>
                <div class="sidebar-header ">
                    <div class="user-info">
                        <span class="user-name">
                            Nashrudin Habibon
                        </span>
                        <span class="user-role" >Administrator</span>
                    </div>
                </div>
          </v-list-item>
          <v-divider class="mx-3 mb-2"></v-divider>
          <!-- sidebar-header  -->
            
          <div class="sidebar-menu">
            <v-list shaped>
              <div v-for="(link, i) in links" :key="link.title">
                <v-list-item v-if="!link.subLinks" :key="i" :to="link.href">
                  <v-list-item-icon>
                    <v-icon >{{ link.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title >
                      {{
                      link.title
                      }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-group v-else :key="link.title" no-action>
                  <template v-slot:activator>
                        <v-list-item-icon>
                          <v-icon>fa-duotone fa-database</v-icon>
                        </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          {{
                          link.title
                          }}
                        </v-list-item-title>
                      </v-list-item-content>

                  </template>

                  <v-list-item v-for="sublink in link.subLinks" :to="sublink.href" :key="sublink.title" class="sublink">
                    <v-list-item-icon >
                    <v-icon color="#FFFFFF">{{ sublink.icon }}</v-icon>
                  </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{
                        sublink.title
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </div>
            </v-list>
          
          </div>
          <!-- sidebar-menu  -->
      </div>
            <!-- sidebar-content  -->
            
    </nav>
  </div>
  </v-navigation-drawer>

    <v-app-bar
      app
      color="#972727"
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
        
        title: "Database",
        subLinks: [
          {
            icon: "fa-duotone fa-server",
            title: "Permits",
            href: "purchase"
          },
          {
            icon: "mdi-network-pos",
            title: "Station Licenses",
            href: "/orders"
          },
          {
            icon: "mdi-certificate-outline",
            title: "Certificate",
            href: "/certificates"
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
<style lang="scss" scoped>
@import '@/scss/sidebarnav';

</style>>

