<template>
  <div class="col-md-12 m-0 p-0" style="font-family:Gilroy">
      <!-- <div class="col-md-9 " style="margin:0 auto">
        <div class="col-md-4 m-0 p-0 col-4 text-center" >
              <div class="col-md-8 px-1 pt-4 pb-4  bord" style="background:#4E44D8; margin:0 auto;">
                <img src="https://on-track.in/wp-content/uploads/2020/10/logo-white.svg" alt="" width="70%">
              </div>
        </div>
      </div> -->
    <section>
      <div class="col-md-12 banner m-0 p-0 col-12" style="cursor:pointer"  @click="$router.push('/models')">
        <div class="col-md-12 carousel1 mt-0 laptop mx-0 pt-0 p-0" >
          <div
            id="carouselExampleIndicators"
            class="carousel m-0 p-0 col-md-12 slide"
            data-ride="carousel"
          
          >
            <ol
              class="carousel-indicators"
              v-for="(data, index) in banners"
              :key="index"
            ></ol>
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-bind:class="{ active: index == 0 }"
                v-for="(data, index) in banners"
                :key="index"
              >
                <img
                  class="d-block vbn w-100"
                  :src="data.path"
                  v-on:click="scoot()"
                />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <p class="mt-5" style="color:white">
              <i class="fa fa-angle-left " aria-hidden="true"></i>
            </p>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <p class="mt-5" style="color:white">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
          </a>
        </div>

        <div class="centered col-12">
          <!-- <h2 class="mb-4 fgh" style="color:white; font-size:34px; font-weight:900; letter-spacing:2px">BUY <span style="color:#FFA405">BIKE</span> WITH EASY CREDIT CARD EMI</h2> -->
          <!-- <form class="example" style="margin:auto;max-width:400px">
            <input
              type="text"
              v-on:keyup.enter="search1"
              list="models"
              v-model="search"
              placeholder="Search your bike here, eg: yamaha.."
            />
            <datalist id="models">
              <span v-for="(data, index) in searchedModel" :key="index">
                <option
                  v-if="index < 6"
                  :value="data.make + ' ' + data.model"
                ></option>
              </span>
            </datalist>
            <button style="background:#4E44D8" type="submit" @click="search1">
              <i class="fa fa-search"></i>
            </button>
          </form> -->
          <!-- <button
            class="mt-5 p-2 "
            style="background: rgb(78,68,216);background: linear-gradient(90deg, rgba(78,68,216,1) 18%, rgba(142,68,216,1) 68%);color:white;border:none;font-size:12px;letter-spacing:2px;border-radius:3px"
            @click="$router.push('/models')"
            variant="light"
          >
            SHOW CATALOGUE
          </button> -->
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="col-md-12 banner m-0 p-0 col-12">
          <div class="centered col-12">
            <h2 class="mb-4 fgh" style="color:white; font-size:34px; font-weight:900; letter-spacing:2px">BUY <span style="color:#FFA405">BIKE</span> WITH EASY CREDIT CARD EMI</h2>
            <h4 class="sdf mb-3" style="color:white; font-size: 24px;font-weight: normal;  font-family: Gilroy;">We sell brand new bikes here. Currently serving Bengaluru.</h4>
            <form class="example"  style="margin:auto;max-width:400px">
              <input type="text"  v-on:keyup.enter="search1" list="models" v-model="search" placeholder="Search your bike here, eg: yamaha..">
                <datalist id="models">
                  <option :value="data.make + ' ' + data.model" v-for="(data,index) in allModelList" :key="index"></option> 
                </datalist>
              <button style="background:#4E44D8" type="submit" @click="search1"><i class="fa fa-search"></i></button>
            </form>
              <b-button squared class="mt-5" @click="$router.push('/catalogue')" variant="light">SHOW CATALOGUE</b-button>
          </div>
      </div>
    </section> -->
    <div class="col-md-12 p-0 mt-2 pt-2  pb-2 mb-2" style="margin:0 auto">
      <!-- <div class="col-md-12 text-left" style="margin:0 auto">
          <h1 class="font2 mb-4 mt-5 text-center" style="">People Choice</h1>
      </div> -->
      <!-- <div class="container col-md-10 row m p-0" style="margin:0 auto; cursor:pointer">
        <div class="card col-md-6 pb-4 text-center pr-1" @click="goToModel('Hero')" style="border:none">
          <div class="card-body bid text-center p-4 m-0 p-0" >
            <img src="https://app-5f576523c1ac180394b7bf13.closte.com/wp-content/uploads/2020/10/hero-logo.png" alt="" width="70%" height="auto">
          </div>
        </div>
        <div class="card col-md-6 pb-4 text-center" @click="goToModel('Honda')" style="border:none">
          <div class="card-body bid p-4 text-center m-0 p-0" >
            <img src="https://app-5f576523c1ac180394b7bf13.closte.com/wp-content/uploads/2020/10/honda-logo.png" alt="" width="70%" height="auto">
          </div>
        </div>
      </div> -->

      
      <h2 class="font2 mt-5 mb-5 ">All Brands</h2>
      <div class="col-md-9 p-0 mb-3 m-auto">
        <div
          class="col-md-12 justify-content-center pb-5 my-4 row"
          style="margin:0 auto;padding-bottom:100px"
        >
          <div
            style="cursor:pointer"
            class="col-md-4  text-center p-3  col-4"
            v-for="(data, index) in allBrands"
            :key="index"
            @click="go(data.make, data.existing)"
          >
            <img
              v-if="data.existing == true"
              class=" sizee  "
              :src="data.brand_logo"
              alt=""
              width="110px"
              height="61px"
              
            />
            <img
              v-else
              class="zxcvb sizee"
              :src="data.brand_logo"
              alt=""
              width="110px"
              height="61px"
            />
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      search: "",
      banners: [],
    };
  },
  components:{
  

  },
  mounted() {
    this.$http
      .get("https://backend-bikex.herokuapp.com/api/otr_banner/visible")
      .then((res) => {
        window.console.log(res.data.banners);
        this.banners = res.data.banners;
      });
  },
  computed: {
    allModelList() {
      return this.$store.state.currentStateModel;
    },
    searchedModel() {
      return this.allModelList.filter((x) => {
        return (
          x.make
            .toLowerCase()
            .replace(/^\s+|\s+$/gm, "")
            .includes(this.search.replace(/^\s+|\s+$/gm, "").toLowerCase()) ||
          x.model
            .toLowerCase()
            .replace(/^\s+|\s+$/gm, "")
            .includes(this.search.replace(/^\s+|\s+$/gm, "").toLowerCase())
        );
      });
    },
    allBrands() {
      return this.$store.state.getAllBrands;
    },
  },
  created() {
    this.$store.dispatch("getModels");
    this.$store.dispatch("getAllBrands");
  },
  methods: {
    go(make, existing) {
      if (existing) {
        this.$router.push("/model-by-make/" + make);
      }
    },
    goToModel(id) {
      this.$router.push("/model-by-make/" + id);
    },
    goToType(id) {
      this.$router.push("/model-by-type/" + id);
    },
    search1() {
      this.$router.push("/model-by-search/" + this.search);
    },
    goToDisplacement(id) {
      this.$router.push("/model-by-displacement/" + id);
    },
    goToPrice(id) {
      this.$router.push("/model-by-budget/" + id);
    },
  },
};
</script>

