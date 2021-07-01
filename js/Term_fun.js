/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", () =>
{

 let IdPlant = 1234;
 let id_plant_displayer = document.getElementById('id_disp')
 id_plant_displayer.value = IdPlant;

 /*INITIALIZE THE LIMITS FOR TEMPERATURE*/
 let low_limit_T = 23;
 let upper_limit_T = 30;

 /*INITIALIZE THE LIMITS FOR THE NOISE*/
 let low_limit_Noise = 50;
 let upper_limit_Noise = 70;

 /*INITIALIZE THE LIMITS FOR THE CO2*/
 let low_limit_CO2 = 500;
 let upper_limit_CO2 = 1000;

 /*INITIALIZE THE LIMITS FOR THE HUMIDITY*/
 let low_limit_HUM = 50;
 let upper_limit_HUM = 70;

 /*INITIALIZE THE LIMITS FOR THE ILLUMINCANCE*/
 let low_limit_IL = 800;
 let upper_limit_IL = 1400;



 /*We generate a request to get the .json*/
 const section = document.querySelector('#temp');
 /*Almacenamos la dirección URL del json*/
 const requestURL = 'https://raw.githubusercontent.com/rferrers/Teaspils/main/DataAll.json';
 /*const requestURL = 'https://raw.githubusercontent.com/rferrers/Teaspils/main/DataAll2.json';*/

 /*Creamos una nueva instancia de la clase XMLHttpRequest()*/
 const request = new XMLHttpRequest();
 /*Con el open hacemos una solicitud del Request*/
 request.open('GET', requestURL);
 /*Definimos que el tipo de archivo que usaremos sera un json*/
 request.responseType = 'json';
 request.send();
 /*Cómo manejar la respuesta del servidor*/
 request.onload = function() {

  let Data = request.response;
  loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);

  let button = document.getElementById('fileRequest')
  button.addEventListener('click',function(){
   /*let blob = Data;
   var URL = window.URL || window.webkitURL;
   // try to get URL from Blob
   try{
    var downloadUrl = URL.createObjectURL(blob);
   }
   catch(e){
    console.log(blob)
   }
  window.location.href = window.URL.createObjectURL(blob);*/
   let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(Data));
   let downloadLink = document.createElement('a');
   downloadLink.setAttribute('href', dataStr);
   downloadLink.setAttribute('download', 'exportdata.json');
   downloadLink.click();
  });




  /*********************INPUT SETTINGS*************************************/
  /******************************TEMPERATURE*************************************/
  let T_input_lowlimit = document.getElementById('myInputLowT')
  T_input_lowlimit.value = low_limit_T;

  let T_input_highlimit = document.getElementById('myInputHighT')
  T_input_highlimit.value = upper_limit_T;

  let input_button_T = document.getElementById('inputButtonT')
  input_button_T.addEventListener('click', function(){
   /*LOW LIMIT OF TEMPERATURE*/
   console.log('Temp!')
   let input_value_low = T_input_lowlimit.value
   if (input_value_low > 80) {
    input_value_low = 80  }
   low_limit_T = input_value_low;

   /*HIGH LIMIT OF TEMPERATURE*/
   let input_value_high= T_input_highlimit.value
   if (input_value_high > 100) {
    input_value_high = 100  }
   upper_limit_T = input_value_high;
   loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);
  })

  /*******************************NOISE*************************************/

  let Noise_input_lowlimit = document.getElementById('myInputLowNoise')
  Noise_input_lowlimit.value = low_limit_Noise;

  let Noise_input_highlimit = document.getElementById('myInputHighNoise')
  Noise_input_highlimit.value = upper_limit_Noise;

  let input_button_Noise = document.getElementById('inputButtonNoise')
  input_button_Noise.addEventListener('click', function(){
   /*LOW LIMIT OF CO2*/
   console.log('Noise!')
   let input_value_low = Noise_input_lowlimit.value
   if (input_value_low > 80) {
    input_value_low = 80  }
   low_limit_Noise = input_value_low;
   console.log(low_limit_Noise)

   /*HIGH LIMIT OF CO2*/
   let input_value_high= Noise_input_highlimit.value
   if (input_value_high > 100) {
    input_value_high = 100  }
   upper_limit_Noise = input_value_high;
   loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);
  })

  /*******************************CO2*************************************/
  let CO2_input_lowlimit = document.getElementById('myInputLowCO2')
  CO2_input_lowlimit.value = low_limit_CO2;

  let CO2_input_highlimit = document.getElementById('myInputHighCO2')
  CO2_input_highlimit.value = upper_limit_CO2;

  let input_button_CO2 = document.getElementById('inputButtonCO2')
  input_button_CO2.addEventListener('click', function(){
   /*LOW LIMIT OF CO2*/
   console.log('CO2!')
   let input_value_low = CO2_input_lowlimit.value
   if (input_value_low > 1500) {
    input_value_low = 1500  }
   low_limit_CO2 = input_value_low;

   /*HIGH LIMIT OF CO2*/
   let input_value_high= CO2_input_highlimit.value
   if (input_value_high > 2000) {
    input_value_high = 2000  }
   upper_limit_CO2 = input_value_high;
   loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);
  })

  /*******************************HUMIDITY*************************************/
  let HUM_input_lowlimit = document.getElementById('myInputLowHUM')
  HUM_input_lowlimit.value = low_limit_HUM;

  let HUM_input_highlimit = document.getElementById('myInputHighHUM')
  HUM_input_highlimit.value = upper_limit_HUM;

  let input_button_HUM = document.getElementById('inputButtonHUM')
  input_button_HUM.addEventListener('click', function(){
   /*LOW LIMIT OF HUM*/
   console.log('HUM!')
   let input_value_low = HUM_input_lowlimit.value
   if (input_value_low > 80) {
    input_value_low = 80 }
   low_limit_HUM = input_value_low;

   /*HIGH LIMIT OF HUM*/
   let input_value_high= HUM_input_highlimit.value
   if (input_value_high > 100) {
    input_value_high = 100  }
   upper_limit_HUM = input_value_high;
   loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);
  })

  /*******************************ILLUMINANCE*************************************/
  let IL_input_lowlimit = document.getElementById('myInputLowIL')
  IL_input_lowlimit.value = low_limit_IL;

  let IL_input_highlimit = document.getElementById('myInputHighIL')
  IL_input_highlimit.value = upper_limit_IL;

  let input_button_IL = document.getElementById('inputButtonIL')
  input_button_IL.addEventListener('click', function(){
   /*LOW LIMIT OF IL*/
   console.log('IL!')
   let input_value_low = IL_input_lowlimit.value
   if (input_value_low > 1000) {
    input_value_low = 1000 }
   low_limit_IL = input_value_low;

   /*HIGH LIMIT OF HUM*/
   let input_value_high= IL_input_highlimit.value
   if (input_value_high > 100) {
    input_value_high = 100  }
   upper_limit_IL = input_value_high;
   loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL);
  })

  let hide_button = document.getElementById("hiding-btn");
  hide_button.addEventListener('click', function(){
   console.log('click me!')
   let x = document.getElementById("limits-setting")
   if (x.style.display == "none") {
    x.style.display = "block";
   } else {
    x.style.display = "none";
   }
  })


  /*showTemp(Temperatures);
  }   */

 };

 document.body.classList.add("loaded"); 
});

