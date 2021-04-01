<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="blue darken-4"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content class="white--text">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-app-bar :clipped-left="clipped" fixed app color="white">
        <v-app-bar-nav-icon
          color="indigo darken-2"
          @click.stop="drawer = !drawer"
        />
        <v-img :src="logo" max-height="50" width="30"></v-img>
        <v-toolbar-title class="font-weight-bold" v-text="title" />
      </v-app-bar>
    </div>
    <v-main>
      <v-contaiter>
        <nuxt />
      </v-contaiter>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scope>
img {
  max-height: 5px !important;
}
.v-toolbar__title {
  font-size: 25px !important;
  color: #303f9f !important;
}
</style>

<script>
export default {
  data() {
    return {
      tab: null,
      logo: require("../static/logo.png"),
      items: [
        {
          title: "HOME",
          to: "/"
        },
        {
          title: "KHUSUS MEMBER",
          to: "/khusus-member"
        },
        // {
        //   title:"MINYAK GORENG",
        //   to : "/minyak"
        // },
        {
          title: "SNACK",
          to: "/snack"
        },
        {
          title: "MINUMAN",
          to: "/Minuman"
        },
        {
          title: "NUGGET",
          to: "/nugget"
        },
        {
          title: "ICE CREAM",
          to: "/Ice-Cream"
        },
        {
          title: "MIE",
          to: "/mie"
        },
        {
          title: "TEH DAN KOPI",
          to: "/teh-kopi"
        },
        {
          title: "BUAH DAN SAYUR",
          to: "/buah-sayur"
        },

        {
          title: "PERSONAL CARE",
          to: "/personal-care"
        },
        {
          title: "KEBUTUHAN RUMAH",
          to: "/kebutuhan-rumah"
        },
        {
          title: "KEBUTUHAN DAPUR",
          to: "/kebutuhan-dapur"
        },
        {
          title: "KEBUTUHAN IBU DAN ANAK",
          to: "/kebutuhan-ibu-anak"
        },
        {
          title: "OBAT-OBATAN",
          to: "/obat-obatan"
        },
        {
          title: "GOPAY & SHOPEEPAY",
          to: "/gopay-shopeepay"
        }
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: "Swadaya Raya"
    };
  }
};
</script>
