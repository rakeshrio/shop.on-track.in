<template>
  <div
    class="col-md-9 display mb-5"
    style="margin: 0 auto;"
  >
    <div class="row col-md-12 m-0 p-0" v-if="currentSelected.length > 0">
      <div
        class="col-md-6 p-3 col-sm-order-2 txet-left"
        style="overflow:hidden"
      >
        <img class="onHover" width="100%" :src="currentImage" alt="" />
        <div class="text-center">
          <!-- <div class="col-md-12 d-flex  m-0 p-0">
          <img src="../assets/delivery1.png" alt="" width="auto" height="50px">
        <p class="pl-3 mt-3 mb-5" style="font-size: 12px;
    line-height: 1.33341;
    font-weight: 600;letter-spacing:2px">Contact-less Home Delivery</p>
        </div> -->
       <div class="row col-md-12 col-12 m-0 p-0">
            <div class="col-md-4 mb-4 m-0 p-0 col-4 d-flex">
                <div class="col-md-6 col-4 m-0 p-0 text-right">
                <img class="ssc" src="../assets/1.png" width="60%" height="auto" alt="">
                </div>
                <div class="col-md-6 col-8 m-0 p-0 pl-3 text-left">
                    <p class="m-0 p-0"><strong class="fontp1">Avoid</strong></p>
                    <p class="m-0 p-0 fontp" style="font-size: 12px;
    line-height: 1.33341;
    font-weight: 600;letter-spacing:1px">Financing Paperwork</p>
                </div>
            </div>
            <div class="col-md-4 mb-4 m-0 p-0 col-4 d-flex">
                <div class="col-md-6 col-4 m-0 p-0 text-right">
                <img class="ssc" src="../assets/2.png" width="60%" height="auto" alt="">
                </div>
                <div class="col-md-6 col-8 m-0 p-0 pl-3 text-left">
                    <p class="m-0 p-0"><strong class="fontp1">Get it</strong></p>
                    <p class="m-0 p-0 fontp" style="font-size: 12px;
    line-height: 1.33341;
    font-weight: 600;letter-spacing:1px">Home Delivered</p>
                </div>
            </div>
            <div class="col-md-4 mb-4 m-0 p-0 col-4 d-flex">
                <div class="col-md-6 col-4 m-0 p-0 text-right">
                <img class="ssc" src="../assets/3.png" width="60%" alt="" height="auto">
                </div>
                <div class="col-md-6 col-8 m-0 p-0 pl-3 text-left">
                    <p class="m-0 p-0"><strong class="fontp1">Avail</strong></p>
                    <p class="m-0 p-0 fontp" style="font-size: 12px;
    line-height: 1.33341;
    font-weight: 600;letter-spacing:1px">Credit Card EMI</p>
                </div>
            </div>
       </div>  
        </div>
        <div class="col-md-12 text-left mt-3" v-if="currentSelected && variant && currentSelected[0].description  && colorCheck">
    <h1 class="heading-title">
      What's in this variant?
    </h1>
<div class="p-1 py-2 text-center" role="alert" style="background:#ECECFB; color:#4E44D8">
 {{currentSelected[0].description}}
