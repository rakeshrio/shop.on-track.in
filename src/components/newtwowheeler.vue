<template>
    <div class="col-md-12 mt-5 p-0">
       <div class="col-md-12 m-0 p-0">
           <h3><strong>*******************We are starting loan service soon**************************</strong>  </h3>
            <div class="col-md-4 mb-5 py-3  mt-5 " style="background-image: linear-gradient(240deg, #3322D3 0%, #A55BEC 100%); border-radius:0px 15px 15px 0px; color:white">
                <h3 class="pb-0 ml-4 pl-2 mb-0" style="font-size:36px;font-family: Gilroyf">New Two Wheeler Loans</h3>
                <p class="text-left pl-5" style="font-size:15px;font-family: Gilroy">Easy. Fast. Financed by those you trust.</p>
            </div>
            <div class="col-md-12 m-0 p-0" >
                    <div class="bg-img" >
                        
                        <div class="container" style="box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border-radius:25px;height:470px">
                            <p v-if="hasBeenSubmitted" >
                                Thanks for filling in this lovely form
                            </p>
                            <div v-else  class="form row pt-3 px-3" >
                                <p><strong style="font-size:20px;font-family:gilroyf">Tell us a bit about yourself, and we’ll get back to you with a finance offer.</strong></p>
                                <p class="text-center pb-1"  style="color:red" v-if="message">{{message}}</p>
                                <div class="col-md-12 m-0 p-0 text-center justify-center" >
                                    
                                    <div class="col-md-12 m-0 p-0 text-center col-12 mb-4 " v-if="step == 1">
                                        <img src="../assets/multi1.png" alt="" width="70%" height="auto">
                                        <p class="text-center" style="font-size:20px; font-family:gilroyf; color:#4e44e8" >Step 1</p>
                                        <div class="col-md-12  text-center col-12 mb-4 " >
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                                <input list="hosting-plan1" type="text" class="form-control" v-model="fullname" required>  
                                                <span class="floating-label">Name</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 mb-4">
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                                <input list="hosting-plan2" type="text" class="form-control" placeholder="" v-model="dob" required>
                                                <span class="floating-label">DOB (DD-MM-YYYY)</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 mb-4">
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                                <input list="hosting-plan99" type="number" class="form-control"  v-model="mobile" required>
                                                <span class="floating-label">Mobile Number</span>
                                            </div>
                                        </div>
                                        <div class="col-12 mb-4 text-center ">                
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                                <input list="hosting-plan5" type="text" class="form-control" v-model="gender" required>
                                                <datalist id="hosting-plan5">
                                                    <option value="Male"></option>
                                                    <option value="Female"></option> 
                                                </datalist>
                                                <span class="floating-label">Gender</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 row text-center" style="justify-content:center">
                                            <div class="col-md-4 col-6 m-auto">
                                                <button class="btun1" @click.prevent="step++ ">Next</button>
                                            </div>   
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-12 text-center justify-center m-0 p-0" v-if="step === 2">
                                        <img src="../assets/multi2.png" alt="" width="70%" height="auto">
                                        <p class="text-center" style="font-size:20px; font-family:gilroyf; color:#4e44e8" >Step 2</p>      
                                        <div class="col-12 mb-4 text-center ">                
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                                <input list="hosting-plan8" type="text" class="form-control" v-model="know_two_wheeler" required>
                                                <span class="floating-label">Which 2-wheeler are you looking for ?</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12 mb-2">
                                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                                <input list="hosting-plan4" type="text" class="form-control" v-model="city" required>
                                                <span class="floating-label">City</span>
                                            </div>
                                        </div>
                                        <div class="form col-12 m-0  px-4 row">
                                            <div class=" col-6 text-left pr-3 mt-3 m-0 p-0">
                                                <p class=""><strong style="color:grey">Aadhar Card</strong></p>
                                                <div class="form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" v-model="aadhar_card" value="yes" class="form-check-input" name="optradio1">Yes
                                                    </label>
                                                </div>
                                                <div class="form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" v-model="aadhar_card" value="no" class="form-check-input" name="optradio1">No
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6 p-0 pl-5 mt-3 m-0" >
                                                <p class=""><strong style="color:grey">PAN Card</strong></p>
                                                <div class="form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" v-model="pancard" class="form-check-input1" value="yes" name="optradio"> Yes
                                                    </label>
                                                </div>
                                                <div class="form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" v-model="pancard" class="form-check-input1" value="no" name="optradio" > No
                                                    </label>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="col-md-12 col-12 mb-3  mt-5 row text-center" style="justify-content:center">
                                            <div class="col-md-5 col-6">
                                                <button class="btun1" @click.prevent="step--">Previous</button>
                                            </div>
                                            <div class="col-md-4 col-6">
                                                <button class="btun2" @click.prevent="step++">Submit</button>
                                            </div>
                                        </div>
                                    </div>



                            </div>      
                        </div>
                    </div>
            </div>
            </div>
       </div>
        <div class="col-md-12 text-left m-0 p-0" style="border-top:15px solid red">
            <div class="col-md-9 py-5 m-auto">
                    <h3 class="mb-3" style="font-family:gilroyf">Features</h3>
                    <p  class="pb-0 " style="font-family:gilroy">Quick Loan Processing</p>
                    <p  class="pb-0 " style="font-family:gilroy">Minimum Documentation</p>
                    <p  class="pb-0 " style="font-family:gilroy">Low Rate of Interest</p>
                    <p style="font-family:gilroy">Multiple modes of Repayment - Direct Bank Debit, Online Booking, Payment Wallets & EMI by Cash.</p>
            </div>
        </div>
        <div class="col-md-12 text-left m-0 p-0 py-5" style="background:linear-gradient(240deg, #3322D3 0%, #A55BEC 100%); color:white">
            <div class="col-md-9 m-auto">
                    <h3 class="mb-3" style="font-family:gilroyf">Loan Eligibity Criteria</h3>
                    <p class="pb-0 mb-0" style="font-family:gilroy">Salaried Professionals & Self-Employed over the age of 18 years and below 65 years by the end of the loan tenure.</p>
                    <p style="font-family:gilroy">Employment Stability of at least 3 months in case of Salaried Professionals; & 12 months in case of Self-Employed.</p>
                    
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data(){
      return{
          step:1,
          hasBeenSubmitted: false
      }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}

