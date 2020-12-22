<template>
  <div class="purchase my-5 " style="min-height:400px">
    <div class="authentication" v-if="!authenticated">
      <div class="col-md-4 text-center" style="margin: 0 auto">
        <div class="col-md-12">
          <p style="color: red">{{ response_message }}</p>
          <label for="phone text-left" class="my-3 css">
            Enter Phone Number
            <input 
              placeholder="We don't share your phone number with anyone."
              type="text"
              class="form-control my-3"
              v-model="phone"
            />
          </label>
          <div v-if="otpSent">
            <p class="css">We have sent an OTP to your number.</p>
            <label for="phone text-left">
             
              <input
                placeholder="Enter Otp"
                type="text"
                class="form-control"
                v-model="otp"
              />
            </label>
          </div>
        </div>
        <div v-if="otpSent" class="mt-3">
          <button @click="verifyOtpandFetch" class="buton mr-2">Fetch Orders</button>
          <button :disabled="justSent" @click="resendotp" style="border:none">Resend OTP</button>
        </div>

        <button v-else @click="sendOtp" class="buton">Send OTP</button>
      </div>
    </div>
    <div class="history" v-else>
      <p v-if="loading">We are loading..</p>

      <div v-else>
        <div v-if="!loading && purchaseHistory.length > 0">
        
            <div
            class="card bord mb-3 p-3 col-md-9 text-left"
            style="margin:0 auto "
            v-for="(data, index) in purchaseHistory"
            :key="index"
          >
            <div class="col-md-12 col-12 m-0 p-0">
              
              <div class="row col-12  justify-content-between">
                <div class="col-md-4 mt-3 mb-3 col-12" >
                   <div class="card " style="width: 18rem;box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none; border-radius:50px;" >
                    <div class="col-md-12 m-0 p-0 py-3 text-center" style="background:rgb(78, 68, 216)">
                      <img class="rounded-circle" :src="data.superset_data.image" alt="Card image cap" width="40%" height="50%" style="background:white">
                      <p class="mt-3" style="color:white ">{{data.firstname}} {{data.lastname}}</p>
                    </div>
                    <div class="card-body">
                       <strong><p>My Information</p></strong>
                       <p><i class="fa fa-phone"></i> {{data.phone}}</p>
                       <p><i class="fa fa-envelope"></i> {{data.email}}</p>
                       <p><i class="fa fa-map-marker"></i> {{data.del_city}} - {{data.del_postalCode}}</p>
                      <p></p>
                    </div>
                    <div class="col-md-12 m-0 p-0 box" >
                      <img class="card-img-bottom" src="https://book.on-track.in/waves.d87b492bfbf4124ea857.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-md-8 col-12">
                  <p><strong>Order Details : </strong></p>
                  <div class="card p-3 mb-3" style="box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none; border-radius:14px;">
                    <p class="m-0 mb-2 p-0"><strong>Order ID: </strong>{{ data._id }}</p>
                    <p class="m-0 mb-2 p-0">
                    <strong>Payment ID: </strong>{{ data.razorpay_payment_id }}
                    </p>
                    <p class="m-0 p-0">
                    <strong>Date: </strong>{{ data.createdAt | moment("from", "now") }}
                  </p>
                  <p class="m-0 p-0">
                    <strong>Amount</strong>
                    {{  data.superset_data.price | currency}}
                  </p>
                  </div>
                  <p ><strong>Vehicle Details : </strong></p>
                  <div class="card p-3" style="box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none; border-radius:14px;">
                    <p class="m-0 p-0"><strong>Make/Model: </strong>{{ data.vehicle_details.model }}</p>
                    <p class="m-0 p-0">
                    <strong>color: </strong>{{ data.vehicle_details.variant }}
                    </p>
                     <p class="m-0 p-0">
                    <strong>Variant: </strong>{{ data.vehicle_details.color }}
                    </p>
                    
                  </div>
                   <p class="m-0 p-0 my-3"><strong>Fulfilled By : </strong></p>
                   <div class="card p-3" style="box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); border:none; border-radius:14px;">
                     <p class="m-0 p-0">
                    <strong>Name: </strong>{{ data.superset_data.dealer.name }}
                     </p>
                    <p class="m-0 p-0">
                    <strong>Email: </strong>{{ data.superset_data.dealer.email }}
                    </p>
                    <p class="m-0 p-0">
                    <strong>Phone Number: </strong>{{ data.superset_data.dealer.phone }}
                    </p>
                    <p class="m-0 p-0">
                    <strong>Address: </strong>{{ data.superset_data.dealer.address }} {{ data.superset_data.dealer.city }} - {{ data.superset_data.dealer.pincode }} </p>
