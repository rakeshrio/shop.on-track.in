<template>
  <div class="col-md-12 display p-0 mb-5" style="margin: 0 auto; background:#f1f1f1; ">
    <!-- <div class="col-md-12 text-left pt-2" style="position:sticky !important; top:0 ">
          <h2 class="heading-title">{{ vehicle.make }} {{ vehicle.model }}</h2>
    </div> -->

    <div class="row col-md-12 mt-2 m-0 p-0" v-if="currentSelected.length > 0" >
      <div class="col-md-8 m-0 p-0"  >
      <div class="col-md-12 mobile-margin-right p-0 row " style="background:white; box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important;">  
      <div class="col-md-6 p-3  text-left" style="overflow:hidden">
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
                    <p class="m-0 p-0 fontp" style="font-size: 12px;line-height: 1.33341;font-weight: 600;letter-spacing:1px">Financing Paperwork</p>
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
        

       
      </div>

      <div style="" class="col-md-6 text-left  col-sm-order-1 discription">
        <!-- <div class="col-md-12 ">
          <h2 class="heading-title">{{ vehicle.make }} {{ vehicle.model }}</h2>
        </div> -->
        <div class="col-md-10 mb-4">
          <label for="variant">Select Variant : </label>
          <select class="form-control " v-model="variant" @change="setVariant()" style="border: 1px solid red !important;" >
            <option
              :value="data.variant "
              v-for="(data, index) in variantsList"
              :key="index"
            >
              {{ data.variant }}
            </option>
          </select>
        </div>
        <div class="col-md-12 row ml-0 pl-0 mt-3" v-if="currentSelected && variant && currentSelected[0].description  && colorCheck">
                <div class="m-0 p-0 col-9 text-right ">
                  Know more about this variant
                </div>
                <div class="popup pl- ml-0 col-3" @click="popip"> <i class="fa fa-info-circle " style="font-size:30px;color:#4e44e8" aria-hidden="true" ></i>
                  <p class="popuptext" id="myPopup">{{currentSelected[0].description}}</p>
                </div>
                <!--  <div class="p-1 py-2 text-center" role="alert" style="background:#ECECFB; color:#4E44D8">
                {{currentSelected[0].description}}
                </div> -->
        </div>
        <div class="col-md-12 my-4">
          <div class="row col-md-12 m-0 p-0">
            <transition name="fade">
              <div class="col-md-6 m-0 p-0" v-if="variant">
                <p class="m-0 p-0">Select Color :</p>
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
              
              <b-card class="mb-2 m-0 p-0" v-for="(data, index) in currentSelected[0].add_ons" :key="index" style="border-radius:5px;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important;">
                  <p class="heading-title mt-4 mb-2 m-0 p-0" style="font-size:15px"><span><img src="../assets/plus.png" width="20px" alt=""></span> Add-ons</p>
                  <input type="checkbox" class="m-0 p-0" v-if="data.status == 'active'" :value="data" v-model="selectedaddons"> <span class="checkbox-label heading-title" style="font-size:15px"> {{data.name}} at ₹{{data.price}}</span>
                  <p class="labels m-0 p-0">{{data.description}}</p>
              </b-card>
              </div>

          <transition name="fade">

             

            <!-- <div
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
            </div> -->
          </transition>
          
          
        </div>
          
      </div>
      </div>
      </div>

      <div class="col-md-4 m-0 p-0  text-left">
          <transition name="fade">
            <div class="col-md-12 m-0 p-0" v-if="currentSelected && variant && colorCheck">
                  <!-- <h1>
                      <strong> ₹. {{ currentSelected[0].price }}</strong>
                    </h1> 
                  <hr>-->
                  <div class=" p-4     mb-3" style="background:white;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:5px">
                    <p class="heading-title" style="font-size:15px">Pick Up From Store</p>
                    <p class="labels m-0 p-0 mt-1"><span class="bold">{{ currentSelected[0].dealer.name}}</span> </p>
                    <p class="labels m-0 p-0 mt-2" style="color:#4E44D8;fi"><span class="bold">
                    <!-- <a href="tel:9742202121">Call Us</a> -->
                      </span>  </p>
                    <p class="labels m-0 p-0 mt-2"><span Address:>{{ currentSelected[0].dealer.address }}, {{ currentSelected[0].dealer.city }} - {{ currentSelected[0].dealer.pincode }}</span>  </p>
                    <p v-if="!showDetailDealer" class="link" @click="showDetailDealer=!showDetailDealer">Show More</p>
                    <div v-if="showDetailDealer">
                      <p class="labels m-0 p-0 mt-2 mb-3" style="text-align: justify !important"><span class="bold" style="text-align: justify !important">About Dealer:</span>  {{ currentSelected[0].dealer.comment }}</p>  
                      <p class="link" @click="showDetailDealer=!showDetailDealer">Show Less</p>
                    </div>
                  </div>
                  
                  <div class="col-md-12 m-0 p-0">
                    
                  </div>
                  <!-- <div class="col-md-12">
                    <label for="book1000"><input id="book1000" type="radio" value="full" v-model="books"> Pay Full</label>
                    <label for="book1000"><input id="book1000" type="radio" value="book bike at rupees Rs. 1000" v-model="books"> Book 1000</label>
                    <label for="book20000"><input id="book20000" type="radio" value="book bike at rupees Rs. 20000" v-model="books"> Book 20000</label>
                    <label for="book30000"><input id="book30000" type="radio" value="book bike at rupees Rs. 30000" v-model="books"> Book 30000</label>
                    <p>Select an option below</p>
                    <div class="card">
                      <p @click="bookNow('book bike at rupees Rs. 1000')">1. Book Now By 1000</p>
                      <p @click="bookNow('book bike at rupees Rs. 20000')">2. Book Now By 20000</p>
                      <p @click="bookNow('book bike at rupees Rs. 30000')">3. Book Now By 30000</p>
                    </div>
                  </div> -->
                  
                  <div class="p-4  mt-1 card " style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border:none;">
                    <p style="font-family:gilroyf; font-size:15px" >Select an option below</p>
                    <div class=" p-3" style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border:none;border-radius:5px;">
                      <label for="book1000" style="font-family:gilroyf"><input id="book1000" type="radio" value="Thanks for choosing Ontrack" v-model="books"> Pay Full</label>
                      <p class="mb-0" style="font-size:13px">Get home delivered by paying showroom price</p>
                    </div>
                    <div class= " p-3 my-3 " style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border:none;border-radius:5px;">
                      <label for="book1000" style="font-family:gilroyf"><input id="book1000" type="radio" value="Book bike at rupees Rs. 1000" v-model="books" > Pay 1000</label>
                      <p class="mb-0" style="font-size:13px">Book Now by paying Rs. 1000.</p>
                    </div>
                    <!-- <label for="book20000"><input id="book20000" type="radio" value="book bike at rupees Rs. 20000" v-model="books"> Book 20000</label>
                    <label for="book30000"><input id="book30000" type="radio" value="book bike at rupees Rs. 30000" v-model="books"> Book 30000</label> -->
                    <div class="mt-2 text-center m-0 p-0 p-2 " style="background: #4e44d8; border-radius:5px;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border:none">
                    <button :disabled="!variant"  @click="proceed" style="border:none; color:white; background:transparent; letter-spacing:2px">Proceed</button>
                  </div>
                  </div>
                  
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
      <div class="col-md-12 m-0 p-0 mt-2">
        <div class="col-md-12 " style="background:white; border-radius:5px;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important;">
        <div class="col-md-10  px-0" >
          <div class="col-md-10 pt-3 px-0 row m-auto">
            <div class="col-md-3 col-12 m-0 p-0">
              <img src="../assets/abi3.png" alt="" width="70%" height="auto">
            </div>
            <div class="col-md-9 col-12 row text-left mb-0 p-0" >
              <div class="col-md-6 col-12 aks" style="margin-top:50px">
                <h3 style="font-family:gilroyf">Buy Bike at Best Price</h3>
                <p style="font-family:gilroy; font-size:13px">Hassle Free • No Paper-Work</p>
              </div>
              <div class="col-md-6 col-12">
                <div class="col-md-12 mb-4" v-if="submitted == false">              
                      <div class="col-12 col-md-12 px-0  text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                        <input list="hosting-plan1" placeholder=" Name" type="text" class="form-control pl-0 px-2"  v-model="name" required>  
                      </div>
                      <div class="col-12 col-md-12 mt-2 px-0  text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                        <input list="hosting-plan2" placeholder=" Mobile Number" type="number" class="form-control px-2"  v-model="number" required>  
                      </div>
                      <div class="d-flex mt-3">
                          <div>
                            <input type="checkbox">
                          </div>
                          <div class="ml-2">
                            <p style="font-size:10px" class="my-0 py-1">Allow Ontrack respresentative to contact me to assist</p>
                          </div>
                      </div>
                      <div class="col-md-12 mt-3">
                        <button  style="background:#F75D34; border:none; color:white;    
                        line-height: 48px;
                        width: 233px;
                        height: 48px;
                        margin: 0;
                        border-radius: 6px;
                        border: none;
                        box-shadow: 0 8px 8px 0 rgb(247 93 52 / 20%);"  @click="submit()">Get Quick Call Back</button>
                      </div>
                  </div>
                  <div class="col-md-12 col-12" v-if="submitted == true">
                    <div class="text-center">
                      <img src="https://rupeek.com/images/unbounce-images/lp-desktop/success-img.png" alt=" " width="20%">
                    </div>
                    <p class="mb-1 mt-2" style="font-family:gilroyf">Your request has been received,</p>
                    <p style="color:grey;font-family:gilroy">Our customer relationship manager has been notified and will call you shortly</p>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      

        <div class="fixed-bottom display-mobile mobile-panel col-12 m-0 p-0 py-2">
            <div class="col-12 row m-0 p-0">
              <div class="col-6 p-0 m-0 text-center"  >
              <button class="start-purchase py-3 m-0"  value="Book bike at rupees Rs. 1000">Start Purchase</button>
              </div>
              <div class="col-6 p-0 m-0 text-center" >
                <button class="reserve py-3 m-0" >RESERVE(₹1,000)</button>
              </div>
            </div>
        </div>

      <div class="col-md-12 col-12 mt-3 pb-5 row m-0 p-0">
              <div class="col-md-6 mb-2 p-0 col-12 " >
                <div class="col-md-12 col-12 p-5" style="background:white;border-radius:5px;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important;">
                <p class="text-left heading-title-sm  "><strong style="color:blue">GENERAL SPECIFICATION</strong></p>
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
              <div class="col-md-6 m-0 p-0 col-12 ">
                <div class="col-md-12 mobile-margin-left p-5" style="background:white;border-radius:5px;box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important;">
                  <p class="text-left heading-title-sm "><strong style="color:blue">ABOUT VEHICLE</strong></p>
                  <div class="col-md-12  p-0 m-0  " style="text-align: justify !important" >
                    <p class="labels">{{vehicle.about_vehicle}}  <a :href="''+vehicle.manufacturer_url+''">Know More</a></p>
                    <a :href="''+vehicle.manufacturer_url+''"><img style="" class="image" :src="vehicle.brand_logo" width="5%" alt=""></a>
                  </div>
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
      navs:['aa','bb','<a>cc</a>'], 
        selectionSelecotr:'sections', 
        showButton:false,
        scrollAnimate:true,
        scrollShow:false,
        disable:false,
        scrollDownHide:false,
        zIndex:1000,
        stickyTop:-1,
        threshold:0,
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
      mfg:'',
      name:'',
      number:'',
      submitted:false,
      books:'full'
    };
  },
  components:{

  },
  created() {
     window.addEventListener('scroll', this.handleScroll);
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
    variantsList(){
      this.variant = this.variantsList[0].variant
      this.setVariant()
    },
    selectColor(){
      this.selectedColor = this.selectColor[0].hex_color
      this.chooseColor(this.selectColor[0].id,this.selectColor[0].hex_color)
    }
  },
  methods: {
    chooseColor(id, color) {
      this.color = id;
      this.selectedColor = color;
    },  
   
    popip() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    },
    bookNow(uid){
      // let cartData=[{
      //   "addons":this.selectedaddons,
      //   "selectedItem": {"dealer":this.currentSelected[0].dealer,"color":this.currentSelected[0].color,
      //   "id":this.currentSelected[0].id,"variant":this.currentSelected[0].variant,"image":this.currentSelected[0].image,
      //   "price":this.currentSelected[0].price,"model":this.make_model
      //   },
      //   "_id":this.vehicle._id,
      //   "make_model":this.make_model
      // }]
      
      // localStorage.setItem("cart", JSON.stringify(cartData))
      // this.$router.push(
      //   "/cart/" + this.$route.params.id + "/" + this.currentSelected[0].id
      // );
      this.$router.push({ path: "/cart/" + this.$route.params.id + "/" + this.currentSelected[0].id, query: { booking_type: uid }})
    },
    submit(){
                    this.loading = true
                    this.$http.post('https://backend-bikex.herokuapp.com/api/otr_customer_interest',{
                        
                          name:this.name,
                          number:this.number

                        },
                        {
                        headers: { 'Authorization': 'YwMiRtYxQpVcMsVy1w3Z9==' }
                        }).
            then(response=>{
            this.submitted = true;
            this.response = response.body;
            
           
            }).catch(error => { 
                this.message = error.body.msg;
                this.loading= false
            })   
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
      if(this.books == 'full'){
        this.$router.push(
        "/cart/" + this.$route.params.id + "/" + this.currentSelected[0].id
      );
      }else{
        this.bookNow(this.books)
      }
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
.display-mobile{
  display: none;
}
/* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 170px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -104px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
/* Style the header */
.header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

/* Page content */
.content {
  padding: 16px;
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
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
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
.form-control{
    border:none !important
}
textarea:focus ~ .floating-label,
textarea:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
select:focus ~ .floating-label,
select:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}

.inputText {
outline: none !important;
}
input:focus, textarea:focus, select:focus{
  outline: none !important;
  box-shadow: none !important
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 8px;
  transition: 0.2s ease all;
  font-size:14px
}
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
  transform: scale(1.1);
  transition: 1s;
}
.mobile-margin-left{
  margin-left:10px
}

.dot:focus{
 background-color:yellow;    
}
@media only screen and (max-width: 600px) {
  .mobile-margin-right{
    margin:0  !important
  }
  .mobile-margin-left{
    margin:0  !important
  }
.ssc{
  width: auto;
  height: 30px;
}
.display-mobile{
  display: block !important;
}
.aks{
  padding-left:35px
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
