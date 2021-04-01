<template>
  <div>
    <v-container>
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
    </v-container>
  </div>
</template>
<style lang="scss">
img {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    fotos: [
      // {
      //   src: require("../static/Promo/JSM/alfamidi.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      // {
      //   src: require("../static/Promo/JSM/Bimoli.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      {
        src: require("../static/Promo/Dapur/Indofood Sambal Pedas.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Dalmonte Saos.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Dapur/Saos Indofood.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Sasa Sambal Asli.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Saori.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Panda Tiram.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Santan Kara.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Primarasa.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Delmonte.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Lafonte.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Mama Suka Mayo.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Mamasuka Mayo.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Dapur/Prochizz.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Kraft.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Dapur/Sasa Tepung Bakso.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Dapur/Tepung S.png"),
        flex: 6,
        dialog: false
      }
    ]
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
