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
        src: require("../static/Promo/cut.jpg"),
        flex: 12,
        dialog: false
      },
      {
        src: require("../static/Promo/ayo.png"),
        flex: 12,
        dialog: false
      },
      // {
      //   src: require("../static/Promo/JSM/Alpukat.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      // {
      //   src: require("../static/Promo/JSM/buah naga.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      // {
      //   src: require("../static/Promo/JSM/ct naga.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      // {
      //   src: require("../static/Promo/JSM/Cut Fruit.jpeg"),
      //   flex: 6,
      //   dialog: false
      // },
      {
        src: require("../static/Promo/Buah dan Sayur/Apel Fuji Pohon.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Buah dan Sayur/Apel Fuji.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Buah dan Sayur/Bawang Putih.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Buah dan Sayur/Kol.png"),
        flex: 6,
        dialog: false
      },
      {
        src: require("../static/Promo/Buah dan Sayur/Pepaya C.png"),
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