const red = '#FF3104';
const green = '#4AD347';
const orange = '#E8B147';

/*
function download(Data){
 let MIME_TYPE = "text/json";
 let blob = Data;
 if (typeof Data === 'undefined'){
  return;
 }
 window.location.href = window.URL.createObjectURL(blob);
}
*/

function    loadDashboard(Data, low_limit_T, upper_limit_T,low_limit_Noise,upper_limit_Noise,low_limit_CO2,upper_limit_CO2,low_limit_HUM,upper_limit_HUM,low_limit_IL,upper_limit_IL){

 let Date_place = document.getElementById("date");

 let myH2 = document.createElement('h3');

 myH2.textContent = Data['Date'][0].Value;
 Date_place.textContent = myH2.textContent;
 /*appendChild(myH2);*/

 /*____________________________________TEMPERATURE_________________________________*/
 let Temperature = document.getElementById("T-load");
 let valueT = Math.round((Data['Temperature'][0].Value/40)*100);

 let low_limit_T_pct = Math.round((low_limit_T/40)*100);
 let high_limit_T_pct = Math.round((upper_limit_T/40)*100);

 Temperature.style.height = valueT.toString()+'%' ;
 let color_T
 if (valueT < low_limit_T_pct) {
  color_T = green;
 } else if (valueT < high_limit_T_pct){
  color_T  = orange;
 } else {
  color_T = red;
 }
 Temperature.style.backgroundColor = color_T;

 /*____________________________________NOISE_________________________________*/
 let Noise = document.getElementById("N-load");
 let valueN = Math.round((Data['Noise'][0].Value/100)*100);
 Noise.style.height = valueN.toString()+'%' ;

 let low_limit_Noise_pct = Math.round((low_limit_Noise/100)*100);
 let high_limit_Noise_pct = Math.round((upper_limit_Noise/100)*100);

 let color_N
 if (valueN < low_limit_Noise_pct) {
  color_N = green;
 } else if (valueN < high_limit_Noise_pct){
  color_N = orange;
 } else {
  color_N = red;
 }
 Noise.style.backgroundColor = color_N;

 /*____________________________________CO2_________________________________*/
 var CO2 = document.getElementById("CO2-load");
 var valueC = Math.round((Data['CO2'][0].Value/2000)*100);
 CO2.style.height = valueC.toString()+'%';

 let low_limit_CO2_pct = Math.round((low_limit_CO2/2000)*100);
 let high_limit_CO2_pct = Math.round((upper_limit_CO2/2000)*100);

 let color_C
 if (valueC < low_limit_CO2_pct) {
  color_C = green;
 } else if (valueC < high_limit_CO2_pct){
  color_C = orange;
 } else {
  color_C = red;
 }
 CO2.style.backgroundColor = color_C;

 /*____________________________________HUMIDITY_________________________________*/
 var Hum = document.getElementById("H-load");
 var valueH = Math.round(Data['Humidity'][0].Value);
 Hum.style.height = valueH.toString()+'%';

 let low_limit_HUM_pct = Math.round(low_limit_HUM);
 let high_limit_HUM_pct = Math.round(upper_limit_HUM);

 let color_H
 if (valueH < low_limit_HUM_pct) {
  color_H = green;
 } else if (valueH < high_limit_HUM_pct){
  color_H = orange;
 } else {
  color_H = red;
 }
 Hum.style.backgroundColor = color_H;

 /*____________________________________ILLUMINANCE_________________________________*/
 var Light = document.getElementById("L-load");
 var valueL = Math.round((Data['Light'][0].Value/2000)*100);
 Light.style.height = valueL.toString()+'%';

 let low_limit_IL_pct = Math.round(((low_limit_IL)/2000)*100);
 let high_limit_IL_pct = Math.round(((upper_limit_IL)/2000)*100);

 let color_L
 if (valueL < low_limit_IL_pct) {
  color_L = green;
 } else if (valueL < high_limit_IL_pct){
  color_L = orange;
 } else {
  color_L = red;
 }
 Light.style.backgroundColor = color_L;
}
