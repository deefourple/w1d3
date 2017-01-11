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
        results[name].totalSales = companySalesData[i].totalSales;
        results[name].totalTaxes = companySalesData[i].salesTax;
      }
      else {
        //log it to results {}
        results[name] = {};
      }

      // ? = {}
      // if (companySalesData[i].name) //occurs more than once merge data ) {
        // results[name].totalSales = companySalesData[i].totalSales //+= matchedName totalSales;
        // results[name].totalTaxes = companySalesData[i].salesTax //+= matchedName salesTax;
      // }
    }
    return results;
  }

console.log(report(companySalesData));
// console.log(results[name]);

// console.log(companySalesData);

  // function mergeTelus() { //create a condition checking if companySalesData[i].name matches another object
  //     companySalesData[i].totalSales += companySalesData[2].totalSales;     //add up totalSales and salesTax
  //     companySalesData[i].salesTax += companySalesData[2].salesTax;
  //     delete companySalesData[i];     //delete one telus object in the array
  // }

// mergeTelus();

//   function salesTaxReport(name, totalSales, totalTax) {
//     this.name = name;
//     this.totalSales = totalSales;
//     this.totalTax = totalTax;
//   }

//   for (var i = 0; i < companySalesData.length - 1; i++) {
//     var company = new salesTaxReport(companySalesData[i].name, companySalesData[i].totalSales, companySalesData[i].salesTax);
//     console.log(company);
//   }
// console.log(companySalesData);

