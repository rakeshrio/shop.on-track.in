<template>
  <div class="col-md-12 m-0 p-0" style="font-family: Gilroy">
    <!-- <div class="col-md-9 " style="margin:0 auto">
        <div class="col-md-4 m-0 p-0 col-4 text-center" >
              <div class="col-md-8 px-1 pt-4 pb-4  bord" style="background:#4E44D8; margin:0 auto;">
                <img src="https://on-track.in/wp-content/uploads/2020/10/logo-white.svg" alt="" width="70%">
              </div>
        </div>
      </div> -->
    <section class="">
      <div
        class="col-md-12 banner m-0 p-0 col-12"
        style="cursor: pointer"
        @click="$router.push('/models')"
      >
        <div class="col-md-12 carousel1 mt-0 laptop mx-0 pt-0 p-0">
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
            <p class="mt-5" style="color: white">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </p>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <p class="mt-5" style="color: white">
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
    <div class="col-md-12 p-0 mt-2 pt-2 pb-2 mb-2" style="margin: 0 auto">
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

      <!-- <h2 class="font2 mt-5 mb-5">All Brands</h2>
      <div class="col-md-9 p-0 mb-3 m-auto">
        <div
          class="col-md-12 justify-content-center pb-5 my-4 row"
          style="margin: 0 auto; padding-bottom: 100px"
        >
          <div
            style="cursor: pointer"
            class="col-md-4 text-center p-3 col-4"
            v-for="(data, index) in allBrands"
            :key="index"
            @click="go(data.make, data.existing)"
          >
            <img
              v-if="data.existing == true"
              class="sizee"
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
      </div> -->

 

      <div class="col-md-12 m-0 my-5 p-0" >
        <div
          class="col-md-9 m-auto text-left p-4 py-5"
          style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; border-radius:20px"
        >
          <h2 class="font2 mb-3">Active Brands</h2>
          <div class="col-md-12 row m-0 p-0 mb-5" style="cursor: pointer">
            <div class="col-md-2 col-6" @click="$router.push('/model-by-make/Hero')">
              <div
                class="col-md-12 card p-4"
                style="
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                  border: none;
                  border-radius: 20px;
                "
              >
                <img
                  src="https://imgd.aeplcdn.com/110x61/bw/makes/hero20200508192826.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-2 col-6" @click="$router.push('/model-by-make/Honda')">
              <div
                class="col-md-12 card p-4"
                style="
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                  border: none;
                  border-radius: 20px;
                "
              >
                <img
                  src="https://imgd.aeplcdn.com/110x61/bw/makes/honda20200511152343.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h2 class="font2 mb-3">Arriving Soon</h2>
          <div class="col-md-12 row m-0 p-0" style=" border-radius: 20px;" >
            <div class="slider pt-4 col-md-12 ml-2"  style=" border-radius: 20px;">
              <div class="slide-track">
                
                <div class="slide ">
                  <img class=""
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/suzuki20200508193118.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/royal-enfield20200508193112.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/tvs20200508193203.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/bajaj20200508192534.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/ktm20200518163508.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/jawa20200508192940.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/yamaha20200508193220.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/vespa20200508193212.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/aprilia20200508192455.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                
                <div class="slide">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/kawasaki20200508192950.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide ">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/hyosung20200511152353.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide text-center">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/harleydavidson20200508192816.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                <div class="slide text-center">
                  <img
                    src="https://imgd.aeplcdn.com/110x61/bw/makes/hero-electric20200508192834.jpg"
                    height="auto"
                    width="100px"
                    alt=""
                  />
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>



  <div class="col-md-12 m-0 p-0 mob" style="background: linear-gradient(240deg, rgb(51, 34, 211) 0%, rgb(165, 91, 236) 100%); border-bottom:25px solid #ff4000">
        <div class="col-md-12 m-0 p-0 row">
          <div class="col-md-5 mt-5 m-0 p-0">
             <div class="col-md-12 py-3 m-0 p-0 text-right pr-5" style="background:#FF4000; border-radius:0px 25px 25px 0px">
               <h1 class=""  style="font-family:gilroyf; color:white">Why Credit Card EMI?</h1 >
             </div>
          </div>
          <div class="col-md-7 mt-5 ">
            <div class="col-md-12 mt-3 text-center py-3 m-0 d-flex p-0" style="font-family:gilroyf; color:white">
              <h5 class="px-2"> No Downpayment <span class="pl-2">|</span> </h5>
              <h5 class="px-2"> No Collatarel <span class="pl-2">|</span></h5>
              <h5 class="px-2"> Lower Interest Rate </h5>
            </div>
          </div>
        </div>
        <div class="col-md-12 m-0 p-0">
          <div class="col-md-9 p-0 m-auto">
             <div class="col-md-12 pb-5 row m-0 p-0">
               <div class="col-md-12">
                 <VueSlickCarousel :arrows="true" :dots="true" :slidesPerRow=2>
                  <div class="col-md-12 col-12 m-0 p-0" >
                    <div class="col-md-12 col-12 mt-5 m-0 p-0 row" style="color:black">
                        <div class="col-md-6 m-0 p-0 py-5 px-2">
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Honda<strong class="bn"> Activa</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/activa.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 84,416</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 4,464</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 4,013</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 451</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-md-6 m-0 p-0  py-5 px-2" >
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Honda<strong class="bn"> CD 110</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/cd100.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10  col-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 81,699</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 4,320</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 3,884</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 436</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                    <div class="col-md-12 m-0 p-0">
                      <div class="col-md-12 m-0 p-0 mt-5 row" style="color:black">
                        <div class="col-md-6 m-0 py-5 px-2">
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Hero<strong class="bn"> Splendor Plus</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/splendor.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 80,416</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 4,253</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 3,823</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 430</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-md-6 py-5 px-2" >
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Hero<strong class="bn"> Maestro Edge</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/maestro.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 78,879</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 4,171</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 3.750</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 421</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-12 m-0 p-0">
                      <div class="col-md-12 m-0 p-0 mt-5 row" style="color:black">
                        <div class="col-md-6 py-5 px-2">
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Honda<strong class="bn"> XBlade</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="https://bikex-image-bucket.s3.ap-south-1.amazonaws.com/XBlade_Main-min-1606132305031.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 141,030</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 7,458</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 6,705</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 753</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-md-6 py-5 px-2" >
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Honda<strong class="bn"> Shine</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/shine.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 88,509</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 4,681</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 4,208</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 47</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                      </div>
                    
                    </div>
                    <div class="col-md-12 m-0 p-0">
                      <div class="col-md-12 m-0 p-0 mt-5 row" style="color:black">
                        <div class="col-md-6 py-5 px-2">
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Honda<strong class="bn"> Dio</strong></h4>
                              <div class="col-md-12 col-12 m-0 p-0">
                                <img src="../assets/dio.png" alt="" width="100%" height="auto">
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 ">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 nm p-0">On-Road Price</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  nm p-0">Rs. 82,803</p></div>
                                  <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm">Tenure</p></div>
                                  <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0">24 Months</p></div>  
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Bank EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs 4,379</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0 nm" >Credit Card EMI</p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 nm p-0" >Rs. 3,936</p></div>
                                  <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0  mn" ><strong>Difference</strong> </p></div>
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 443</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-md-6 py-5 px-2" >
                            <div class="card col-md-12 m-0 p-2 svb" >
                              <h4 >Explore Our<strong class="bn"> Catalogue</strong></h4>
                              <div class="col-md-12 text-center col-12 m-0 p-0">
                                <!-- <div class="text-center">
                                  <img class="text-center" src="https://www.flaticon.com/svg/static/icons/svg/3597/3597042.svg" alt="" width="40%" height="auto">

                                </div> -->
                              </div>
                              <div class="col-md-10 col-12 m-auto p-0 " style="visibilty:hidden !important">
                                <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                   <div class="text-center m-auto p-4">
                                  <img class="text-center m-auto" src="https://www.flaticon.com/svg/static/icons/svg/3597/3597042.svg" alt="" width="40%" height="auto">

                                </div>
                                   <div class="col-md-12 col-12 m-0 mt-4 pt-3 p-0 mb-2 text-left Gilroyf"><p class="text-center">save upto <strong>10%</strong> on Monthly EMIs</p></div>
                                   <div class="col-md-10">
                                     
                                     <div class="col-md-12 mt-5 pt-2 col-12 ml-3 m-0 p-0 mt-3">
                                         <button class="text-cnetyr py-2 dfgh1  " style="">View Bikes</button>
                                  </div>
                                   </div>
                                </div>
                              </div>
                            </div>
                      </div>
                      </div>
                    
                    </div>
                  </VueSlickCarousel>
               </div>

               <!-- <div class="col-md-5 mt-5 pt-5 text-left zx" style="color:white; ">
                  <h4 class="mb-0 pb-0">Bank's Interest - 24% IRR</h4>
                  <h4 class="mb-0 pb-0">Credit Card's Interest - 15% IRR</h4>

                  <h4 class="mt-5 mb-0 pb-0">No Downpayment</h4>
                  <h4 class="mb-0 pb-0">No Hypothecation Charges</h4>
                  <h4 class="mb-0 pb-0">Vehicle Free of Loan</h4>
                  
                  <h4 class="mt-5">Save 10% on Monthly EMIs</h4>

                  <div class="col-md-12  col-12 py-2 m-0 p-0  mt-5" style="justify-content:left">
                    <button class=" vbn " style=" font-size:30px; letter-spacing:1px;font-family:gilroyf" @click="scrollToTop">Know More</button>
                  </div>
                  
               </div> -->
             </div>
          </div>
        </div>
        
      </div> 


    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      search: "",
      banners: [],
   
    };
  },
  components: {
    VueSlickCarousel, 
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
     scrollToTop() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
.svb{
  border-radius:25px
}

.vbn{
  padding-left:100px;
  padding-right:100px;
  padding-top:20px;
  padding-bottom: 20px;
}
.nm{
  font-size:13px;
  font-family:gilroy
}
.mn{
  font-family:gilroyf;
  font-size:13px;
}
.bn{
  font-family:gilroyf;
}
.dfgh{
  font-weight:700; 
  color:white;
   border:none; 
   background-color: #FF4000;
    background-image: linear-gradient(261deg,#FF4000,#ed6a00);
   border-radius:12px;
   padding-left:10px;
    padding-right:10px;
    letter-spacing: 1px;
    font-family: gilroyf;
}
.dfgh1 {
    font-weight: 700;
    color: white;
    border: none;
    background-color: #FF4000;
    background-image: linear-gradient(261deg,#FF4000,#ed6a00);
    border-radius: 12px;
    padding-left: 21px;
    padding-right: 14px;
    letter-spacing: 1px;
    font-family: gilroyf;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}

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
  .mob{
    display:none !important
  }
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