<!--                     
                    <p class="m-0 p-0">
                    <strong>Amount</strong>
                    {{  data.superset_data.price | currency}}
                  </p> -->
                  </div>
                </div>
                </div>
                <!-- <div>
                    <button class="btn btn-primary">Acknowledgment Slip</button>
                </div> -->
              </div>
              
             
   
            <!-- <div class="rating my-3 col-md-12">
                <p><strong>How did we do?</strong></p>
                <button class="btn btn-danger mr-2">1</button>
                <button class="btn btn-danger mr-2">2</button>
                <button class="btn btn-danger mr-2">3</button>
                <button class="btn btn-success mr-2">4</button>
                <button class="btn btn-success mr-2">5</button>
                <div class="my-3">
                <textarea name="" id="" class="form-control" placeholder="Please provide your feedback" cols="10" rows="2"></textarea>
                <button class="mt-3 btn btn-primary">Submit your feedback</button>
                </div>
            </div> -->
          </div>
          
        </div>
       
        <div v-else>
          <p><strong>No purchase history</strong></p>
           <div>
             <img class="bnm" src="../assets/nodata.svg" alt="" width="50%" height="auto">
           </div>
          <button class="btn  mt-5" style="background:#4E44D8;color:white" @click="$router.push('/models')">Start Purchase</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
      otpSent: false,
      loading: false,
      response_message: "",
      phone: "",
      sendingOTP: false,
      otp: "",
      justSent: false,
      countDown: 10,
      purchaseHistory: [
        {
          payment_status: 1,
          booking_status: 1,
          add_ons: [],
          _id: "aWLdesnc5",
          firstname: "Samarth",
          lastname: "jain",
          email: "uniok569@gmail.com",
          phone: "9916148887",
          model_id: "JWSXKtsq7",
          superset_data: {
            dealer: {
              status: 1,
              _id: "9D1R28s4a",
              name: "Bimal Hero",
              email: "sales@bimalhero.com",
              phone: "9742202121",
              pincode: 560092,
              city: "Bengaluru",
              state: "Karnataka",
              address: "Site No 90, Bellary Rd, NH 7 Byatarayanapura",
              comment:
                "At Bimal, we believe that our relationship doesn’t end with getting you a new two wheeler. Its just the beginning of a long relationship which will need constant support and quality experience.\n\nBimal Auto Group is Bangalore’s favorite auto dealer serving customers throughout the city from its 25 locations, providing a comfortable and a superior experience.",
              __v: 0,
            },
            color: "Blue",
            id: "AeG2MTfyz",
            variant: "Cast Wheel",
            image:
              "https://bikex-image-bucket.s3.ap-south-1.amazonaws.com/Blue-min-1606307395701.png",
            price: 80272,
            model: "Hero Pleasure Plus",
          },
          amount: 82680,
          del_address: "VIJAYANAGAR",
          del_city: "Bengaluru",
          del_state: "karnataka",
          del_postalCode: "560072",
          rto_address: "VIJAYANAGAR",
          rto_city: "560072",
          rto_state: "karnataka",
          rto_postalCode: "560072",
          vehicle_details: {
            dealer: {
              status: 1,
              _id: "9D1R28s4a",
              name: "Bimal Hero",
              email: "sales@bimalhero.com",
              phone: "9742202121",
              pincode: 560092,
              city: "Bengaluru",
              state: "Karnataka",
              address: "Site No 90, Bellary Rd, NH 7 Byatarayanapura",
              comment:
                "At Bimal, we believe that our relationship doesn’t end with getting you a new two wheeler. Its just the beginning of a long relationship which will need constant support and quality experience.\n\nBimal Auto Group is Bangalore’s favorite auto dealer serving customers throughout the city from its 25 locations, providing a comfortable and a superior experience.",
              __v: 0,
            },
            color: "Blue",
            id: "AeG2MTfyz",
            variant: "Cast Wheel",
            image:
              "https://bikex-image-bucket.s3.ap-south-1.amazonaws.com/Blue-min-1606307395701.png",
            price: 80272,
            model: "Hero Pleasure Plus",
          },
          createdAt: "2020-12-03T06:33:18.264Z",
          updatedAt: "2020-12-03T06:33:45.299Z",
          __v: 0,
          comment: "No comment Yet",
          razorpay_order_id: null,
          razorpay_payment_id: "pay_G8TAMhXuajKAm6",
        },
      ],
    };
  },
  created() {},

  methods: {
    fetch() {
      this.loading = true;
      this.$http
        .post(
          "https://backend-bikex.herokuapp.com/api/otr_purchase/fetch-order-by-phone",
          {
            phone: this.phone,
          }
        )
        .then((response) => {
          this.purchaseHistory = response.data;
          window.console.log(response.data);
          this.loading = false;
        })
        .catch((error) => {
          this.response_message = error.body.msg;
          this.loading = false;
        });
    },

    sendOtp() {
      if (this.phone.length > 9) {
        this.sendingOTP = true;
        this.$http
          .post("https://backend-bikex.herokuapp.com/api/customers/sendotp", {
            phone: this.phone,
          })
          .then((response) => {
            if (response.body.type == "success") {
              this.sendingOTP = false;
              this.otpSent = true;
              this.justSent = true;
              setTimeout(() => {
                this.justSent = false;
              }, 10000);
            } else {
              this.response_message = "Some error occured plaease try again.";
            }
          })
          .catch((error) => {
            this.response_message = error.body.msg;
            this.sendingOTP = false;
          });
      } else {
        this.response_message = "Invalid Phone";
      }
    },
    resendotp() {
      this.$http
        .post("https://backend-bikex.herokuapp.com/api/customers/otp-retry", {
          phone: this.phone,
        })
        .then((response) => {
          if (response.body.type == "success") {
            this.response_message = "OTP re-send sucessfully.";
            setTimeout(() => {
              this.response_message = "";
            }, 2000);
          } else {
            this.response_message = "Some error occured plaease try again.";
          }
        })
        .catch((error) => {
          this.response_message = error.body.msg;
        });
    },
    verifyOtpandFetch() {
      this.loading = true;
      this.$http
        .post("https://backend-bikex.herokuapp.com/api/customers/verifyotp", {
          phone: this.phone,
          otp: this.otp,
        })
        .then((response) => {
          this.loading = false;
          // this.loading = false
          // this.otp_sent = true
          if (response.body == "OTP verified successfully") {
            this.authenticated = true;
            this.fetch();
          } else {
            this.response_message = "Please input valid OTP.";
          }
          window.console.log(response);
        })
        .catch((error) => {
          this.response_message = error.body.msg;
          this.loading = false;
        });
    },
  },
  computed: {
    count() {
      return this.countDown;
    },
  },
};
</script>

<style>
.box{
     
    background-repeat: no-repeat !important;
    background-position:  top;
    background-size: contain, contain;


}
::placeholder {
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}
.css {
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 600;
}
.buton {
  border: none;
  outline: none;
  padding: 10px;
  background: rgb(78, 68, 216);
  background: linear-gradient(
    90deg,
    rgba(78, 68, 216, 1) 18%,
    rgba(142, 68, 216, 1) 68%
  );
  color: white;
  border: none;
  font-size: 12px;
  letter-spacing: 2px;
  border-radius: 3px;
}
@media only screen and (max-width: 600px) {
  .bord{
    border:none !important
  }
  .bnm{
    width: 100%;
  }
}
</style>
