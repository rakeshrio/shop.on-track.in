<template>
  <div class="col-md-12 col-12 my-3 p-0">
    <div class="col-md-9 col-12 text-left" style="margin:0 auto">
      <!-- <div class="col-md-4 col-12 m-0 p-0 pb-5">
            <img src="https://app-5f576523c1ac180394b7bf13.closte.com/wp-content/uploads/2020/10/hero-logo-1.png" alt="" width="36%" height="auto">
      </div>-->

      <!-- <h4 class="heading-title pb-2">Scooters</h4>
      <h4 class="heading-title">Bikes</h4>-->
      {{compareData}}
      <div class="col-md-12 col-12 row m-0 p-0 my-4">
        <div
          class="col-md-3 col-6 m-0 p-0 pr-4 pb-4"
          v-for="(data,index) in allModels "
          :key="index"
        >
          <div
            class="card"
            style="border-radius: 8px;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.21);cursor:pointer"
            
          >
            <div class="card-body card-body1" >
              <img :src="data.hero_image" alt width="100%" />

              <h2 class="title mt-4">{{data.make}} {{data.model}}</h2>

              <div class="col-md-12 text-left m-0 p-0">
                <span
                  v-for="(datas, index) in check(data.superset)"
                  :key="index"
                  @click="chooseColor(datas.id, datas.hex_color)"
                  v-bind:style="{ 'background-color': datas.hex_color }"
                  class="dot mr-2 mt-2"
                ></span>
                <span
                  class="ghj"
                  style="font-size:12px;color:grey"
                  v-if="countColors(data.superset) > 0"
                >+{{countColors(data.superset)}} more</span>
              </div>
              <h2
                class="ghj mt-2"
                style="font-size:12px;color:grey"
                v-if="data.superset.length > 0 "
              >
                Starts from
                <span
                  class="dfg"
                  style="color:#4E44D8; font-weight:bold"
                >{{getPrice(data.superset)}}</span>/month
              </h2>
              <h2
                class="ghj mt-2"
                style="font-size:12px;color:grey"
                v-if="data.superset.length > 0 "
              >
                Or
                <span
                  class="dfg"
                  style="color:#4E44D8; font-weight:bold"
                >{{getPrice1(data.superset)}}</span> onroad
              </h2>

              <!-- <div class="m-0 p-0 d-flex">
                            <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "><span class="little" style="font-size:12px;color:grey">Starts from </span> {{getPrice(data.superset)}}</h2>
                            <p class="p1" style="font-size: 12px;margin-top: 10px;padding-left: 4px;"> /month</p>
                        </div>
                        <div class="m-0 p-0 d-flex">
                            <h2 class="title  mt-2" style="color:#4E44D8; font-weight:bold" v-if="data.superset.length > 0 "> <span style="font-size:12px;color:grey" class="little">or </span> {{getPrice1(data.superset)}} </h2>   
                            <p class="p2" style="font-size: 12px;margin-top: 10px;padding-left: 4px;"> on-road </p>
              </div>-->
              <!-- <h2 class="price pb-1"></h2> -->
              <div class="col-md-12 d-flex justify-content-between">
                <!-- <button class="butn px-3 py-2 " @click="goToCheckout(data._id)">Buy Now</button> -->
                <p class="labels" @click="compare(data)">COMPARE</p>
                <!-- {{addedToCompare(data)}} -->
                <!-- <p v-else>Already Added</p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12 m-0 p-0 pr-4 pb-4" v-if="allModels.length==0">
          <div
            class="card"
            style="border-radius: 8px;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.21);"
          >
            <div class="card-body">
              <p>
                <strong>We are loading</strong>
              </p>
            </div>
          </div>
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
      
    };
  },
  created() {
    this.apply();
    this.$store.dispatch('getCompareData')
  },
  watch: {},
  methods: {
    addedToCompare(){
      var datas = this.compareData.forEach(x=>{
        return x
      })
       return datas
    },
    check(data) {
      var x = _.uniqBy(data, "color");
      return x.slice(0, 5);
    },
    countColors(data) {
      var x = _.uniqBy(data, "color");
      if (x.length > 5) {
        return x.length - 5;
      } else {
        return 0;
      }
    },
    apply() {
      this.$store.dispatch("getModels");
    },
    // getPrice(data){
    //  var max =  _.maxBy(data,'price')
    //  var min = _.minBy(data,'price')
    //  if(min == max){
    //      return max.price
    //  }else{

    //     return this.$options.filters.currency(min.price) + '-' + this.$options.filters.currency(max.price)
    //  }
    // },
    getPrice1(data) {
      //  var max =  _.maxBy(data,'price')
      var min = _.minBy(data, "price");
      return this.$options.filters.currency(min.price.toFixed());
    },
    getPrice(data) {
      //  var max =  _.maxBy(data,'price')
      var min = _.minBy(data, "price");

      return this.$options.filters.currency(
        (min.price * 0.04754182259).toFixed()
      );
    },

    goToCheckout(id) {
      this.$router.push("/display/" + id);
    },
    compare(data) {
      if (this.compareData.length <= 3) {
        if (this.compareData) {
          var compare = this.compareData;
        } else {
          compare = [];
        }
        compare.push(data);
        this.$store.dispatch('getCompareData')
      } else {
        alert("You can add only three data");
        this.$router.push("/compare")
      }
    },
  },
  computed: {
    allModels() {
      return this.$store.state.currentStateModel;
    },
    compareData() {
      if(this.$store.state.compare.length>0)
      return JSON.parse(this.$store.state.compare);
      else
      return []
      // return this.$store.state.compare
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
.dfg {
  font-weight: 600;
  font-size: 17px;
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
.ghj {
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
  .title {
    font-size: 11px;
  }
  .little {
    font-size: 8px !important;
  }
  .p1 {
    margin-top: 7px !important;
  }
  .p2 {
    margin-top: 6px !important;
  }
  .ghj {
    font-size: 9px !important;
  }
  .dfg {
    font-weight: 600;
    font-size: 12px !important;
  }
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  border: 1px solid gray;
}
.dot:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
</style>