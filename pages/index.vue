<template>
  <div>
    <v-row dense>
      <v-col v-for="(item, i) in fotos" :key="i" :cols="item.flex">
        <v-card :loading="loading" class="mx-auto">
          <v-img :src="item.src" @click="item.dialog = true"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="item.dialog"
      persistent
      v-for="(item, i) in fotos"
      :key="i"
    >
      <v-card>
        <v-img :src="item.src"></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="item.dialog = false">
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss"></style>
<script>
export default {
  data() {
    return {
      fotos: [
        {
          src: require("../static/Promo/TTm.png"),
          flex: 12,
          dialog: false
        },
        // {
        //   src: require("../static/Promo/JSM/good time.jpeg"),
        //   flex: 6,
        //   dialog: false
        // },
        // {
        //   src: require("../static/Promo/JSM/Bimoli.jpeg"),
        //   flex: 6,
        //   dialog: false
        // },
        {
          src: require("../static/Promo/Mie/Lemonilo.png"),
          flex: 12,
          dialog: false
        },
        {
          src: require("../static/Promo/Minuman.png"),
          flex: 12,
          dialog: false
        },
        {
          src: require("../static/Promo/House Brand.png"),
          flex: 12,
          dialog: false
        }
      ]
    };
  }
};
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

// export default {
//   components: {
//     Logo,
//     VuetifyLogo
//   }
// }
</script>