<style scoped>
.zxcvb {
  opacity: 0.3;
}
.banner {
}
.fontt {
  font-size: 12px;
  font-weight: 600;
}
.popup-button {
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 1em;
  text-transform: uppercase;
  color: white;

  border-radius: 6px;
  margin: 10px;
  padding: 1em 3em;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    to right,
    #895cf2 0%,
    #ffabf4 50%,
    #895cf2 100%
  );
  transition: 0.5s;
}
popup-button:hover {
  background-position: right center;
}
form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #4e44d8;
  color: white;
  font-size: 17px;
  border: none;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
/* .banner{
      background: url(https://www.budgetdirect.com.au/content/dam/budgetdirect/website-assets/2017/motorcycle/backgrounds/desktop/guides/banner-motorcycle-over-car.jpg) right top no-repeat #161209;
    background-size: cover;
    height: 490px;
    position: relative;
  text-align: center;
} */
.styletypesprite {
  background: url(https://imgd.aeplcdn.com/0x0/bw/static/sprites/m/style-type-sprite.png?v=150915)
    no-repeat;
  display: inline-block;
}
.style-street {
  background-position: 0 -108px;
}
.style-sports {
  background-position: 0 -324px;
}
.style-cruiser {
  background-position: 0 -216px;
}
.style-cruiser,
.style-scooters,
.style-sports,
.style-street {
  width: 77px;
  height: 45px;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav-link.active {
  color: #495057;
  background-color: #fff;
  border-bottom: 4px solid blue !important;
  background: none !important;
  border-left: none !important;
  border-right: none !important;
  border-top: none !important;
}
a {
  color: black !important;
}
.nav-link {
  display: block;
  padding: 1rem 1.5rem;
}
.bid {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17);
  border-radius: 30px 30px 30px 30px;
}
.font2 {
  font-size: 18px;
  font-weight: bold;
  font-family: Gilroyf;
  color: #484848;
}
.font4 {
  font-size: 14px;
  font-weight: 700;
  padding: 0 !important;
  margin: 0 !important;
  color: #82888b;
}

.font3 {
  font-size: 14px;
  font-weight: 600;
  color: #82888b;
}
.font1 {
  font-size: 20px !important;
  line-height: 24px !important;
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@media only screen and (max-width: 600px) {
  .font1 {
    font-size: 13px !important;
    line-height: 24px !important;
  }
  .sdf {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  .fgh {
    font-size: 22px !important;
  }
  .vbn {
    /* height: 300px; */
  }
  .sizee {
    width: 70px !important;
    height: auto !important;
  }
  .banner {
    /* height: 268px; */
    /* background: url(https://cdn.bimbimbikes.com/images/header.jpg) center top no-repeat #161209; */
    background-size: cover;
  }
  form.example input[type="text"] {
    padding: 4px !important;
    font-size: 14px !important;
    border: none;
    float: left;
    width: 80%;
    background: #f1f1f1;
  }

  form.example button {
    float: left;
    width: 20%;
    padding: 4px !important;
    background: #4e44d8;
    color: white;
    font-size: 14px !important;
    border: none;
    border-left: none;
    cursor: pointer;
  }
}
</style>