.bg-img {
  /* The image used */
  background-image: url("https://wheelsemi.com/uploads/slider/New-Two-Wheeler-Loans.jpg");

  /* Control the height of the image */
  min-height: 480px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Add styles to the form container */
.container {
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 400px;
  padding: 16px;
  background-color: white;
  top:-100px

}
.btun1 {

    height:30px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0.2rem;
    border-radius: 15px;
    background:#4E44D8;
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    color:white;
    outline: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}
.btun2 {

    height:30px;
    padding: 0.2rem;
    border-radius: 12px;
    background:#ff6000;
    letter-spacing: 1px;
    font-weight: 700;
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    color:white;
    outline: none;
    font-size: 12px;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}
.rak:after {
    margin-top: 8px;
    content: "";
    width: 41px;
    height: 4px;
    background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    display: block;
    border-radius: 2px;
}


._3qpfi {
    color: #fff;
    font-weight: 700;
   
    background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    font-size: 16px;
    letter-spacing: .4px;
}

._2iiQB {
    position: relative;
    height: 48px;
    padding: 0 .75rem;
    /* border-radius: 5px; */
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    outline: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}
.xcv {
    width: 202px;
    position: relative;
    cursor: pointer;
}
.bnm {
    color: #fff;
    font-weight: 700;
    background-color: #ed6c0d;
     background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    font-size: 16px;
    letter-spacing: .4px;
}
.newp{
    font-size: 16px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
.newp2{
    font-size: 12px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
.newp1{
    font-size: 22px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
._2iiQB {
    position: relative;
    height: 48px;
    padding: 0 .75rem;
    /* border-radius: 5px; */
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    outline: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}

._1aEHs>div {

    display: flex;
    height: 48px;
    line-height: 48px;
}
._3dm64 {
    border: 1px solid #dde5eb;
    border-radius: 5px;

    box-sizing: border-box;
}
._1aEHs>div>div {
    display: inline-block;
    padding: 0 10px;
}
._1aEHs p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(70,81,102,.5);
}
._3D60D {
    margin-bottom: 10px;
    border-radius: 5px;
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.07);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.07);
    background-color: #fff;
    margin-top: 5px;
}
.ghj{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.textp:after {
    margin-top: 8px;
    content: "";
    width: 41px;
    height: 4px;
    background-image: linear-gradient(264deg,#f69b00,#ed6a00);
    display: block;
    border-radius: 2px;
}
h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: #465166;
    width: 144px;
    margin-top: 0;
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
}

/* Set a style for the submit button */
.btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}
</style>