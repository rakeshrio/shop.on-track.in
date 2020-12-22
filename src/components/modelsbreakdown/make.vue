<template>
  <div class="col-md-12 col-12 my-3 p-0">
    <div class="col-md-9 col-12 text-left" style="margin: 0 auto">
      <div class="col-md-12 col-12 m-0 p-0  row my-4">
        <div
          class="col-md-3 col-6 m-0 p-0 pr-4 pb-4"
          v-for="(data, index) in allModels"
          :key="index"
        >
          <div
            class="card"
            style="
              border-radius: 8px;
              box-shadow: 0 5px 10px 0 rgba(0,89,163,.15);
            "
          >
            <div class="card-body" @click="goToCheckout(data._id)" style="cursor:pointer">
              <img :src="data.hero_image" alt="" width="100%" />
              <h2 class="title mt-2">{{ data.make }} {{ data.model }}</h2>  
              <!-- <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "> <span class="little" style="font-size:12px;color:grey">Starts from</span> {{getPrice(data.superset)}}/Mo</h2>
              <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "> <span style="font-size:12px;color:grey" class="little">or </span> {{getPrice1(data.superset)}} On-road</h2> -->
              <div class="m-0 p-0 d-flex">
                            <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "><span class="little" style="font-size:12px;color:grey">Starts from </span> {{getPrice(data.superset)}}</h2>
                            <p class="p1" style="font-size: 12px;margin-top: 10px;padding-left: 4px;"> /month</p>
              </div>
              <div class="m-0 p-0 d-flex">
                            <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "> <span style="font-size:12px;color:grey" class="little">or </span> {{getPrice1(data.superset)}} </h2>   
                            <p class="p2" style="font-size: 12px;margin-top: 10px;padding-left: 4px;"> on-road </p>
              </div>
              <h2 class="price pb-1"></h2>
              <!-- <button class="butn px-3 py-2" @click="goToCheckout(data._id)">
                Buy Now
              </button> -->
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-12 m-0 p-0 pr-4 pb-4"
          v-if="allModels.length == 0"
        >
          <!-- <div class="card">
            <div class="card-body text-center">
              <p><strong>We couldn't find any data :(</strong></p>
              <button
                @click="$router.push('/models')"
                class="mt-4 btn btn-primary"
              >
                See All Models
              </button>
            </div>
          </div> -->
        </div>
      </div>
      <div class="row" v-if="loading && allModels.length == 0">
        <div class="col-md-3" v-for="(data, index) in loader" :key="index">
          <b-card>
            <div class="mb-2">
              <b-skeleton-img class="mb-5"></b-skeleton-img>
            </div>
            <b-skeleton width="54%"></b-skeleton>
            <b-skeleton width="47%"></b-skeleton>
            <b-skeleton width="90%"></b-skeleton>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";
export default {
  data() {
    return {
      loader: [{}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  created() {
    this.apply();
  },
  watch: {},
  methods: {
    apply() {
      this.$store.dispatch("getModelsWithMake", { id: this.$route.params.id });
    },
    getprice(data) {
      return data[0].price;
    },
    goToCheckout(id) {
      this.$router.push("/display/" + id);
    },
    // getPrice(data) {
    //   var max = _.maxBy(data, "price");
    //   var min = _.minBy(data, "price");
    //   if (min == max) {
    //     return this.$options.filters.currency(max.price)
    //   } else {
    //     return this.$options.filters.currency(min.price) + '-' + this.$options.filters.currency(max.price)
    //   }
    // },
      getPrice1(data){
        //  var max =  _.maxBy(data,'price')
         var min = _.minBy(data,'price')
             
            return this.$options.filters.currency(min.price.toFixed())
        },
    getPrice(data){
        //  var max =  _.maxBy(data,'price')
         var min = _.minBy(data,'price')
             
            return this.$options.filters.currency((min.price * 0.04754182259).toFixed())
        },
        
  },
  computed: {
    allModels() {
      return this.$store.state.getModelsWithMake;
    },
    loading() {
      return this.$store.state.makingAJAX;
    },
  },
};
</script>

<style scoped>
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem !important;
}
.heading-title {
  color: #2a2a2a;
  font-size: 24px;
  font-weight: bold;
  font-family: "Gilroyf";
}
.title {
  font-size: 17px;
  font-weight: normal;
  font-family: "Gilroy";
}
.card {
  border: none;
}
.btn :active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.price {
  font-size: 17px;
  font-weight: bold;
  color: #4e44d8;
  font-family: "Gilroyf";
}
.butn {
  border: none;
  background-color: #ebe9eb;
  font-weight: 500;
  font-family: "Gilroy";
  font-size: 100%;
  margin: 0;
  line-height: 1;
  cursor: pointer;

  overflow: visible;
  padding: 0.618em 1em;

  border-radius: 3px;
  left: auto;
  color: #515151;
  background-color: #ebe9eb;
  border: 0;
  display: inline-block;
  background-image: none;
  box-shadow: none;
  text-shadow: none;
}

/* @font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
 
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
 
} */
@media only screen and (max-width: 600px) {
  .col-12 {
    padding-right: 0 !important;
  }
  .title{
      font-size:11px
  }
   .little{
      font-size:8px !important
  }
  .p1{
      margin-top: 7px !important;
  }
  .p2{
    margin-top: 6px !important;
  }
}
</style>