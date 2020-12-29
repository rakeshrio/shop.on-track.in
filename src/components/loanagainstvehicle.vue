<template>
   <div class="col-md-12 m-0 p-0"  style="overflow:hidden">
        <div class="col-md-12 heig m-0 p-0" style="background: #ff4000; height:200px">
                <div class="col-md-11 py-5 row m-auto" style=" ">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6 text-left">
                        <h2 class="" style="font-size:50px;font-family:gilroyf; color:white;"><strong>Loan Against Vehicle</strong></h2>
                        <p class="mb-0 pb-0 wid" style="font-size:17px; color:white; width:600px; ">Fulfill your short-term finance requirement by availing a loan against your existing 2-wheeler.</p>
                    </div>
                </div>
        </div>
        <div class="col-md-12 m-0 p-0" style=" background-image:url('https://wheelsemi.com/uploads/slider/Home.jpg');background-size:cover; height:600px; width:auto">       
         <div class="col-md-10 m-auto">    
            <div class="col-md-4 p-3 m-0 top123 " style="top:-160px; min-height:517px">
                <div class=" col-12 p-4" style="background:white !important; border-radius:25px; box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); min-height:517px">
                    <p><strong style="font-size:20px;font-family:gilroyf">Tell us a bit about yourself, and we’ll get back to you with a finance offer.</strong></p>
                        <div v-if="hasBeenSubmitted" style="top:50px !" >
                                <h3 class="mt-5"><strong>Thanks for filling this lovely form</strong></h3>
                                <h6 class="mt-5">Your request has been registered.</h6>
                                <h6>Our team will get in touch with you shortly.</h6>
                                <img class="mt-5" src="https://www.flaticon.com/svg/static/icons/svg/3587/3587986.svg" alt="" width="30%">
                        </div>
                        <div v-else class="form row pt-3" >
                            <p class="text-center pb-1"  style="color:red" v-if="message">{{message}}</p>
                                <div class="col-md-12 text-center justify-center" v-if="step === 1">
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
                                            <input list="hosting-plan2" type="text" class="form-control" placeholder="DD-MM-YYYY" v-model="dob" required>
                                            <span class="floating-label"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-12 mb-4">
                                        <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                            <input list="hosting-plan99" type="number" class="form-control"  v-model="mobile" required>
                                            <span class="floating-label">Mobile number</span>
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
                                        <button class="btun1" @click.prevent="next()">Next</button>
                                    </div>   
                                </div>
                                </div>

                                <div class="col-md-12 col-12 text-center justify-center" v-if="step === 2">
                                    <img src="../assets/multi2.png" alt="" width="70%" height="auto">
                                    <p class="text-center" style="font-size:20px; font-family:gilroyf; color:#4e44e8" >Step 2</p>      
                                    <div class="col-12 mb-4 text-center ">                
                                        <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                            <input list="hosting-plan8" type="text" class="form-control" v-model="know_two_wheeler" required>
                                            <span class="floating-label">Which 2-wheeler do you have?</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-12 mb-4">
                                        <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                                <input list="hosting-plan4" type="text" class="form-control" v-model="registration_no" required>
                                                <span class="floating-label">Vehicle Registration Number</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-12 mb-4">
                                        <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                                <input list="hosting-plan4" type="text" class="form-control" v-model="year_of_purchase" required>
                                                <span class="floating-label">Year of Purchase</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-12 row text-center" style="justify-content:center">
                                        <div class="col-md-5 col-6">
                                            <button class="btun1" @click.prevent="prev()">Previous</button>
                                        </div>
                                        <div class="col-md-4 col-6">
                                            <button class="btun1" @click.prevent="next()">Next</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 col-12 text-center justify-center" v-if="step === 3">
                                <img src="../assets/multi3.png" alt="" width="70%" height="auto">
                                <p class="text-center" style="font-size:20px; font-family:gilroyf; color:#4e44e8" >Step 3</p>
                                <div class="col-md-12 col-12 mb-4">
                                    <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                        <input list="hosting-plan4" type="text" class="form-control" v-model="city" required>
                                        <span class="floating-label">City</span>
                                    </div>
                                </div>
                                <div class="form col-12 m-0 p-3 px-4 row">
                                    <div class=" col-6 pr-3 mt-3 m-0 p-0">
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
                                <div class="col-md-6 col-6 p-0 pl-3 mt-3 m-0" >
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
                                
                            <div class="col-md-12 col-12 mt-5 row text-center" style="justify-content:center">
                                <div class="col-md-5 col-6">
                                    <button class="btun1" @click.prevent="prev()">Previous</button>
                                </div>
                                <div class="col-md-4 col-6">
                                    <button class="btun2" @click="submit">Submit</button>
                                </div>
                            </div>

                            </div>
                     
                            
                            <!-- <div class="col-md-12  text-center col-12 mb-4 " >
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                    <input 
                                    list="hosting-plan1" type="text" class="form-control" v-model="fullname" required>  
                                    <span class="floating-label">Name</span>
                                </div>
                            </div>
                            <div class="col-md-12 col-12 mb-4">
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                    <input list="hosting-plan2" type="text" class="form-control" placeholder="DD-MM-YYYY" v-model="dob" required>
                                    <span class="floating-label"></span>
                                </div>
                            </div>
                            <div class="col-md-12 col-12 mb-4">
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                    <input list="hosting-plan99" type="number" class="form-control"  v-model="mobile" required>
                                    <span class="floating-label">Mobile number</span>
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
                            <div class="col-12 mb-4 text-center ">                
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                    <input list="hosting-plan8" type="text" class="form-control" v-model="know_two_wheeler" required>
                                
                                    <span class="floating-label">Which 2-wheeler do you have?</span>
                                </div>
                            </div>
                            

                            <div class="col-md-12 col-12 mb-4">
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                        <input list="hosting-plan4" type="text" class="form-control" v-model="registration_no" required>
                                        <span class="floating-label">Vehicle Registration Number</span>
                                </div>
                            </div>
                            <div class="col-md-12 col-12 mb-4">
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                        <input list="hosting-plan4" type="text" class="form-control" v-model="year_of_purchase" required>
                                        <span class="floating-label">Year of Purchase</span>
                                </div>
                            </div>
                            <div class="col-md-12 col-12 mb-4">
                                <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                    <input list="hosting-plan4" type="text" class="form-control" v-model="city" required>
                                    <span class="floating-label">City</span>
                                </div>
                            </div>
                            <div class="form col-12 m-0 p-3 px-4 row">
                                <div class=" col-6 pr-3 mt-3 m-0 p-0">
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
                                <div class="col-md-6 col-6 p-0 pl-3 mt-3 m-0" >
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
                                
                            </div>-->
                       </div> 
                        <!-- <div class="text-center ml-5">
                            <div class="col-12 text-center xcv mt-3"  v-if="!success">
                                <button  type="button" class="btun  text-center" @click="submit" >Submit</button>
                                <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                            </div>
                        </div>   -->
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-12 m-0 p-0" style="background:#4E44D8; color:white;">
                <div class="col-md-9 col-10 text-left m-auto p-0 py-5 px-3" >
                    <h3 class="pb-3" style="font-family:gilroyf;">Features</h3>
                    <p>Upto 65% of Current Market value</p>
                    <p>Vehicles continues to be in your custody, ride freely</p>
                    <p>Direct Fund Transfer to Bank Account</p>
                    <p>Flexible Loan Tenure ranging from 9 months to 36 months</p>
                    <p>Quick Processing</p>
                    <p>Minimum Documentation</p>
                    <p>Financing vehicles upto 8 years old from the date of manufacturing</p>
                    <p>Assistance with RTO formalities wherever required</p>
                    <p>Multiple modes of Repayment - Direct Bank Debit, Online Banking & Payment Wallet</p>
                </div>
            </div>
            <div class="col-md-12 m-0 p-0" style="border-top:25px solid 	#ff4000; border-bottom:25px solid 	#ff4000;">
                <div class="col-md-9 col-10 text-left m-auto p-0 px-3 py-5" >
                    <h3 class="pb-3" style="font-family:gilroyf;">Loan Eligibility Criteria</h3>
                    <p>Salaried Professional & Self-Employed over the age of 18 years and below 65 years by the end of the tenure.</p>
                    <p>Employment Stability of at least 3 months in case of Salaried Professionals & 12 monthd in case of Self-Employed.</p>
                    <p>Original RC is mandatory</p>
                    <p>The Vehicle should be free from any loan</p>
                </div>
            </div>
   </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return{
            step:1,
                fullname:'',
                year_of_purchase:'',
                registration_no:'',
                dob:'',
                gender:'',
                pancard:'',
                aadhar_card:'',
                know_two_wheeler:'',
                city:'',
                mobile:'',
                loading:false,
                response:'',
                message:'',
                success:false,
                source: '',
                hasBeenSubmitted: false
                }
            },
         
    methods:{
        topFunction() {
            var elmnt = document.getElementById("form");
            elmnt.scrollIntoView();
            },
        close_resp(){
        if(this.success == true){
            this.success = false
        }else{
            this.success = false
        }
        },
        myFunction() {
            var x = window.document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
//         submit(){
//             this.loading = true
//        axios.post('https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry',{
//             name:this.name,
//             dob:this.dob,
//             gender:this.gender,
//             pancard:this.pancard,
//             aadhar_card:this.aadhar_card,
//             vehicle_name:this.vehicle_name,
//             mobile:this.mobile,
//             city:this.city
//         }).then(response=>{
//             this.hasBeenSubmitted = true;
//             this.response = response.body;
//             this.loading = false
             
//             this.$swal({
//               title:'Your request has been registered.',
//               text:'Our team will get in touch with you shortly.'
//               })
//             this.success = true
            
//             // this.$router.push(
//             //   {path:'/thankyou'
//             // })
//             }).catch(error => { 
//                 this.message = error.body.msg;
//                 this.loading= false
//             })   
//     }
//   },          
                prev(){
                    this.step--;
                },
                next() {
                    this.step++;
                },
                submit(){
                    this.loading = true
                    this.$http.post('https://backend-bikex.herokuapp.com/api/loan_against_vehicle',{
                        fullname:this.fullname,
                        dob:this.dob,
                        gender:this.gender,
                        pancard:this.pancard,
                        aadhar_card:this.aadhar_card,
                        know_two_wheeler:this.know_two_wheeler,
                        mobile:this.mobile,
                        city:this.city,
                        registration_no:this.registration_no,
                        year_of_purchase:this.year_of_purchase,

                        }).
            then(response=>{
            this.hasBeenSubmitted = true;
            this.response = response.body;
            this.loading = false
             
            this.$swal({
              title:'Your request has been registered.',
              text:'Our team will get in touch with you shortly.'
              })
            this.success = true
            this.$router.push(
              {path:'/thankyou'
            })
            }).catch(error => { 
                this.message = error.body.msg;
                this.loading= false
            })   
    }
  },
     computed:{
     error(){
         if(this.fullname ==""||this.mobile==""||this.know_two_wheeler==""||this.aadhar_card==""||this.pancard ==""||this.dob==""||this.gender==""||this.city==""||this.year_of_purchase==""||this.registration_no==""){
             return true
         }else{
             return false
         }
     }
 }
}
</script>

