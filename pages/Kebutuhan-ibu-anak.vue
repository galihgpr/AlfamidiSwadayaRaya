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
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Milk.png"),
        flex: 12,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Red.png"),
        flex: 12,
        dialog: false
      },
      {
        src: require("../static/Promo/Nutrilon.png"),
        flex: 12,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Pediasure.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Envagrow.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/SGM.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/SGMM.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Mamy Poko Pants.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Mamy Poko.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Goo N.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Merries.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/My Baby.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Jhonsons.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Pigeon.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Huki.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Kebutuhan Ibu dan Anak/Paseo.png"),
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
