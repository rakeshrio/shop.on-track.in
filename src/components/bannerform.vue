<template>
  <div class="col-md-10 m-auto py-5">
        <div class="col-md-4  m-0 p-0" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius:25px">  
            <div v-if="hasBeenSubmitted" class="p-3 " style="top:50px; font-family:gilroyf" >
                                <h3 class="mt-5"><strong>Thanks for filling this lovely form</strong></h3>
                                <h6 class="mt-5">Your request has been registered.</h6>
                                <h6>Our team will get in touch with you shortly.</h6>
                                <img class="mt-5" src="https://www.flaticon.com/svg/static/icons/svg/3587/3587986.svg" alt="" width="30%">
            </div>
            <div v-else class="col-md-12 col-12 m-0 p-0">
                <div class="col-md-12 p-3  m-0 p-0">
                  <div class="col-md-12  mr-0">
                    <h3 class="text-left mb-0" style="font-family:gilroyf">What Do You Want</h3> 
                    <h3 class="text-left" style="font-family:gilroyf">To Do Today ?</h3>       
                    <p class="text-left mt-3 mb-0" style="font-size:14px">Feel free to choose multiple services,</p>
                    <p class="text-left mb-4"  style="font-size:14px">We are here to help you out with your requirements</p>
                  </div>
                <div class="col-md-12 col-12 my-3 row pr-0 mr-0">
                  <div class="col-md-4 col-4">
                    <div class="card col-md-12 col-12 pt-2 m-0 p-0" style="width: 20rem;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius:10px; border:none">
                      <div class="card-body col-12 m-0 p-1  col-md-12">
                        <img class="fgh" src="../assets/scooter.png" alt="" width="60% " >
                        <p class="mt-2 mb-1" style="font-size:12px">Buy New Scooter</p>
                      </div>
                    </div>
                    <input type="checkbox" id="Buy New Bike/Scooter" value="Buy New Bike/Scooter" v-model="servicesList">
                    
                    <!-- <input type="checkbox" id="jack" value="Buy_New Bike/Scooter" v-model="servicesList"> -->
                  </div>
                  <div class="col-md-4 col-4 " >
                    <div class="card col-md-12 col-12 pt-2 m-0 p-0" style="width: 20rem;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius:10px; border:none">
                      <div class="card-body col-12 m-0 p-1 col-md-12">
                          <img class="fgh" src="../assets/mc.png" alt="" width="60%" >
                          <p class="mt-2 mb-1" style="font-size:12px"> Finance Options</p>
                      </div>
                    </div>
                    <!-- <input type="checkbox" id="dsd" value="Finance_Options" v-model="servicesList"> -->
                    
                    <input type="checkbox" id="Finance Options" value="Finance Options" v-model="servicesList">
                    
                      
                  </div>
                  <div class="col-md-4 col-4">
                    <div class="card col-md-12 col-12 pt-2 m-0 p-0" style="width: 20rem;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius:10px; border:none">
                      <div class="card-body col-12 m-0 p-1 col-md-12">
                        <img class="fgh" src="../assets/ma.png" alt="" width="60%" >
                        <p class="mt-2 mb-1" style="font-size:12px">Monthly Bike Rental</p>
                      </div>
                    </div>
                    <input type="checkbox" id="Monthly Bike Rental" value="Monthly Bike Rental" v-model="servicesList">
                    
                    <!-- <input type="checkbox" id="bnm" value="Monthly_Bike_Rental" v-model="servicesList"> -->
                  </div>
                </div>
                <div class=" col-12 mb-4 " >
                  <p class="text-left labell mb-0 pb-1 pb-0">NAME <span style="color:red">*</span></p>
                    <div class="col-12 col-md-12  text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                      <input list="hosting-plan1" placeholder="FULL NAME" type="text" class="form-control pl-0"  v-model="name" required>  
                    </div>
                </div>
                <div class=" col-12 mb-4 " >
                  <p class="text-left labell mb-0 pb-1 pb-0">DATE OF BIRTH <span style="color:red">*</span></p>
                    <div class="col-12 col-md-12 text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                      <input list="hosting-plan1" placeholder="DD/MM/YYYY" type="date" class="form-control pl-0" v-model="dob" required>  
                    </div>
                </div>
                <div class=" col-12 mb-4 " >
                  <p class="text-left labell mb-0 pb-1 pb-0">CONTACT NUMBER <span style="color:red">*</span></p>
                    <div class="col-12 col-md-12 text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                      <input list="hosting-plan1" placeholder="+91-XXXXXXXXX" type="number" class="form-control pl-0" v-model="mobile"  required>  
                    </div>
                </div>
                <div class=" col-12 mb-4 " >
                  <p class="text-left labell mb-0 pb-1 pb-0">EMAIL ADDRESS <span style="color:red">*</span></p>
                    <div class="col-12 col-md-12 text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                      <input list="hosting-plan1" placeholder="email@address.com" type="email" class="form-control pl-0" v-model="email"  required>  
                    </div>
                </div>
                
                <div class=" col-12 m-0 px-3 row " >
                    <div class="col-md-6 m-0 p-0">
                      <p class="text-left labell mb-0 pb-1 pb-0">CITY <span style="color:red">*</span></p>
                      <div class="col-12 col-md-12 text-center "  style="box-shadow: 2px 2px 12px #55555530;">
                        <select class="form-control m-0 p-0" v-model="city"  >
                          <option disabled value="" >Select City</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Hyderabad">Hyderbabad</option>
                          <option value="Delhi">Delhi</option>      
                        </select>
                      </div>  
                    </div>
                    <div class="col-md-6 m-0 p-0">
                      <p class="text-left labell mb-0 pb-1 pb-0" style="visibility:hidden">CITY <span style="color:red">*</span></p>
                      <div class="form-check form-check-inline ml-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" v-model="feature_subscription">
                        <label class="form-check-label text-left" for="inlineRadio1" style="font-size:12px"> INTERESTED IN FINANCE OPTIONS?</label>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-12 py-2 mt-3 m-0 p-0" style="background:#4CAF50; color:white ; border-radius:0 0 24px 24px">
                <h3 class="mb-0" style="font-family:gilroyf" @click="submit()">SUBMIT</h3>
              </div>
            </div>  
              
                
        </div>                                      
      </div>                 

