<template>
  <div class="col-md-12 my-4 pb-5 col-12 btm" style="overflow:hidden;min-height: 400px;">
    <div class="col-md-9 p-0" style="margin:0 auto">
      <h1 class="font2 mb-4 text-left" style="">Order Summary</h1>

      <div class="row col-md-12 m-0 p-0">
       
        <div class="col-md-8 m-0 p-0">
            <!-- <div class="col-md-12 p-2 top-head m-0 p-0 d-flex justify-content-between">
            </div> -->
            <div class="p-2 col-md-12 m-0 p-0">
            <div class="row col-md-12">
                <div class="col-md-2">
                    <img :src="cartdata[0].selectedItem.image"
                  alt=""
                  width="100%">
                </div>
                <div class="col-md-10 m-0 p-0 text-left">
                    <div class="col-md-12 mb-2 m-0 p-0 d-flex justify-content-between">
                
                <p>
                <span class="font2 m-0 p-0">
                {{ cartdata[0].make_model }} {{ cartdata[0].selectedItem.color }}
                {{ cartdata[0].selectedItem.variant }}
                </span>
                <br>
                <span class="labels">Fulfilled by {{ cartdata[0].selectedItem.dealer.name}}</span>
                <br>
                <span class="labels">{{ cartdata[0].selectedItem.variant}} | {{ cartdata[0].selectedItem.color}}</span>
                </p>
                <h1 class="font2 text-left m-0 p-0" style="">
                {{ cartdata[0].selectedItem.price | currency }}
                </h1>
            </div>
            <p><strong>Price Break-Down</strong></p>
            <div class="col-md-12 mb-5" style="background:#f2f2f2; border-radius:5px">
              <div
                class="d-flex m-0 p-0 px-2 py-1 col-md-12 justify-content-between "
                v-for="(data, index) in currentSelected[0].additional_cost"
                :key="index" 
              >
                <p class="labels  mt-1">
                  {{ data.name }}
                </p>
                <p class=" text-left" style="font-size:12px">
                {{ data.price | currency }}
                </p>
              </div>
            </div>


            <div class="col-md-12 m-0 p-0  justify-content-between " v-for="(data, index) in cartdata[0].addons" :key="index">
                <div class="d-flex m-0 p-0">
                    <div class="m-0 p-0">
                      <p class="m-0 p-0"><strong>{{ data.name }}</strong></p><br>
                      <p class="labels">{{ data.description }}</p>
                    </div>
                    <div>
                      <h1 class="font2 text-left" style="">
                      {{ data.price | currency }}
                      </h1>
                    </div>
                </div>  
            </div>
    
                </div>
            </div>
            <!-- <div class="p-1 py-2 text-center" role="alert" style="background:#ECECFB; color:#4E44D8">
              The price is inclusive of GST 
            </div> -->
            </div>
        </div>
          <div class="col-md-4  mt-2 m-0 p-0">
            <div class="card p-3" style="box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none; border-radius:14px;">
                <p class=""><strong>Your Total</strong></p>
                    <p class="font2">{{totalPrice | currency}}</p>
            </div>
            
        
        </div>
      </div>

   
      <div class="row col-md-9 mt-3 p-0 m-0">
            <div class="p-1 py-2 col-md-6 col-12 text-center" role="alert" style="background:#ECECFB; color:#4E44D8">
              The price is inclusive of GST 
            </div>
              <div class="col-md-6 col-12 pt-2 m-0 p-2" style="background:#4E44D8; box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none;">
            <button
              style="border:none;background:none;color:white"
              @click="goto"
            >
              Proceed to Checkout
            </button>
          </div>
      </div>

      <div class="col-md-12 mt-3 "></div>
      <div class="col-md-12  m-0 p-0">
        <div class="col-md-4 mb-5 m-0 p-0" style="float:right">
          <!-- <div class="col-md-12 m-0 p-2" style="background:#4E44D8; box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none;">
            <button
              style="border:none;background:none;color:white"
              @click="goto"
            >
              Proceed to Checkout
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <div v-if="loading" class="mt-4 pt-5">
      <b-row>
        <b-col class="mb-4">
          <b-skeleton-img></b-skeleton-img>
        </b-col>
        <b-col class="pt-4 pl-3">
        <b-skeleton type="button"></b-skeleton>
        <b-skeleton class="mt-2" animation="wave" width="85%"></b-skeleton>
         <b-skeleton class="mt-2" type="input"></b-skeleton>
        </b-col>
        <b-col cols="12" class="mt-3">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
    </b-row>

    </div>
  </div>
</template>

<script>
const axios = require("axios");
import * as _ from "lodash";
export default {
  data() {
    return {
      superset: "",
      superdata: [],
      currentSelected: [],
      currentPrice: 0,
       loading: false,
    };
  },
  methods: {
    goto() {
      this.$router.push(
        "/checkout/" + this.$route.params.id + "/" + this.$route.params.value
      );
    },
    fetchDetail() {
      this.$store.dispatch("getModelsWithoutDealer", {
        id: this.$route.params.id,
      });
    },
  },

  created() {
    window.console.log(this.cartdata);
    this.fetchDetail();
    this.superset = this.$route.params.value;

    axios
      .get(
        "https://backend-bikex.herokuapp.com/api/otr_models/model-data-with-dealer/" +
          this.$route.params.id
        )
      .then((result) => {
        this.vehicle = result.data;
        this.variantsList = _.uniqBy(this.vehicle.superset, "variant");
        this.currentImage = this.vehicle.hero_image;
        this.currentSelected.push(this.vehicle.superset[0]);
        this.loading = false;
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
      
  },
  watch: {
    cartdata() {
      //    this.superdata =
      //     this.cartdata.superset.filter(x=>{
      //     return x.id == this.superset
      //     })
    },
  },
  computed: {
    cartdata() {
      return JSON.parse(localStorage.getItem('cart'))
    },
    totalPrice(){
        var addonsPrice = 0
        if(this.cartdata[0].addons.length > 0){
            for(var i in this.cartdata[0].addons){
                addonsPrice = addonsPrice + Number(this.cartdata[0].addons[i].price)
            }
        }
        return Number(this.cartdata[0].selectedItem.price) + Number(addonsPrice)
    }
  },
};
</script>

<style scoped>
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
.font2 {
  font-size: 18px;
  font-weight: bold;
  font-family: Gilroyf;
  color: #484848;
}
.btm{
  margin-bottom:500px;
}
@media all and (max-width: 600px) {
  .bnm {
    display: none !important;
  }
}
.labels {
  font-size: 13px;
  color: gray;
}
.top-head{
    background-color: #4E44D8;
}
.btn{
    background-color: black;
    border: 1px solid black;
    color: white;
}
</style>
