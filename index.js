const express = require('express')

function isExpressInstalled() {
  return Boolean(express) ? "Yes": "No"
}

console.log("Hello Node")
console.log("Is Express installed ? " + isExpressInstalled())
