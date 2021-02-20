<template>
  <div class="col-md-12 my-4 pb-5 col-12 btm" style="overflow:hidden;min-height: 400px;">
    <div class="col-md-9 p-0" style="margin:0 auto">
      <h1 class="font2 mb-4 text-left" style="">Order Summary</h1>

     
      <div class="row col-md-12 m-0 p-0">
       
        <div class="col-md-8 m-0 p-0">
            <!-- <div class="col-md-12 p-2 to p-head m-0 p-0 d-flex justify-content-between">
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
            <div v-if="currentSelected[0].additional_cost.length>1">
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
            </div>

<img src="https://2giacm20c02m4btu7z2sal9f-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/accepted-payment-methods-2.png" width="50%" height="auto" alt="">

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
            <div class="col-md-12 text-left" >
            
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


        <div class="fixed-bottom display-mobile1 mobile-panel col-12 m-0 p-0 py-2">
            <div class="col-12 row m-0 p-0">
              <div class="col-12 p-0 m-0 text-center" @click="goto" >
                <button class="start-purchase py-3 m-0">Checkout</button>
              </div>
            </div>
        </div>

      <div class="col-md-6 text-left">
        <p><span class="badge badge-danger">{{booking_type.booking_type}}</span></p>
        <p class="badge">Amount payable at store {{priceToPayAtStore | currency}} at the time of delivery</p>
      </div>      
      <div class="row col-md-9 mt-3 p-0 m-0 display-mobile">
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
       booking_type:[]
    };
  },
  methods: {
    goto() {
      // this.$router.push(
      //   "/checkout/" + this.$route.params.id + "/" + this.booking_type.booking_type
      // );

      this.$router.push({ path: "/checkout/" + this.$route.params.id + "/" + this.currentSelected[0].id, query: { booking_type: this.booking_type.booking_type }})
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
    this.booking_type = this.$route.query

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
    priceToPayAtStore(){
      if(this.booking_type.booking_type == 'Book bike at rupees Rs. 1000'){
        return this.totalPrice - Number(1000)
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 20000'){
        return this.totalPrice - Number(20000)
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 30000'){
        return this.totalPrice - Number(30000)
      }else{
        return 0
      }
    },
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
.display-mobile{
  display: none ;
}
.font2 {
  font-size: 18px;
  font-weight: bold;
  font-family: Gilroyf;
  color: #484848;
}
.start-purchase{
  border: 1px solid hsl(28, 91%, 54%);
  background-color: #F75D34;
  padding: 0px 20px;
  width: 90%;
  font-size: 12px;
  border-radius: 0px;
  color:white;
  font-weight: 700;
}
.reserve{
  border: 1px solid #f5821f;
  background-color: #ffffff;
  padding: 0px 20px;
  width: 90%;
  font-size: 12px;
  border-radius: 0px;
  font-weight: 700;

}
.display-mobile{
  display: block;
}
.display-mobile1{
  display: none ;
}

@media all and (max-width: 600px) {
  .bnm {
    display: none !important;
  }
  .display-mobile{
  display: none !important;
}
  .display-mobile1{
  display: block !important;
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