</template>

<script>
export default {
  data(){
      return{
        name:'',
        dob:'',
        email:'',       
        mobile:'',
        city:'',
        feature_subscription:'',
        servicesList:[],
        hasBeenSubmitted:false
        }
  },
  methods:{
       submit(){
     
      this.$http.post('https://backend-bikex.herokuapp.com/api/shop_outreach',{
                    name:this.name,
                    dob:this.dob,
                    email:this.email,
                    servicesList:this.servicesList,
                    feature_subscription:this.feature_subscription,
                    mobile:this.mobile,
                    city:this.city
                
            },
            {
                headers: { 'Authorization': 'YwMiRtYxQpVcMsVy1w3Z9==' },
            }).
            then(response=>{
            this.hasBeenSubmitted = true;
            this.response = response.body;
            this.loading = false
             
            // this.$swal({
            //   title:'Your request has been registered.',
            //   text:'Our team will get in touch with you shortly.'
            //   })
            this.success = true
            // this.$router.push(
            //   {path:'/thankyou'
            // })
            }).catch(error => { 
                this.message = error.body.msg;
                this.loading= false
            })   
    },
  }
}
</script>

<style scoped>
.labell{
  font-size:12px;
};

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
}
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
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: grey;
  opacity: 1; /* Firefox */
  font-size: 12px;
  font-weight: 200;

}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: red;
}
@media screen and (max-width: 600px) {
  .fgh {
    width:80%
  }
}
</style>
