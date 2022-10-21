// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 * @constructor
 */
"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  const TAX_RATE = 0.18

  // input
  const numberOfHoursWorked = parseInt(
    document.getElementById("number-of-hours").value
  )
  const hourlyRate = parseInt(document.getElementById("hourly-rate").value)

  // process
  const pay = numberOfHoursWorked * hourlyRate
  const taxesToPay = pay * TAX_RATE
  const takeHomePay = pay - taxesToPay

  // output
  document.getElementById("number").innerHTML =
    "your pay will be: " + " $ " + takeHomePay
  document.getElementById("rate").innerHTML =
    "the goverment will take: " + " $ " + taxesToPay
}
