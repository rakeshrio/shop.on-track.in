<template>
  <div class="col-md-12 col-12 m-0 p-0">
    <div class="col-md-12 p-0 mobile">
      <buyback2mobile></buyback2mobile>
    </div>
    <!-- lap -->
    <div class="col-md-12 m-0 p-0 lap">
      <div class="col-md-12 m-0 p-0" style="background: #4e44e8; height:750px">
        <div class="col-md-12 pl-0 m-auto">
          <div class="col-md-12 pl-0 ml-0 row" style="top:100px">
            <div class="col-md-8 col-12 pl-0 ml-0">
              <img src="../assets/Random.png" alt width="auto" height="550px" />
            </div>
            <div
              class="col-md-3 col-12 container1 p-4"
              style="background:white !important; border-radius:25px; box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); width:350px "
            >
              <p>
                <strong
                  style="font-size:20px; font-family:gilroyf"
                >Tell us a bit about yourself, and we’ll tell you a lot more about this scheme.</strong>
              </p>
              <div v-if="step == 5" style="top:50px !">
                <h3 class="mt-5">
                  <strong>Thanks for filling this lovely form</strong>
                </h3>
                <h6 class="mt-5">Your request has been registered.</h6>
                <h6>Our team will get in touch with you shortly.</h6>
                <img
                  class="mt-5"
                  src="https://www.flaticon.com/svg/static/icons/svg/3587/3587986.svg"
                  alt
                  width="30%"
                />
              </div>

              <div v-else class="form row pt-3">
                <div class="col-md-12 m-0 p-0" v-if="step==1">
                  <img src="../assets/buyback2/step1.png" alt width="70%" height="auto" />
                  <div class="text-center col-12 mb-4">
                    <div
                      class="col-12 col-md-12 text-center"
                      style="box-shadow: 2px 2px 12px #55555530;"
                    >
                      <input
                        list="hosting-plan1"
                        type="text"
                        class="form-control"
                        v-model="name"
                        required
                      />
                      <span class="floating-label">Full Name</span>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="col-12 text-center" style="box-shadow: 2px 2px 12px #55555530;">
                      <input
                        list="hosting-plan2"
                        type="date"
                        class="form-control"
                        placeholder
                        v-model="dob"
                        required
                      />
                      <span class="floating-label">DOB (DD-MM-YYYY)</span>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="col-12 text-center" style="box-shadow: 2px 2px 12px #55555530;">
                      <input
                        list="hosting-plan99"
                        type="text"
                        class="form-control"
                        v-model="mobile"
                        maxlength="10"
                        minlength="10"
                        required
                      />
                      <span class="floating-label">Mobile Number</span>
                    </div>
                  </div>
                  <div class="col-12 mb-4 text-center">
                    <div class="col-12 text-center" style="box-shadow: 2px 2px 12px #55555530;">
                      <select class="form-control" id="exampleFormControlSelect1" v-model="gender">
                        <option disabled value>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="col-12 text-center" style="box-shadow: 2px 2px 12px #55555530;">
                      <select class="form-control" id="exampleFormControlSelect1" v-model="city">
                        <option disabled value>Select City</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderbabad</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 mb-4 text-center">
                    <div class="col-12 text-center" style="box-shadow: 2px 2px 12px #55555530;">
                      <!-- <input list="hosting-plan8" type="text" class="form-control" v-model="vehicle_name" required>
                                <datalist id="hosting-plan8">
                                    <option value="Honda Dio"></option>
                                    <option value="Honda Activa"></option>
                                    <option value="TVS Jupiter"></option>  
                                </datalist>
                      <span class="floating-label">Select Vehicle</span>-->
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        v-model="vehicle_name"
                      >
                        <option disabled value>Select Vehicle</option>
                        <option value="Honda Dio">Honda Dio</option>
                        <option value="Honda Activa">Honda Activa</option>
                        <option value="TVS Jupiter">TVS Jupiter</option>
                      </select>
                    </div>
                  </div>
                  <!-- <div class="form col-12 m-0 p-3 px-4 row">
                    <div class="col-6 pr-3 mt-3 m-0 p-0">
                      <p class>
                        <strong style="color:grey">Aadhar Card</strong>
                      </p>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="aadhar_card"
                            value="yes"
                            class="form-check-input"
                            name="optradio1"
                          />Yes
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="aadhar_card"
                            value="no"
                            class="form-check-input"
                            name="optradio1"
                          />No
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 col-6 p-0 pl-3 mt-3 m-0">
                      <p class>
                        <strong style="color:grey">PAN Card</strong>
                      </p>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="pancard"
                            class="form-check-input"
                            value="yes"
                            name="optradio"
                          /> Yes
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            v-model="pancard"
                            class="form-check-input"
                            value="no"
                            name="optradio"
                          /> No
                        </label>
                      </div>
                    </div>
                  </div>-->
                  <div class="col-md-12 text-center">
                    <p class="text-center pb-1" style="color:red" v-if="message">{{message}}</p>
                  </div>
                  <!-- <div class="text-center ml-5">
                    <div class="col-12 text-center xcv mt-3" @click="submit()">
                      <button type="button" class="btun1 text-center">next</button>
                      
                    </div>
                  </div>-->
                  <div class="col-md-12 col-12 row text-center" style="justify-content:center">
                    <div class="col-md-6 col-6">
                      <button class="btun2" @click.prevent="submit()">
                         <span v-if="loading">Loading...</span>
                          <span v-else>Next</span>
                      </button>
                      <!-- <span v-if="loading" class="spinner-border spinner-border-sm"></span> -->
                    </div>
                  </div>
                </div>
                <div class="col-md-12 m-0 p-3" v-if="step==2">
                  <img src="../assets/buyback2/step2.png" alt width="70%" height="auto" />
                  <p style="font-family:gilroyf">Please upload your Aadhar card.</p>
                  <div class="row col-md-12 m-0 p-0">
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >Aadhar card front</p>
                      <div id="preview1 col-12" v-if="preview_image1">
                        <img :src="preview_image1" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove1()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <div v-else>
                        <input
                          id="fileInput"
                          type="file"
                          style="display:none"
                          v-on:change="onChangeAadharFront()"
                        />
                        <img
                          onclick="document.getElementById('fileInput').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/1.png"
                          alt
                        />
                        <!-- <button id="fileInputButton" onclick="document.getElementById('fileInput').click()">Aadhar Front</button> -->
                      </div>
                      <!-- <input id="xasx"  v-if="!preview_image1" type="file" @change="onChangeAadharFront" > -->
                    </div>
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >Aadhar back</p>
                      <div id="preview2 col-12" v-if="preview_image2">
                        <img :src="preview_image2" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove2()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <!-- <input v-if="!preview_image2" type="file" @change="onChangeAadharBack" class="form-control"> -->
                      <div v-else>
                        <input
                          id="aadharBack"
                          type="file"
                          style="display:none"
                          v-on:change="onChangeAadharBack()"
                        />
                        <img
                          onclick="document.getElementById('aadharBack').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/2.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <!-- <button class="btn _2iiQB _3qpfi text-center mt-3" @click="uploadDocuments()">Next</button> -->
                  <div class="col-md-12 col-12 mt-5 row text-center" style="justify-content:center">
                    <!-- <div class="col-md-6 col-6">
                      <button class="btun1" @click.prevent="prev()">Previous</button>
                    </div>-->
                    <div class="col-md-6 col-6">
                      <button class="btun2" @click="uploadDocuments()">Next</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 m-0 p-3" v-if="step==3">
                  <img src="../assets/buyback2/step3.png" alt width="70%" height="auto" />
                  <p class style="font-family:gilroyf">Please upload your scanned Driving License.</p>
                  <div class="row col-md-12 m-0 p-0">
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >Driving license front</p>
                      <div id="preview1 col-12" v-if="preview_image3">
                        <img :src="preview_image3" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove3()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <div v-else>
                        <input
                          id="dl_front"
                          type="file"
                          style="display:none"
                          v-on:change="onChangeDlFront()"
                        />
                        <img
                          onclick="document.getElementById('dl_front').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/3.png"
                          alt
                        />
                        <!-- <button id="fileInputButton" onclick="document.getElementById('fileInput').click()">Aadhar Front</button> -->
                      </div>
                      <!-- <input id="xasx"  v-if="!preview_image1" type="file" @change="onChangeAadharFront" > -->
                    </div>
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >Driving license back</p>
                      <div id="preview2 col-12" v-if="preview_image4">
                        <img :src="preview_image4" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove4()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <!-- <input v-if="!preview_image2" type="file" @change="onChangeAadharBack" class="form-control"> -->
                      <div v-else>
                        <input
                          id="dl_back"
                          type="file"
                          style="display:none"
                          v-on:change="onChangeDlBack()"
                        />
                        <img
                          onclick="document.getElementById('dl_back').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/4.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <!-- <button class="btn _2iiQB _3qpfi text-center mt-3" @click="uploadDocuments()">Next</button> -->
                  <div class="col-md-12 col-12 mt-5 row text-center" style="justify-content:center">
                    <div class="col-md-6 col-6">
                      <button class="btun1" @click.prevent="prev()">Previous</button>
                    </div>
                    <div class="col-md-6 col-6">
                      <button class="btun2" @click="uploadDocuments()">Next</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 m-0 p-3" v-if="step==4">
                  <img src="../assets/buyback2/step4.png" alt width="70%" height="auto" />
                  <p style="font-family:gilroyf">Please upload your scanned PAN Card front.</p>
                  <div class="row col-md-12 m-0 p-0">
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >PAN card front</p>
                      <div id="preview5 col-12" v-if="preview_image5">
                        <img :src="preview_image5" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove5()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <div v-else>
                        <input
                          id="pan_front"
                          type="file"
                          style="display:none"
                          v-on:change="onChangePanFront()"
                        />
                        <img
                          onclick="document.getElementById('pan_front').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/5.png"
                          alt
                        />
                        <!-- <button id="fileInputButton" onclick="document.getElementById('fileInput').click()">Aadhar Front</button> -->
                      </div>
                      <!-- <input id="xasx"  v-if="!preview_image1" type="file" @change="onChangeAadharFront" > -->
                    </div>
                    <div class="col-md-6 col-12">
                      <p
                        class="m-0 p-0 labels pb-2"
                        style="font-family:gilroy;font-size:12px"
                      >PAN card back</p>
                      <div id="preview6 col-12" v-if="preview_image6">
                        <img :src="preview_image6" width="100%" />
                        <p
                          class="pt-2"
                          @click="remove6()"
                          style="font-size:12px;font-family:gilroyf;cursor:pointer"
                        >Not this?</p>
                      </div>
                      <!-- <input v-if="!preview_image2" type="file" @change="onChangeAadharBack" class="form-control"> -->
                      <div v-else>
                        <input
                          id="pan_back"
                          type="file"
                          style="display:none"
                          v-on:change="onChangePanBack()"
                        />
                        <img
                          onclick="document.getElementById('pan_back').click()"
                          style="cursor:pointer"
                          width="100%"
                          src="../assets/buyback2/6.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <!-- <button class="btn _2iiQB _3qpfi text-center mt-5" @click="uploadDocuments()">Submit</button> -->
                  <div class="col-md-12 col-12 mt-5 row text-center" style="justify-content:center">
                    <div class="col-md-6 col-6">
                      <button class="btun1" @click.prevent="prev()">Previous</button>
                    </div>
                    <div class="col-md-6 col-6">
                      <button class="btun2" @click="uploadDocuments()">Submit</button>
                    </div>
                  </div>
                </div>

                <!-- <div class="col-md-12 m-0 p-3" v-if="step==3">
                  <p class>Driving License</p>
                  <div class="col-md-12 col-6">
                            <p class="m-0 p-0 labels">DL front</p>
                            <div id="preview3 col-12" v-if="preview_image3">
                                <img :src="preview_image3" width="100%" />
                                <p class="pt-2" @click="remove3()">Not this?</p>
                            </div>
                            <input v-if="!preview_image3" type="file" @change="onChangeDlFront" class="form-control">
                  </div>
                  <div class="col-md-12 col-6">
                            <p class="m-0 p-0 labels">DL back</p>
                            <div id="preview4 col-12" v-if="preview_image4">
                                <img :src="preview_image4" width="100%" />
                                <p class="pt-2"  @click="remove4()" >Not this?</p>
                            </div>
                            <input v-if="!preview_image4" type="file" @change="onChangeDlBack" class="form-control">
                  </div>
                  <button @click="next()">Next</button>
                </div>-->
                <!-- <div class="col-md-12 m-0 p-3" v-if="step==4">
                  <p class>PAN Card</p>
                  <div class="col-md-12 col-6">
                            <p class="m-0 p-0 labels">PAN Front</p>
                            <div id="preview5 col-12" v-if="preview_image5">
                                <img :src="preview_image5" width="100%" />
                                <p class="pt-2"  @click="remove5()">Not this?</p>
                            </div>
                            <input v-if="!preview_image5" type="file" @change="onChangePanFront" class="form-control">
                  </div>
                  <div class="col-md-12 col-6">
                            <p class="m-0 p-0 labels">PAN back</p>
                            <div id="preview6 col-12" v-if="preview_image6">
                                <img :src="preview_image6" width="100%" />
                                <p class="pt-2"  @click="remove6()">Not this?</p>
                            </div>
                            <input v-if="!preview_image6" type="file" @change="onChangePanBack" class="form-control">
                  </div>
                  <button @click="next()">Submit</button>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 text-left m-auto p-0">
        <div class="col-md-12 row mt-5 m-0 p-0" style="height:350px">
          <div class="col-md-6">
            <h4 class="mb-5" style="font-family:gilroyf">Benefits of Buy-Back?</h4>
            <h6 class="mb-4">
              <span style="font-weight:700; font-size:19px">
                <img src="../assets/d1.png" alt width="50px" height="auto" /> Affordability
              </span> - Cheaper EMI
            </h6>
            <h6 class="mb-3">
              <span style="font-weight:700; font-size:19px">
                <img src="../assets/d2.png" alt width="50px" height="auto" /> Flexibility
              </span> - Option to Return Upgrade or Buy.
            </h6>
            <h6 class="mb-3">
              <span style="font-weight:700; font-size:19px">
                <img src="../assets/d3.png" class="m-0 p-0 mt-3" alt width="50px" height="auto" /> White Board
              </span> - Vehicle Assigned or your name.
            </h6>
          </div>
        </div>
      </div>

      <!-- gradient hiw -->
      <div
        class="col-md-12 col-12 m-0 p-0 pt-4 pb-3 text-center"
        style=" background-image: linear-gradient(261deg,#f69b12,#ed6a10); "
      >
        <h6
          class="mb-2 text-center pb-5"
          style="color:white; font-size:24px; font-weight:700;font-family:gilroyf "
        >How It Works</h6>
        <div class="row col-md-9 col-9 m-auto">
          <div class="col-md-2 text-center" style="justify-content:center">
            <p class="stepnumber text-center">1</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/b3.png" alt width="40px" height="auto" /> Fill the form
              </span>
            </h6>
          </div>
          <div class="col-md-2 col-12 m-0 p-0">
            <p class="stepnumber">2</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/b4.png" alt width="40px" height="auto" /> Will Contact You
              </span>
            </h6>
          </div>
          <div class="col-md-2 col-12">
            <p class="stepnumber">3</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/bn.png" alt width="40px" height="auto" /> Approved
              </span>
            </h6>
          </div>
          <div class="col-md-2 col-12">
            <p class="stepnumber">4</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/b1.png" alt width="40px" height="auto" /> Take The Bike
              </span>
            </h6>
          </div>
          <div class="col-md-2 col-12">
            <p class="stepnumber">5</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/bnm.png" alt width="20px" height="auto" /> Ride Safely
              </span>
            </h6>
          </div>
          <div class="col-md-2 col-12">
            <p class="stepnumber">6</p>
            <h6 class="mb-4">
              <span style="font-weight:700; color:white; font-size:14px">
                <img src="../assets/return.png" alt width="30px" height="auto" /> Return or Keep
              </span>
            </h6>
          </div>
        </div>
      </div>
      <!--END- gradient hiw -->

      <!-- 3 models -->
      <div class="col-md-12 col-12 m-0 p-0 py-5" style="background: #4e44e8 ">
        <div class="col-md-9 col-9 p-0 m-0 m-auto">
          <div class="col-md-12 col-12 mb-5 text-center m-0 p-0">
            <h3 style="color:white; font-family:gilroyf">Select from the following offerings</h3>
          </div>
          <div class="col-md-12 col-12 row">
            <div class="col-md-4 col-12 text-center">
              <div
                class="col-md-12 col-12 p-3 card text-center"
                style="border-radius:30px; justify-content:center"
              >
                <h4>
                  Honda
                  <strong style="font-family:gilroyf">Activa</strong>
                </h4>
                <div class="col-md-12 col-12">
                  <img src="../assets/activa.png" alt width="100%" height="auto" />
                </div>
                <div class="col-md-10 col-12 m-auto p-0">
                  <div
                    class="row col-md-12 col-12 m-0 p-0 text-center"
                    style="justify-content:center"
                  >
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>On-Road Price</strong>
                      </p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 85,016</strong>
                      </p>
                    </div>
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Down-Payment</strong>
                      </p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 8,500</strong>
                      </p>
                    </div>
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Tenure</strong>
                      </p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>24 Months</strong>
                      </p>
                    </div>
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Our EMI</strong>
                      </p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 2,566</strong>
                      </p>
                    </div>
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Other EMIs</p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 4,045</p>
                    </div>
                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Difference</p>
                    </div>
                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 1,479</p>
                    </div>
                  </div>
                  <div class="col-md-12 col-12 m-0 p-0 mt-3">
                    <button
                      class="py-2"
                      style="font-weight:700; color:white; border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem"
                      @click="scrollToTop"
                    >Apply for Loan</button>
                  </div>
                  <h6 class="mt-4 mb-0 pb-0" style="font-size:12px">
                    <strong>Fulfilled by Tansi Honda, Bengaluru</strong>
                  </h6>
                  <h6
                    class="pt-0 mt-0 pt-1"
                    style="font-size:12px"
                  >Authorized Honda 2-Wheelers Dealership</h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class="col-md-12 p-3 card text-center" style="border-radius:30px">
                <h4>
                  TVS
                  <strong style="font-family:gilroyf">Jupiter</strong>
                </h4>
                <div class="col-md-12">
                  <img src="../assets/jupiter.jpg" alt width="100%" height="auto" />
                </div>
                <div class="col-md-10 m-auto p-0">
                  <div class="row col-md-12 m-0 p-0 text-center" style="justify-content:center">
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>On-Road Price</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 84,750</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Down-Payment</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 8,475</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Tenure</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>24 Months</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Our EMI</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 2,652</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Other EMIs</p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 4,032</p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Difference</p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 1,380</p>
                    </div>
                  </div>
                  <div class="col-md-12 m-0 p-0 mt-3">
                    <button
                      class="py-2"
                      style="font-weight:700; color:white;  border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem"
                      @click="scrollToTop"
                    >Apply for Loan</button>
                  </div>
                  <h6 class="mt-4 mb-0 pb-0" style="font-size:12px">
                    <strong>Fulfilled by Arunagiri Motors, Bengaluru</strong>
                  </h6>
                  <h6
                    class="pt-0 mt-0 pt-1"
                    style="font-size:12px"
                  >Authorized TVS 2-Wheelers Dealership</h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class="col-md-12 p-3 card text-center" style="border-radius:30px">
                <h4>
                  Honda
                  <strong style="font-family:gilroyf">Dio</strong>
                </h4>
                <div class="col-md-12">
                  <img src="../assets/dio.png" alt width="100%" height="auto" />
                </div>
                <div class="col-md-10 m-auto p-0">
                  <div class="row col-md-12 m-0 p-0 text-center" style="justify-content:center">
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>On-Road Price</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 83,403</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Down-Payment</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 8,340</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Tenure</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>24 Months</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0">
                        <strong>Our EMI</strong>
                      </p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0">
                        <strong>Rs. 2,645</strong>
                      </p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Other EMIs</p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 3,968</p>
                    </div>
                    <div class="col-md-7 m-0 p-0 mb-2 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Difference</p>
                    </div>
                    <div class="col-md-5 m-0 p-0 mb-2 pl-3 text-left">
                      <p class="m-0 p-0" style="font-size:14px">Rs. 1,314</p>
                    </div>
                  </div>
                  <div class="col-md-12 m-0 p-0 mt-3">
                    <button
                      class="py-2"
                      style="font-weight:700; color:white; border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem"
                      @click="scrollToTop"
                    >Apply for Loan</button>
                  </div>
                  <h6 class="mt-4 mb-0 pb-0" style="font-size:12px">
                    <strong>Fulfilled by Tansi Honda, Bengaluru</strong>
                  </h6>
                  <h6
                    class="pt-0 mt-0 pt-1"
                    style="font-size:12px"
                  >Authorized Honda 2-Wheelers Dealership</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 models -->
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
// import axios from 'axios'
import buyback2mobile from "../components/buyback2mobile";

