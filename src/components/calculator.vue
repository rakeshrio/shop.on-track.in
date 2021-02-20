<template>
  <div class="col-md-12 row my-5 m-0 p-0">
    <div class="col-md-6 m-0 p-0 mt-3">
      <graph-pie
        :width="500"
        :height="500"
        :padding-top="120"
        :padding-right="120"
        :padding-bottom="120"
        :padding-left="120"
        :values="values"
        :names="names"
        :active-index="[ 0, 2 ]"
        :active-event="'click'"
        :show-text-type="'outside'"
        :data-format="5000"
        :shape="'donut'"
        
      >
        <note :text="'EMI V/S LOAN'"></note>
        <legends :names="names"></legends>
        <tooltip :names="names"></tooltip>
      </graph-pie>
    </div>
    <div class="col-md-6 pt-5 m-0 col-12 p-0" style=" font-family:gilroy">
      <div
        class="col-md-12 col-12 card p-5 m-auto feature-block"
        style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      >
        <div class="col-md-12 col-12 mx-0 px-0 mb-3" style>
          <!-- <h5 class="mb-4" style="font-family:gilroyf">Calculate EMI - Bengaluru</h5> -->
          <div class="col-md-12 m-0 py-3 p-0">
            <h5 class="pb-0 mb-2" style="font-family:gilroyf; color:#4e44d8">EMI {{emi}}/Month</h5>
            <p class="pb-0 mb-2" style="font-size:12px">for 2 Years @14 %* interest rate</p>
            <p
              class="pb-0 mb-5"
              style="font-size:12px"
            >*Interest rate may vary subject to your credit score.</p>
          </div>
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font1">Your Model</p>
            <div class="col-md-6 font-sm text-right col-7 mr-0 pr-0">
              <select v-model="model_price" class="select py-1">
                <option
                  v-for="(data, index) in vehicles"
                  :key="index"
                  :value="data.price"
                >{{data.name}}</option>
              </select>
            </div>
          </div>
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">On Road Price</p>
            <p class="font1">₹ {{model_price}}</p>
          </div>
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">After Break-Down</p>
            <p class="font1">₹ {{ aftercut }}</p>
          </div>
          <hr />
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">Down-Payment</p>
            <p class="font1">₹ {{loan}}</p>
          </div>
          <input
            type="range"
            min="5000"
            step="1000"
            v-model="loan"
            max="20000"
            class="slider"
            id="myRange"
          />
          <div class="col-md-12 col-12 mt-2 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">₹ 5000</p>
            <p class="font-sm">₹ 20000</p>
          </div>
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">Tenure Range (in months)</p>
            <p class="font-sm">24 Months</p>
          </div>
          <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
            <p class="font-sm">Lock in period</p>
            <p class="font-sm">24 Months</p>
          </div>
          <div class="col-md-12 col-12 d-flex px-0 mx-0" style>
            <div class="col-md-4 text-left px-0">
              <p class="font-sm">At the end of term</p>
            </div>
            <div class="col-md-8 font-sm text-right mx-0 px-0">
              <p class="mb-0 pb-0">Retain the vehicle by paying remaining amount</p>
              <p class="mb-0 pb-0">OR</p>
              <p>Return the vehicle with zero cost</p>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
          <p class="font-sm">Down-Payment Amount</p>
          <p class="font-sm">₹ {{ loan }}</p>
        </div>
        <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
          <p class="font-sm">Loan Amount</p>
          <p class="font-sm">₹ {{loanAmt}}</p>
        </div>
        <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
          <p class="font-sm">Interest</p>
          <p class="font-sm">14%</p>
        </div>
        <div class="col-md-12 col-12 font1 d-flex m-0 p-0" style="justify-content:space-between">
          <p class="font-sm">Monthly Payable</p>
          <p class="font-sm">EMI ₹ {{emi}}/Month</p>
        </div>
        <hr />
        <div class="col-md-12 col-12 d-flex m-0 p-0" style="justify-content:space-between">
          <p
            class="mb-0 col-md-9 mx-0 px-0 text-left"
            style="font-size:12px"
          >Documentation, hypothecation & processing charges, etc. (approx)</p>
          <p class="col-md-3 text-right mx-0 px-0 font-sm">₹ {{fee}}</p>
        </div>
        <div class="col-12 m-0 p-0 my-1 mt-3">
          <div class="col-12 row m-0 p-0" style="justify-content:space-between">
            <div class="text-left m-0 p-0">
              <p class="mb-0 pb-0 font1">Features</p>
            </div>
            <!--  -->
            <div class="font1 m-0 p-0 text-center" v-on:click="close=!close" style="cursor:pointer">
              <span v-if="close">-</span>
              <span v-else>+</span>
            </div>
          </div>
          <div v-if="close" class="m-0 p-0 text-left text-bold" style="font-size:14px;">
            <p class="mb-0 pb-0 font-sm">- Processing Fee 3%</p>
            <p class="mb-0 pb-0 font-sm">- Documentation Charge (Rs.500)</p>
          </div>
        </div>
        <div class="col-12 m-0 p-0 my-1 mt-3">
          <div class="col-12 row m-0 p-0" style="justify-content:space-between">
            <div class="text-left m-0 p-0">
              <p class="mb-0 pb-0 font1">Documents Required</p>
            </div>
            <!--  -->
            <div
              class="m-0 p-0 font1 text-center"
              v-on:click="close1=!close1"
              style="cursor:pointer"
            >
              <span v-if="close1">-</span>
              <span v-else>+</span>
            </div>
          </div>
          <div v-if="close1" class="m-0 p-0 font-sm text-left text-bold" style="font-size:14px;">
            <p class="mb-0 pb-0">- PAN Card</p>
            <p class="mb-0 pb-0">- Aadhar Card</p>
            <p class="mb-0 pb-0">- Voter's ID</p>
            <p class="mb-0 pb-0">- Driver's Licence</p>
            <p class="mb-0 pb-0">- Passport (optional)</p>
          </div>
        </div>
        <div class="col-12 m-0 p-0 my-1 mt-3">
          <div class="col-12 row m-0 p-0" style="justify-content:space-between">
            <div class="text-left m-0 p-0">
              <p class="mb-0 pb-0 font1">Eligibility</p>
            </div>
            <!--  -->
            <div
              class="font1 m-0 p-0 text-center"
              v-on:click="close2=!close2"
              style="cursor:pointer"
            >
              <span v-if="close2">-</span>
              <span v-else>+</span>
            </div>
          </div>
          <div v-if="close2" class="m-0 p-0 text-left text-bold" style="font-size:14px;">
            <p class="mb-0 pb-0 font-sm">- Should be atleast 21 years</p>
          </div>
        </div>

        <!-- <div class="col-md-12 d-flex px-0 mx-0" style="text-align:end">
            <p style="top:25px">Powered by  </p>
            <p><img src="https://autovert.s3.ap-south-1.amazonaws.com/common-files/ZjO1NrTBBus98ftH3JYvKfV8DTsJahRvjsPxnwN6.png" width="15%" ></p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        names: [ 'On Road', 'After Interest', 'After-Breakdown'],
      vehicles: [
        {
          name: "Honda Activa 6g",
          price: 84416,
        },
        {
          name: "Hero Maestro Edge",
          price: 78879,
        },
        {
          name: "Honda Dio",
          price: 82803,
        },
      ],
      breakdownprice: 0,
      model_price: 84416,
      loan: 8441,
      x: 0,
      close: false,
      close1: false,
      close2: false,
    };
  },
  methods:{
       
  },
  computed: {
    onroadPrice(){
        return this.model_price
    },
    downpayment() {
      var x = this.model_price * 0.4;
      return Math.floor(x);
    },
    minpayment() {
      var y = this.model_price * 0.1;
      return Math.floor(y);
    },
    emi() {
      var i = Math.pow(1 + 0.14 / 12, 24);
      var payment =
        ((this.aftercut - this.loan) * (0.14 / 12) * i) / (i - 1) || 2612;
      return Math.floor(payment);
    },
    loanAmt() {
      var z = this.aftercut - this.loan;
      return z;
    },
    aftercut() {
      var breakdownprice = this.model_price / 2;
      return Math.floor(breakdownprice);
    },
    fee() {
      var ra = this.model_price * 0.03 + 500;
      return Math.floor(ra);
    },
    values() {
      return [ this.onroadPrice, (this.emi * 24)+this.aftercut , this.aftercut]
    },
  },
};
</script>

<style>
.feature-block::-webkit-scrollbar {
  width: 5px;
}
.feature-block::-webkit-scrollbar-thumb {
  background: #4e44d8;
}
.feature-block::-webkit-scrollbar-track {
  background: white;
}
.feature-block {
  overflow-y: auto;

  max-height: 600px;

  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
input[type="range"] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;

  background: #4e44d8;
  border-radius: 1.3px;
}
input[type="range"]::-webkit-slider-thumb {
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #4e44d8;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type="range"]::-moz-range-thumb {
  background: url(https://www.axisbank.com/images/default-source/revamp_new/retail_new/car.png);
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type="range"]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type="range"]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #367ebd;
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
.font1 {
  font-family: gilroyf;
  font-size: 0.875rem;
}
.font-sm {
  color: #6a6a6a !important;
  font-size: 14px;
}
</style>