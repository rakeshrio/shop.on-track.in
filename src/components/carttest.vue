<template>
  <div class="col-md-12 m-0 p-0" style="background:#F2F2F2">
      <div class="col-md-12 row m-auto p-0">
            <div class="col-md-8">
                <div class="col-md-12 p-2" style="background:white">
                    <div class="col-md-10 border-bottom d-flex m-auto" style="justify-content:space-between">
                        <div><p>My Bag</p></div>
                        <div><p>Items are Available</p></div>    
                    </div>
                    <div class="col-md-10">
                        <div class="col-md-4"><img :src="cartdata[0].selectedItem.image" alt="" width="100%"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="col-md-12 p-2" style="background:white">
                    <P>col-md-4</P>
                </div>
            </div>
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
