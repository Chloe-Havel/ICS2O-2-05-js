// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 * @constructor
 */
'use strict'

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  const TAX_RATE = 0.18
  
  // input
  const number = parseInt(document.getElementById('number-of-hours').value)
  const rate = parseInt(document.getElementById('hourly-rate').value)

  // process
  const pay = number * rate
  const taxesToPay = pay * TAX_RATE
  const takeHomePay = pay - taxesToPay

  // output  
  document.getElementById('number').innerHTML = 'your pay will be: ' + ' $ ' + pay
  document.getElementById('rate').innerHTML = 'the goverment will take: ' + ' $ ' + takeHomePay
}