<template>

    <div class="col-md-12 m-0  p-0 " style="background: linear-gradient(240deg, rgb(51, 34, 211) 0%, rgb(165, 91, 236) 100%); border-bottom:25px solid #ff4000">
        
            <div class="col-md-12 lap m-0 p-0">
                <div class="col-md-12  m-0 p-0 row">
                    <div class="col-md-5 mt-5 m-0 p-0">
                        <div class="col-md-12 py-3 m-0 p-0 text-right pr-5" style="background:#FF4000; border-radius:0px 25px 25px 0px">
                        <h1 class=""  style="font-family:gilroyf; color:white">Why Credit Card EMI?</h1 >
                        </div>
                    </div>
                    <div class="col-md-7 mt-5 ">
                        <div class="col-md-12 mt-3 text-center py-3 m-0 d-flex p-0" style="font-family:gilroyf; color:white">
                        <h5 class="px-2"> No Downpayment <span class="pl-2">|</span> </h5>
                        <h5 class="px-2"> No Collateral <span class="pl-2">|</span></h5>
                        <h5 class="px-2"> Lower Interest Rate </h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-12 mob  m-0 p-0 row">
                <div class="col-12  m-0 p-0">
                    <div class="col-md-12 py-3 m-0 p-0 text-right pr-5" style="background:#FF4000; ">
                    <h3 class=""  style="font-family:gilroyf; color:white">Why Credit Card EMI?</h3 >
                    </div>
                </div>
                <div class="col-12 mt-5 ">
                    <div class="col-12 mt-1 text-center pb-3 m-0 d-flex p-0" style="font-family:gilroyf; color:white; font-size:12px">
                    <p class="px-2 text-left"> No Downpayment</p>
                    <p class="px-2 text-left"> No Collatarel</p>
                    <p class="px-2 text-left"> Lower Interest Rate </p>
                    </div>
                </div>
            </div>

            <div class="col-md-9 pb-5 col-11 my-5 m-auto">
                <VueSlickCarousel  v-bind="slick" >
                    <div class="col-md-12 col-12 m-0 p-0 py-5 px-2">
                        <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Honda')">
                            <h4 >Honda<strong class="bn"> Activa</strong></h4>
                            <div class="col-md-12  col-12 m-0 p-0">
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
                                </div>
                              </div>
                            </div>
                        </div>

                   
                        <div class="col-md-12 m-0 p-0  py-5 px-2" >
                            <div class="card col-md-12 col-10 m-auto  p-2 svb" @click="$router.push('/model-by-make/Honda')" >
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
                                </div>
                              </div>
                            </div>
                        </div>


                        <div class="col-md-12 m-0 py-5 px-2">
                            <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Hero')">
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
                        
                        
                        <div class="col-md-12 py-5 px-2" >
                            <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Hero')" >
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
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="col-md-12 py-5 px-2">
                            <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Honda')" >
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

                        <div class="col-md-12 py-5 px-2" >
                            <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Honda')">
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
                                  <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0  mn p-0" ><strong>Rs. 473</strong> </p></div>
                                  <!-- <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                  <button class=" py-2 dfgh  " style="">Buy</button>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="col-md-12 py-5 px-2">
                            <div class="card col-md-12 col-10 m-auto p-2 svb" @click="$router.push('/model-by-make/Honda')" >
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
                       
                        <div class="col-md-12 py-5 px-2" >
                            <div class="card col-md-12 col-10 m-auto p-2 svb" >
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
                                     
                                     <div class="col-md-12 pt-2 col-12  m-0 p-0 mt-3">
                                         <button class="text-cnetyr py-2 dfgh1  " @click="$router.push('/models')" style="">View Bikes</button>
                                  </div>
                                   </div>
                                </div>
                              </div>
                            </div>
                        </div>

                </VueSlickCarousel>
            </div>        
    </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
data(){
    return{
    slick:{    
    "dots": true,
    "arrows": true,
    "infinite": false,
    "speed": 500,
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "initialSlide": 0,
    "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": true,
      }
    }
  ]
    }
    }
},

 components: {
    VueSlickCarousel, 
  },
}


</script>

<style>
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
.svb{
  border-radius:25px
}
.mob{
    display: none !important;
}
.lap{
     display: block !important;
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
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@media screen and (max-width: 600px) {
 .lap{
     display: none !important;
 }
 .mob{
     display: block !important;
 }
}
</style>