export default {
  data() {
    return {
      step: 1,
      name: "",
      dob: "",
      gender: "",
      pancard: "",
      aadhar_card: "",
      vehicle_name: "",
      city: "",
      mobile: "",
      loading: false,
      response: "",
      message: "",
      success: false,
      source: "",
      hasBeenSubmitted: false,
      aadhar_front: "",
      aadhar_back: "",
      dl_front: "",
      dl_back: "",
      pan_front: "",
      pan_back: "",
      preview_image1: "",
      preview_image2: "",
      preview_image3: "",
      preview_image4: "",
      preview_image5: "",
      preview_image6: "",
      temp_id: "5fead852d277250004327630",
      value: "",
    };
  },
  components: {
    buyback2mobile,
  },
  created() {
    var fbclid = this.$route.query.fbclid;
    var gclid = this.$route.query.gclid;
    var dclid = this.$route.query.dclid;
    var gclsrc = this.$route.query.gclsrc;

    if (fbclid) {
      this.source = "facebook";
    } else if (gclid) {
      this.source = "google";
    } else if (dclid) {
      this.source = "google";
    } else if (gclsrc) {
      this.source = "google";
    } else {
      this.source = "Buy-Back(Organic)";
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
  methods: {
    valid(){
      if(!this.mobile.length == 10){
        return true
      }
    },
    uploadDocuments() {
      if (this.preview_image1) {
        const fd = new FormData();
        fd.append("Image", this.aadhar_front);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "aadharCardFront");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image1 = null;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      if (this.preview_image2) {
        const fd = new FormData();
        fd.append("Image", this.aadhar_back);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "aadharCardBack");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image2 = null;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      if (this.preview_image3) {
        const fd = new FormData();
        fd.append("Image", this.pan_front);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "panCardFront");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image3 = null;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      if (this.preview_image4) {
        const fd = new FormData();
        fd.append("Image", this.pan_back);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "panCardBack");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image4 = null;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      if (this.preview_image5) {
        const fd = new FormData();
        fd.append("Image", this.dl_front);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "DLfront");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image5 = null;
            this.hasBeenSubmitted = true;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      if (this.preview_image6) {
        const fd = new FormData();
        fd.append("Image", this.dl_back);
        fd.append("_id", this.temp_id);
        fd.append("image_type", "DLback");
        this.$http
          .put(
            "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry/upload-document",
            fd,
            {
              headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
            }
          )
          .then(() => {
            this.preview_image6 = null;
            this.hasBeenSubmitted = true;
          })
          .catch((error) => {
            this.message = error.body.msg;
            this.loading = false;
          });
      }
      this.next();
    },
    removeImage(id) {
      document.getElementById(id).click();
    },
    onChangeAadharFront() {
      if (event.target.files && event.target.files.length > 0) {
        this.aadhar_front = event.target.files[0];
        this.preview_image1 = URL.createObjectURL(this.aadhar_front);
      }
    },
    remove1() {
      this.aadhar_front = "";
      this.preview_image1 = null;
    },
    remove2() {
      this.aadhar_back = "";
      this.preview_image2 = null;
    },
    remove3() {
      this.dl_front = "0";
      this.preview_image3 = null;
    },
    remove4() {
      this.dl_back = "0";
      this.preview_image4 = null;
    },
    remove5() {
      this.pan_front = "0";
      this.preview_image5 = null;
    },
    remove6() {
      this.pan_back = "0";
      this.preview_image6 = null;
    },
    onChangeAadharBack() {
      if (event.target.files && event.target.files.length > 0) {
        this.aadhar_back = event.target.files[0];
        this.preview_image2 = URL.createObjectURL(this.aadhar_back);
      }
    },

    onChangeDlFront() {
      if (event.target.files && event.target.files.length > 0) {
        this.dl_front = event.target.files[0];
        this.preview_image3 = URL.createObjectURL(this.dl_front);
      }
    },
    onChangeDlBack() {
      if (event.target.files && event.target.files.length > 0) {
        this.dl_back = event.target.files[0];
        this.preview_image4 = URL.createObjectURL(this.dl_back);
      }
    },
    onChangePanFront() {
      if (event.target.files && event.target.files.length > 0) {
        this.pan_front = event.target.files[0];
        this.preview_image5 = URL.createObjectURL(this.pan_front);
      }
    },
    onChangePanBack() {
      if (event.target.files && event.target.files.length > 0) {
        this.pan_back = event.target.files[0];
        this.preview_image6 = URL.createObjectURL(this.pan_back);
      }
    },
    next() {
      this.step++;
    },
    prev() {
      this.step--;
    },
    acceptNumber() {
      var x = this.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.d = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    xs() {
      var elmnt = document.getElementById("form");
      elmnt.scrollIntoView();
    },
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    close_resp() {
      if (this.success == true) {
        this.success = false;
      } else {
        this.success = false;
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
    //       submit(){
    //      axios.post('https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry',{
    //           name:this.name,
    //           dob:this.dob,
    //           gender:this.gender,
    //           pancard:this.pancard,
    //           aadhar_card:this.aadhar_card,
    //           vehicle_name:this.vehicle_name,
    //           mobile:this.mobile,
    //           city:this.city
    //       }).then(response=>{
    //           this.hasBeenSubmitted = true;
    //           this.response = response.body;
    //           this.loading = false

    //           this.$swal({
    //             title:'Your request has been registered.',
    //             text:'Our team will get in touch with you shortly.'
    //             })
    //           this.success = true

    //           // this.$router.push(
    //           //   {path:'/thankyou'
    //           // })
    //           }).catch(error => {
    //               this.message = error.body.msg;
    //               this.loading= false
    //           })
    //   }
    // },
    submit() {
      document.querySelector("#rak").style.display = "none";
      this.loading = true;
      this.$http
        .post(
          "https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry",
          {
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            // pancard: this.pancard,
            // aadhar_card: this.aadhar_card,
            vehicle_name: this.vehicle_name,
            mobile: this.mobile,
            city: this.city,
            source: this.source,
          },
          {
            headers: { Authorization: "YwMiRtYxQpVcMsVy1w3Z9==" },
          }
        )
        .then((response) => {
          this.hasBeenSubmitted = true;
          // this.response = response.body;
          // this.loading = false;
          this.next();
          this.temp_id = response.data._id;
          // alert(this.temp_id)
          // this.$swal({
          //   title: "Your request has been registered.",
          //   text: "Our team will get in touch with you shortly.",
          // });
          // this.success = true;
          // this.$router.push({ path: "/thankyou" });
        })
        .catch((error) => {
          this.message = error.body.msg;
          this.loading = false;
        });
    },
  
  },
  computed: {
    error() {
      if (
        this.name == "" ||
        this.mobile == "" ||
        this.vehicle_name == "" ||
        this.aadhar_card == "" ||
        this.pancard == "" ||
        this.dob == "" ||
        this.gender == "" ||
        this.city == ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.xcv button {
  width: 100%;
}
input[type="date"]:required:invalid::-webkit-datetime-edit {
  color: transparent;
}
@font-face {
  font-family: Gilroyf;
  src: url(../assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(../assets/font/Gilroy-Light.otf);
}
input[type="date"]:required:invalid::-webkit-datetime-edit {
  color: transparent;
}
.container1 {
  position: absolute;
  right: 0;
  margin: 20px;
  padding: 16px;
  background-color: white;
}
.btun2 {
  height: 44px;
  border-radius: 12px;
  background-image: linear-gradient(261deg, #f69b12, #ed6a10);
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border: none;
  color: white;
  outline: none;
  font-size: 15px;
  box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
}
.btun1 {
  height: 44px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0.2rem;
  border-radius: 15px;
  background-image: linear-gradient(240deg, #3322d3 0%, #a55bec 100%);
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border: none;
  color: white;
  outline: none;
  -webkit-box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
  box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
}

.mobile {
  display: none;
}
.stepnumber {
  background: white;
  width: 30px;
  height: 27px;
  color: black;

  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
}

.bg {
  background: #fff url(https://cdn.bimbimbikes.com/images/icons/skyline.svg)
    repeat-x bottom center;
  background-size: 1000px;
}
.rak:after {
  margin-top: 8px;
  content: "";
  width: 41px;
  height: 4px;
  background-image: linear-gradient(261deg, #f69b12, #ed6a10);
  display: block;
  border-radius: 2px;
}

._3qpfi {
  color: #fff;
  font-weight: 700;

  background-image: linear-gradient(261deg, #f69b12, #ed6a10);
  font-size: 16px;
  letter-spacing: 0.4px;
}

._2iiQB {
  position: relative;
  height: 48px;
  padding: 0 0.75rem;
  /* border-radius: 5px; */
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
  -webkit-box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
  box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
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
  background-image: linear-gradient(261deg, #f69b12, #ed6a10);
  font-size: 16px;
  letter-spacing: 0.4px;
}
.newp {
  font-size: 16px !important;
  line-height: 24px !important;
  width: 100% !important;
  font-weight: 500;
  color: #465166;
}
.newp2 {
  font-size: 12px !important;
  line-height: 24px !important;
  width: 100% !important;
  font-weight: 500;
  color: #465166;
}
.newp1 {
  font-size: 22px !important;
  line-height: 24px !important;
  width: 100% !important;
  font-weight: 500;
  color: #465166;
}
._2iiQB {
  position: relative;
  height: 48px;
  padding: 0 0.75rem;
  /* border-radius: 5px; */
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
  -webkit-box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
  box-shadow: 0 4px 8px 0 rgba(237, 108, 13, 0.5);
}

._1aEHs > div {
  display: flex;
  height: 48px;
  line-height: 48px;
}
._3dm64 {
  border: 1px solid #dde5eb;
  border-radius: 5px;

  box-sizing: border-box;
}
._1aEHs > div > div {
  display: inline-block;
  padding: 0 10px;
}
._1aEHs p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(70, 81, 102, 0.5);
}
._3D60D {
  margin-bottom: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  margin-top: 5px;
}
.ghj {
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
  background-image: linear-gradient(264deg, #f69b00, #ed6a00);
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
input:not(:focus):valid ~ .floating-label {
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important;
}
.form-control {
  border: none !important;
}
textarea:focus ~ .floating-label,
textarea:not(:focus):valid ~ .floating-label {
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important;
}
select:focus ~ .floating-label,
select:not(:focus):valid ~ .floating-label {
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important;
}

.inputText {
  outline: none !important;
}
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  box-shadow: none !important;
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 8px;
  transition: 0.2s ease all;
}
.top {
  padding: 36px 0 48px;
  background: #fff
    url("https://www.cars24.com/js/06e98e5be5add15ebe97e86aaf7fe008.svg");
  background-image: url("https://www.cars24.com/js/06e98e5be5add15ebe97e86aaf7fe008.svg");
  background-position-x: center;
  background-position-y: top;
  background-size: 100% auto;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% auto;
  position: relative;
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
@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
  }
  .lap {
    display: none;
  }
}
</style>