<style scoped>
.cvv{
 font-family: gilroy !important;
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
@media only screen and (max-width: 600px) {
    .wid{
        width:100% 
    }
    .top123{
        top:0 !important
    }
    .heig{
        height:280px !important
    }
    .wid{
        width:100% !important
    }
}
    .stepnumber{
    background: white;
    width: 30px;
    height: 27px;
    color: black;
    border-radius:50%;
    font-size: 16px;
    font-weight: 500;
}
.search{
    border-radius: 20px;
    background-color: #FFA405;
    color: #fff;
    height: 35px;
    line-height: 10px;
    font-weight: 700 !important;
    font-size: 14px;
    display: block;
    margin: 30px auto;
    margin-top: 20px;
    width: 200px;
    border:none;
    letter-spacing: 1px;

}
.font-pp{
    margin-top: 10px;
    font-size: 23px;
    font-weight: 700 !important;
    color: blue;
}
.font-p1{
    font-size: 14px;
    font-weight: 700 !important;
    color: blue; 
    padding-top: 5px !important;  
}


.font-h3{
    font-weight: 700 !important;
    font-size: 20px;
    margin: 10px 0;
}
.font-h31{
    font-weight: 700 !important;
    font-size: 20px;
    margin: 10px 0;
    color:#4E44D8
}
.features {
    border-left: 2px solid  #FFA405;
    padding: 0 30px;
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
.btun {

    height: 48px;
    padding: 0 .75rem;
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
  font-size:14px
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>