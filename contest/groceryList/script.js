let click =0;

function calcTotal() {

const tdElement = document.querySelectorAll("tbody");

if(click>0){
  const elem = document.querySelector("body > table > tbody > tr:last-child");
}

const pricesElement = document.querySelectorAll("[data-ns-test='price']");



let totalPrice=0;
for (let index = 0; index < pricesElement.length; index++) {
    const tdElement = pricesElement[index];
    const value = tdElement.textContent;
    totalPrice+=Number(value);   
}

const lastRow=document.createElement("tr");

const tableDataGrandTotal = document.createElement("td");
tableDataGrandTotal.textContent="Grand Total";
const tableDataGrandTotalInt = document.createElement("td");
tableDataGrandTotalInt.textContent= totalPrice;
tableDataGrandTotalInt.setAttribute("data-ns-test", "grandTotal");

lastRow.append(tableDataGrandTotal);
lastRow.append(tableDataGrandTotalInt);

tableElement.append(lastRow);
click++;
}


