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
      //   src: require("../static/Promo/JSM/Sunlight.jpeg"),
      //   flex: 12,
      //   dialog: false
      // },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Zen.png"),
        flex: 12,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Dettol Liq.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Dettol.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Kebutuhan Rumah/Baygon.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Bayfresh.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Dettol Sem.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Force Magic.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Vape.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Soffell.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Kebutuhan Rumah/Jazz.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Multi.png"),
        flex: 6,
        dialog: false
      },

      {
        src: require("../static/Promo/Kebutuhan Rumah/Yuri.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Kispray.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/Swallow.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Rumah/GT Man.png"),
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