</div>
        
        
        </div>
      </div>

      <div style="" class="col-md-6 text-left pt-5 col-sm-order-1 discription">
        <div class="col-md-12">
          <h2 class="heading-title">{{ vehicle.make }} {{ vehicle.model }}</h2>
        </div>
        <div class="col-md-10 my-4">
          <label for="variant">Choose Variant</label>
          <select class="form-control" v-model="variant" @change="setVariant()">
            <option
              :value="data.variant"
              v-for="(data, index) in variantsList"
              :key="index"
            >
              {{ data.variant }}
            </option>
          </select>
         
        </div>
        <div class="col-md-12 my-4">
          <div class="row col-md-12 m-0 p-0">
            <transition name="fade">
              <div class="col-md-6 m-0 p-0" v-if="variant">
                <p class="m-0 p-0">Choose Color :</p>
                <span
                  v-for="(data, index) in selectColor"
                  :key="index"
                  @click="chooseColor(data.id, data.hex_color)"
                  v-bind:style="{ 'background-color': data.hex_color }"
                  class="dot mr-2 mt-2"
                ></span>
              </div>
            </transition>

            <transition name="fade">
              <div class="col-md-6 m-0 p-0 transit" v-if="color">
                <!-- <p class="">Selected Color :</p>
                <span
                  v-bind:style="{ 'background-color': selectedColor }"
                  class="dot mr-2"
                ></span> -->
                
              </div>
            </transition>
          </div>

          <!-- <p class="mt-2" style="color: red" v-if="!variant">
            *Please select variant.
          </p>
          <p class="mt-2" style="color: red" v-if="!colorCheck && variant">
            *Please select color.
          </p> -->
        </div>
        
        <div class="col-md-12  text-left px-3 my-4">
          <div v-if="currentSelected[0].add_ons.length > 0 && variant && colorCheck">
              <p class="heading-title mt-4 mb-2 m-0 p-0" style="font-size:15px">Add-ons</p>
              <b-card class="mb-2 m-0 p-0" v-for="(data, index) in currentSelected[0].add_ons" :key="index">
                  <input type="checkbox" class="m-0 p-0" v-if="data.status == 'active'" :value="data" v-model="selectedaddons"> <span class="checkbox-label heading-title" style="font-size:15px"> {{data.name}} at ₹{{data.price}}</span>
                  <p class="labels m-0 p-0">{{data.description}}</p>
              </b-card>
              </div>

          <transition name="fade">

             

            <div
              v-if="currentSelected[0].additional_cost && variant && colorCheck"
            >
             
              <div
                class="d-flex m-0 p-0 col-md-8 justify-content-between transit"
                v-for="(data, index) in currentSelected[0].additional_cost"
                :key="index"
              >
                <p class="labels m-0 p-0 mt-1">
                  {{ data.name }}
                </p>
                <p class="labels m-0 p-0 mt-1">{{ data.price | currency }}</p>
              </div>
              <div class="text-left mt-3">
                <h1 class="heading-title">
                <strong>Total: {{ totalPrice | currency }}</strong>
              </h1>
              </div>
            </div>
          </transition>
          
          <transition name="fade">
         
            <div
              class="col-md-12 m-0 p-0 mt-4"
              v-if="currentSelected && variant && colorCheck"
            >
              <!-- <h1>
                <strong> ₹. {{ currentSelected[0].price }}</strong>
              </h1> 
            <hr>-->
            <div class="card p-2 mt-2 mb-4">
              <p class="heading-title" style="font-size:15px">FULFILLED BY</p>
              <p class="labels m-0 p-0 mt-1"><span class="bold">{{ currentSelected[0].dealer.name}}</span> </p>
              <p class="labels m-0 p-0 mt-2" style="color:#4E44D8;fi"><span class="bold">
              <a href="tel:9742202121">Call Us</a>
  

                </span>  </p>
           
              <p class="labels m-0 p-0 mt-2"><span Address:>{{ currentSelected[0].dealer.address }}, {{ currentSelected[0].dealer.city }} - {{ currentSelected[0].dealer.pincode }}</span>  </p>
              <p v-if="!showDetailDealer" class="link" @click="showDetailDealer=!showDetailDealer">Show More</p>
              <div v-if="showDetailDealer">
                <p class="labels m-0 p-0 mt-2 mb-3" style="text-align: justify !important"><span class="bold" style="text-align: justify !important">About Dealer:</span>  {{ currentSelected[0].dealer.comment }}</p>
                
                <p class="link" @click="showDetailDealer=!showDetailDealer">Show Less</p>
              </div>
            </div>
              <button
                :disabled="!variant"
                class="btn btn-primary"
                style="background: #4e44d8"
                @click="proceed"
              >
                Proceed
              </button>
            </div>
          </transition>
        </div>
      </div>

      <!-- <div class="col-md-12 mt-5 row">
        <b-tabs content-class="mt-3 col-md-12" class="col-md-12 heading-title-md" justified>
          <b-tab class="nav" title="GENERAL SPECIFICATION" active>
            <div class="row">
              <div class="col-md-6 my-5">
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Model/Make</strong></p>
                  <p class="labels">{{ vehicle.make }} {{ vehicle.model }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Mileage</strong></p>
                  <p class="labels">{{ vehicle.mileage}}kmpl</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Displacement</strong></p>
                  <p class="labels">{{ vehicle.displacement}}cc</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Tank Capacity</strong></p>
                  <p class="labels">{{ vehicle.tank_capacity }}L</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Start Type</strong></p>
                  <p class="labels">{{ vehicle.start_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Fuel Type</strong></p>
                  <p class="labels">{{ vehicle.fuel_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Tyre Type</strong></p>
                  <p class="labels">{{ vehicle.tyre_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Brake Type</strong></p>
                  <p class="labels">{{ vehicle.brakes }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Breaking System</strong></p>
                  <p class="labels">{{ vehicle.breaking_system }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Fuel Type</strong></p>
                  <p class="labels">{{ vehicle.fuel_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Odometer</strong></p>
                  <p class="labels">{{ vehicle.odometer }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Kerb Weight</strong></p>
                  <p class="labels">{{ vehicle.weight }} KG</p>
                </div>
              </div>
              <div class="col-md-4 pb-5 m-0 p-0">
                <img style="opacity:0.2" :src="vehicle.brand_logo" width="100%" alt="">
              </div>
            </div>
          </b-tab>
          <b-tab title="ABOUT VEHICLE"><p>
            <div class="col-md-12 my-5 text-left">
              <p class="labels">{{vehicle.about_vehicle}}  <a :href="''+vehicle.manufacturer_url+''">Know More</a></p>
            </div>
          </b-tab>

        </b-tabs>
      </div> -->
      <p class="text-left pd3 heading-title-sm mt-5 "><strong style="color:blue">GENERAL SPECIFICATION</strong></p>
      <div class="col-md-12 pd3 row m-0 p-0">
        <div class="col-md-6 pd1 pl-0  pt-0 m-0" style="padding-right:3rem; padding-bottom:3rem"> 
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Model/Make</strong></p>
                  <p class="labels">{{ vehicle.make }} {{ vehicle.model }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Mileage</strong></p>
                  <p class="labels">{{ vehicle.mileage}} kmpl</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Displacement</strong></p>
                  <p class="labels">{{ vehicle.displacement}} cc</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Tank Capacity</strong></p>
                  <p class="labels">{{ vehicle.tank_capacity }} L</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Start Type</strong></p>
                  <p class="labels">{{ vehicle.start_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Fuel Type</strong></p>
                  <p class="labels">{{ vehicle.fuel_type }}</p>
                </div>
        </div>
        <div class="col-md-6 pd2  pr-0 pb-5 pt-0 m-0" style="padding-left:3rem">
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Tyre Type</strong></p>
                  <p class="labels">{{ vehicle.tyre_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Brake Type</strong></p>
                  <p class="labels">{{ vehicle.brakes }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Breaking System</strong></p>
                  <p class="labels">{{ vehicle.breaking_system }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Fuel Type</strong></p>
                  <p class="labels">{{ vehicle.fuel_type }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Odometer</strong></p>
                  <p class="labels">{{ vehicle.odometer }}</p>
                </div>
                <div class="col-md-12 d-flex m-0 p-0 justify-content-between">
                  <p class="heading-title-sm"><strong>Kerb Weight</strong></p>
                  <p class="labels">{{ vehicle.weight }} Kg</p>
                </div> 
        </div>
      </div>
      
      <div class="col-md-12 pd3 p-0 m-0 my-5 " style="text-align: justify !important" >
        <p class="text-left heading-title-sm "><strong style="color:blue">ABOUT VEHICLE</strong></p>
              <p class="labels">{{vehicle.about_vehicle}}  <a :href="''+vehicle.manufacturer_url+''">Know More</a></p>
            <a :href="''+vehicle.manufacturer_url+''"><img style="" class="image" :src="vehicle.brand_logo" width="5%" alt=""></a>
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
      vehicle: [],
      value: "",
      currentImage: "",
      color: "",
      currentSelected: [],
      currentPrice: 0,
      variant: "",
      loading: true,
      selectColor: [],
      colorCheck: "",
      variantsList: [],
      selectedColor: "",
      showDetailDealer:false,
      selectedaddons:[],
      make_model:'',
      mfg:''
    };
  },
  created() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    axios
      .get(
        "https://backend-bikex.herokuapp.com/api/otr_models/model-data-with-dealer/" +
          this.$route.params.id
      )
      .then((result) => {
        this.vehicle = result.data;
        this.variantsList = _.uniqBy(this.vehicle.superset, "variant");
        this.currentImage = this.vehicle.hero_image;
        this.make_model = this.vehicle.make +' '+ this.vehicle.model
        this.currentSelected.push(this.vehicle.superset[0]);
        this.loading = false;
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },
  watch: {
    color() {
      this.setImage();
    },
  },
  methods: {
    chooseColor(id, color) {
      this.color = id;
      this.selectedColor = color;
    },
    setImage() {
      this.currentSelected = this.vehicle.superset.filter((x) => {
        return x.id == this.color;
      });
      this.colorCheck = this.currentSelected[0].color;
      this.currentImage = this.currentSelected[0].image;
    },
    proceed() {
      let cartData=[{
        "addons":this.selectedaddons,
        "selectedItem": {"dealer":this.currentSelected[0].dealer,"color":this.currentSelected[0].color,
        "id":this.currentSelected[0].id,"variant":this.currentSelected[0].variant,"image":this.currentSelected[0].image,
        "price":this.currentSelected[0].price,"model":this.make_model
        },
        "_id":this.vehicle._id,
        "make_model":this.make_model
      }]
      
      localStorage.setItem("cart", JSON.stringify(cartData))
      this.$router.push(
        "/cart/" + this.$route.params.id + "/" + this.currentSelected[0].id
      );
    },
    setVariant() {
      this.colorCheck = "";
      this.selectColor = this.vehicle.superset.filter((x) => {
        return x.variant == this.variant;
      });
    },
  },
  computed: {
    totalPrice(){
      
        if(this.selectedaddons.length ==0){
          return this.currentSelected[0].price
        }else{
          var x = 0
          for(var i in this.selectedaddons){
            x+=Number(this.selectedaddons[i].price)
          }
          return Number(this.currentSelected[0].price) + Number(x)
        }
     
    }
    // variantList() {
    //   if (!this.variant) {
    //     return this.vehicle
    //   } else {
    //     return this.vehicle.filter(x=>{
    //         return x.id == this.variant
    //     })
    //   }
    // },
  },
};
</script>

<style scoped>
/*
.discription:before {
  content : "";
  position: absolute;
  margin-top: 205;
  margin-bottom: 100px;
  width  : 1px;
  height   : 80%;
  border-left:1px solid rgb(128, 128, 128,0.2);
}
*/
.nav-tabs .nav-link.active{
    color: #495057;
    background-color: red !important;

}

.labels {
  color: gray;
    font-size: 15px;
    font-weight: normal;
    font-family: "Gilroy"
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.display {
  min-height: 300px;
  transition: 2s;
  font-family: "Gilroy";
    font-size: 17px;
    font-weight: normal;
    font-family: "Gilroy"
}
.link{
  color: #4E44D8;
  cursor:pointer
}
.title{
    font-size: 17px;
    font-weight: normal;
    font-family: "Gilroy"
}
.heading-title{
    color: #2A2A2A;
    font-size: 24px;
    font-weight: bold;
    font-family: "Gilroyf"
}
.heading-title-sm{
    color: #2A2A2A;
    font-size: 15px;
    font-weight: bold;
    font-family: "Gilroyf"
}
.heading-title-md{
    color: #2A2A2A;
    font-size: 17px;
    font-weight: bold;
    font-family: "Gilroyf"
}
.nav-link .a{
    color: red !important;
}

.transit {
  transition: 2s;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
}
.dot:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
.onHover:hover {
  transform: scale(1.5);
  transition: 1s;
}

.dot:focus{
 background-color:yellow;    
}
@media only screen and (max-width: 600px) {
.ssc{
  width: auto;
  height: 30px;
}
.pd2{
  padding-left:0 !important;
  
}
.image{
    width:25%;
  }
.pd1{
  padding-right:0 !important;
  padding-bottom:0 !important;
  /* padding-left: 2rem !important */
}
.pd3{
   padding-left: 1rem !important
}
.fontp{
  font-size: 8px  !important;
}
.fontp1{
  font-size: 13px  !important;
}
  
}
</style>
