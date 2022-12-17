// Created by: Alex Nelson
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-06-JS-LOOPS/sw.js", {
    scope: "/ICS2O-UNIT5-06-JS-LOOPS/",
  })
}

/**
 * This function does multiplication
 */
function multiply() {
  //Input #1
  let numberOne = parseFloat(document.getElementById("numberOne").value)
  //Input #2
  let numberTwo = parseFloat(document.getElementById("numberTwo").value)
  //Input for product
  let product = null
  //Process if #2 is negative
  if (numberTwo < 0) {
    numberTwo = numberTwo * -1
    while (numberTwo > 0) {
      product = product + numberOne
      console.log(product)
      numberTwo--
    }
    product = product * -1
  }
  //Process if #2 is positive
  else {
    while (numberTwo > 0) {
      product = product + numberOne
      console.log(product)
      numberTwo--
    }
  }
  document.getElementById("product").innerHTML = product
}
