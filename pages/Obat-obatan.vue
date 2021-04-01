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
      {
        src: require("../static/Promo/Obat-obatan/CDR.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/My Well.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Herbalax.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Freshcare.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/V-Fresh.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Kailan.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Kayu.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Lang.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Telon.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Salonpas.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Rohto.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Nextcare.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Nextcare 2.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Nextcare 3.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Obat-obatan/Antis.png"),
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
