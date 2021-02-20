<template>
  <div class="col-md-12 m-0 mb-5 p-0" style="">
      <div class="col-md-12 row">
          <div class="col-md-8">

              <div class="col-md-12  text-left m-3 p-2 " style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                    <div class="col-md-12 mt-2 mb-5">
                        <h3 class="mb-2" style="font-family:gilroyf; color:#1976D2">My Order</h3>
                        <hr class="mb-5">
                        <div class="col-md-12 py-3 mb-3" style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                            <span><img src="../assets/number-one.png" alt="" class="widt" height="auto"><strong class="ml-3"> Customer</strong></span> 
                            <div class="form-row cvbb my-3" v-if="step==1">
    
                                <div class="form__group mb-3 col-md-6 col-12">
                                    <input type="text" v-model="first_name" class="form__input" id="name" placeholder="Full name" required="" />
                                    
                                </div>
                                <div class="form__group mb-3 col-md-6 col-12">  
                                    <input type="text" v-model="last_name" class="form__input" id="inputPassword4" placeholder="Last name">
                                   
                                </div>
                                <div class="form__group mb-3 col-md-6 col-12">
                                    
                                    <input type="number" v-model="phone_number" placeholder="Pincode" class="form__input" id="inputZip">
                                    
                                </div>
                                <div class="form__group mb-3   col-md-6 col-12">
                                    
                                    <input type="email" v-model="email"  class="form__input" placeholder="Email Address" >
                                    
                                </div>
                                <div class="col-md-4  ml-2 p-2 text-center" style="background:#4e44e8">
                                    <button @click="next" style="background:#4e44e8;color:white;border:none">Next</button>
                                </div>
                                
                            </div>
                            
                        </div>
              
                        <div class="col-md-12 py-3 mb-3" style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                            <span><img src="../assets/number-2.png" alt="" class="widt"  height="auto"> <strong class="ml-3"> Shipping</strong></span>
                            
                            <div class="form-row my-3 cvbb" v-if="step==2">
                                <div class="form__group col-md-6 mb-3  col-12">    
                                    <input type="text" v-model="street_address"  class="form__input" placeholder="Street Address">
                                    
                                </div>
                                <div class="form__group col-md-6 mb-3  col-12">                                   
                                    <input type="text" v-model="city"  class="form__input" id="inputZip" placeholder="City/Town">
                                </div>
                                <div class="form__group  col-md-6 mb-3   col-12">
                                    <input type="text" v-model="state"  class="form__input" id="inputZip" placeholder="State">
                                </div>
                                <div class="form__group  col-md-6 mb-3  col-12">    
                                    <input type="number" v-model="post_code"  class="form__input" id="inputZip" placeholder="Pincode">
                                </div>
                                <div class="col-md-4 p-2 text-center" style="background:#4e44e8">
                                    <button @click="next" style="background:#4e44e8;color:white;border:none">Next</button>
                                </div>
                            </div>  
                               
                        </div>
                   
                        <div class="col-md-12 py-3" style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                            <span><img src="../assets/number-3.png" alt="" class="widt"  height="auto"> <strong class="ml-3"> RTO</strong></span>
                            <div class="form-row my-3 cvbb" v-if="step==3">
                                <div class="col-md-12 my-2">
                                    <label for="" class="labe" >
                                        <input type="checkbox" v-model="rtoSameAsDelivery">
                                        RTO Address Same As Delivery Address
                                    </label>
                                </div>
                                <div class="form__group col-md-6 mb-3   col-12">                                  
                                    <input type="text" v-model="rto_street_address"  class="form__input" id="inputZip" placeholder="Street Address">
                                </div>
                                <div class="form__group col-md-6 mb-3  col-12">
                                    <input type="text" v-model="rto_city"  class="form__input" id="inputZip" placeholder="City/Town">
                                </div>
                                <div class="form__group  col-md-6 mb-3 col-12">
                                    <input type="text" v-model="rto_state"  class="form__input" id="inputZip" placeholder="State">
                                </div>
                                <div class="form__group  col-md-6 mb-3  col-12">                                   
                                    <input type="number" v-model="rto_post_code"  class="form__input" id="inputZip" placeholder="Pincode">
                                </div>
                               
                            </div>
                            
                        </div>
      
        
                    </div>
              </div>
          </div>
          <div class="col-md-4 " >
                <div class="col-md-12 m-3 p-3 " style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                    <h1 class="font2  text-left" style=""> Order Details</h1>
                    <div class="col-md-12">
                        <img :src="cartdata[0].selectedItem.image"
                        alt=""
                        width="80%">
                    </div>
                    <table class="table table-bordered" style="box-shadow: 0 1px 12px rgba(51,51,51,.12941)!important; border-radius:10px">
                        <thead>
                            <tr class="text-left">
                            <th scope="col">Product</th>
                            <th scope="col">Total</th>
                        
                            </tr>
                        </thead>
                        <tbody class="text-left" >
                            <tr >
                                <th scope="row">{{cartdata[0].make_model}}  {{cartdata[0].variant}}  
                                </th>
                                <td>{{checkOutPrice - convenienceAmount | currency}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <span v-if="booking_type"> Convenience Charge (3%) </span>
                                <span v-else>(Booking Charge)</span>
                                </th>
                                <td>{{convenienceAmount | currency}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <span v-if="booking_type"> Total</span>
                                <span v-else>(Booking Charge)</span>
                                </th>
                                <td>{{checkOutPrice | currency}}</td>
                            </tr>
                            <!-- <tr>
                                <th scope="row">Subtotal</th>
                                <td>₹ {{cartdata.price}}</td>
                            </tr> -->
                            <!-- 
                            <tr>
                                <th scope="row">Total</th>
                                <td>₹ {{cartdata.price}}</td>
                            </tr> -->
                        </tbody>
                    </table>
                    <p style="color:red; font-size:12px" class="mb-3" v-if="!valid"> * Please fill all the fields.</p>
                    <div class="col-md-12  text-center" @click="placeOrder" :disabled="!valid"  style="cursor:pointer;border:none; background:#4CAF50;border-color: #4caf50 !important;box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%); color:white;font-weight:500;letter-spacing:1px">
                        <span><i class="fa fa-shopping-cart" aria-hidden="true" style="font-size:21px"></i></span>
                        <button class="px-3 py-2 "  style="color:white;background:#4CAF50;border:none;font-size:18px; letter-spacing:1px"  ><strong>Place Order</strong></button>
                    </div>
                </div>
                    
          </div>
      </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    data(){
        return{
            superset:'',
            superdata:[],
            first_name:'',
            last_name:'',
            phone_number:'',
            email:'',
            otr_order_id:'',
            razorpay_order_id:'',
            street_address:'',
            post_code:'',
            city:'',
            state:'',
            rto_street_address:'',
            rto_post_code:'',
            rto_city:'',
            rto_state:'',
            rtoSameAsDelivery :false,
            message:'',
            booking_type:[],
            step:1
        }
    },
 

    methods: {
        next(){
            this.step++
        },
        prev(){
           this.step-- 
        },
        rtoSameAsDeliveryTrigger(){
            if(this.rtoSameAsDelivery){
                this.rto_street_address = this.street_address,
                this.rto_post_code = this.post_code,
                this.rto_city = this.city,
                this.rto_state =this.state

            }else{
                this.rto_street_address = '',
                this.rto_post_code = '',
                this.rto_city = '',
                this.rto_state = ''
            }
        },
        
        goto() {
            this.$router.push('/checkout')
        },
        updatedatabase(res){
            window.console.log(res)
            
            axios.put('https://backend-bikex.herokuapp.com/api/otr_purchase/confirmOrder/'+ this.otr_order_id , {
                razorpay_order_id: this.razorpay_order_id,
                razorpay_payment_id: res.razorpay_payment_id,
                payment_status:1,
                booking_status:1,
                comment:'No comment Yet'
            },
                        {
                        headers: { 'Authorization': 'YwMiRtYxQpVcMsVy1w3Z9==' }
                        }).
            then(()=> {
                this.$router.push('/success/' + this.otr_order_id)
            })
            .catch(x=>{
                window.console.log(x.response.data.msg)
                this.$bvToast.toast(`Some error Occured.`, {
                    title: 'Error',
                    autoHideDelay: 5000,
                })
            })
        },
        placeOrder(){
            axios.post('https://backend-bikex.herokuapp.com/api/otr_purchase/generateOrder' , {
                firstname: this.first_name,
                lastname: this.last_name,
                phone:this.phone_number,
                email:this.email,
                payment_status:0,
                booking_status:0,
                del_address:this.street_address,
                del_postalCode:this.post_code,
                del_city:this.city,
                del_state:this.state,
                rto_address:this.rto_street_address,
                rto_postalCode:this.rto_post_code,
                rto_city:this.rto_city,
                rto_state:this.rto_state,
                model_id: this.cartdata[0]._id,
                superset_data: this.cartdata[0].selectedItem,
                add_ons:this.cartdata[0].addons,
                vehicle_details: this.cartdata[0].selectedItem,
                amount: this.checkOutPrice
            },
            {
             headers: { 'Authorization': 'YwMiRtYxQpVcMsVy1w3Z9==' }
            }).
            then(response=> {
                window.console.log(response.data)
                this.otr_order_id = response.data._id
                this.makepayment(response.data._id)
                window.console.log('1st')
            })
            .catch(x=>{
                window.console.log(x.response)
                this.$bvToast.toast(x.response, {
                    title: 'Error',
                    autoHideDelay: 5000,
                })
            })  
            //   .catch(error => { 
            //     this.message = error;
            //     this.loading= false
            // }) 
        },
       makepayment(id){
            this.loading=true
            window.console.log('2nd')
            var options = {
                            "key": "rzp_live_kNjIpPzSMA4gHS", // rzp_live_Vi238TQEagSN3x Enter the Key ID generated from the Dashboard
                            // "key":"rzp_live_Vi238TQEagSN3x",
                            "amount": this.checkOutPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
                            "currency": "INR",
                            "name": this.cartdata[0].make_model ,
                            "email":this.email,
                            "phone":this.phone_number,
                            "order_id":id,
                            "description": "Purchase " + this.cartdata[0].make_model,
                            "payment_capture":1,    
                            "handler": ((res)=>{
                                 this.updatedatabase(res)
                            }),
                            "notes": {
                                "address": "note value",
                                "vehicle_id":this.cartdata[0]._id,
                                "superset_id": this.cartdata[0].selectedItem.id
                            },
                            "theme": { 
                                "color": "#ffb52f"
                            }
                        };
                        this.$http.post('https://backend-bikex.herokuapp.com/api/rzp/createOrder',{
                            "amount":this.checkOutPrice * 100,
                            "currency":"INR",
                            "payment_capture":1
                        },
                        {
                        headers: { 'Authorization': 'YwMiRtYxQpVcMsVy1w3Z9==' }
                        }).then((res)=>{
                            window.console.log(res)
                            this.razorpay_order_id = res.id
                            var rzp1 = new window.Razorpay({...options,order_id:res.order_id}); 
                            rzp1.open()
                            }).catch((err)=>{
                                window.console.log(err)
                            })
        },
        fetchDetail(){
            this.$store.dispatch('getModelsWithoutDealer',{"id":this.$route.params.id})
        }
    },
created(){
    this.fetchDetail()
    this.superset = this.$route.params.value
    if(this.$route.query){
    this.booking_type = this.$route.query
    }
     
     window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
},
watch:{
    cartdata(){
       this.superdata = 
        this.cartdata.superset.filter(x=>{
        return x.id == this.superset

        })
    },
     rtoSameAsDelivery(){
            this.rtoSameAsDeliveryTrigger()
        }
},
computed:{
    // cartdata(){
    //     return this.$store.state.getModelsWithoutDealer
    // },
    totalPrice(){
        var addonsPrice = 0
        if(this.cartdata[0].addons.length > 0){
            for(var i in this.cartdata[0].addons){
                addonsPrice = addonsPrice + Number(this.cartdata[0].addons[i].price)
            }
        }
        return Number(this.cartdata[0].selectedItem.price) + Number(addonsPrice)
    },
    convenienceAmount(){
        if(this.booking_type.booking_type == 'Book bike at rupees Rs. 1000'){
        return 0
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 20000'){
        return 0
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 30000'){
        return 0
      }else{
        return  Math.round(0.03*this.totalPrice)
      }
       
    },
    checkOutPrice(){
        if(this.booking_type.booking_type == 'Book bike at rupees Rs. 1000'){
        return Number(1000)
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 20000'){
        return Number(20000)
      }
      else if(this.booking_type.booking_type == 'book bike at rupees Rs. 30000'){
        return Number(30000)
      }else{
        return Number(this.totalPrice) + Number(this.convenienceAmount)
      }
       
    },
    valid(){
        if(this.first_name && this.last_name && this.phone_number && this.email){
            return true
        }else{
            return false
        }
    },
    cartdata() {
      return JSON.parse(localStorage.getItem('cart'))
    },
}

}
</script>


<style scoped>
.widt{
    width:4%
}
.cvbb{
    margin-left:50px
}
.form__label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
}

.form__input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 14px;
  padding: 0.6rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
    border: 0.1px solid grey;
  width: 100%;
  display: block;

  transition: all 0.3s;
}

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
  font-size: 10px;
}
a{
    color:#4E44D8 !important
}
.button:disabled{
    opacity: 0.2 !important;
}
 @font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
 }
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
.font2{
    font-size: 18px;
    font-weight: bold;
    font-family: Gilroyf;
    color: #484848;
  }
  p{
      margin:0;
      padding: 0;
  }
@media all and (max-width:600px){
 .ghj{
     text-align:center !important
 }
 .cvbb{
    margin-left:10px !important
}
.labe{
    font-size:12px;
    color:grey
}
 .vbnm{
     padding-top: 25px;
 }
 .bnm{
     font-size:14px
 }
 .font3{
         font-size: 14px;
    color: black;
    font-weight: 500;
 }
 .cvb{
     padding-left: 0  !important;
 }
 .widt{
    width:15%
}
}
</style>