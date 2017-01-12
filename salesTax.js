var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

////////////////////////////////////////////////////////////////////////////////////////MY CODE

companySalesData.forEach(function(company){ //creates new key in companySalesData called taxRate w/ correct province
 for (province in salesTaxRates){
   if (province === company.province){
     company["taxRate"] = salesTaxRates[province];
   }
 }
})

 function sumTotal(array) {          //function to be called to sum total of each sales array
    sum = array.reduce(function(a, b) {
      return a + b;
    }, 0);
      return sum;
  }

  for (var i = 0; i < companySalesData.length; i++) { //creates a new key called totalSales containing the sum of the sales
    companySalesData[i].totalSales = sumTotal(companySalesData[i].sales);
  }

  function applyTax() {
    for (var i = 0; i < companySalesData.length; i++) { //create function that multiplies totalSales by taxRate
      // console.log(companySalesData[i].totalSales);
      companySalesData[i].salesTax = (companySalesData[i].totalSales * companySalesData[i].taxRate);
    }
  }

applyTax();

  var report = function(companySalesData) {
    var results = {};
    for (var i = 0; i < companySalesData.length; i++) {
      var name = companySalesData[i].name;
      if (results[name]) {
        //merge
        results[name].totalSales += companySalesData[i].totalSales;
        results[name].totalTaxes += companySalesData[i].salesTax;
      }
      else {
        //log it to results {}
        results[name] = {};
        results[name].totalSales = companySalesData[i].totalSales;
        results[name].totalTaxes = companySalesData[i].salesTax;
      }
    }
    return results;
  }

console.log(report(companySalesData));