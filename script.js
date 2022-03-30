// step 0 When the supersize is chosen, a warning about the risk it can cause to your health will appear
const handleBurritoSize = (value) => {
  if (value === "1750") {
    return alert("This size could be dangerous for your healthy! Take care!");
  }
};

//Send to next page
function myFunction() {
  location.replace("Sendorder.html");
}

// When you click on the button what needs to happen

const onClickSubmit = (event) => {
  event.preventDefault();

  // steps 1 get the form's data
  const quantityInput = document.getElementById("quantity");
  const valueQuantity = quantityInput.value;

  const bsizeInput = document.getElementById("bsize");
  const valueBsize = parseInt(bsizeInput.value);
  // If the value below is greater than 9, it means that it is the most expensive in the list, execute the condition to fix the value
  const superSizeValue = valueBsize > 9 ? valueBsize.toFixed(2) / 100 : null;

  const discountInput = document.getElementById("discountCode");
  const discountValue = discountInput.value;

  // step 2 Make the calculations and apply the discount
  const valorTotal = superSizeValue
    ? valueQuantity * superSizeValue
    : valueQuantity * valueBsize;

  // step 3 and I need to make a logic to validate only one type of discount (create an alert if this condition is true)
  const discountCode = "TexMaxGood";

  const percentage = (num, per) => (num / 100) * per;

  const currencyAmount = (number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(number);

  const discount = percentage(valorTotal, 10);
  const totalWithDiscount = valorTotal - discount;

  if (discountCode === discountValue) {
    alert(
      `Congrats! You won 10% off on your Burrito!! =) ${totalWithDiscount}`
    );
    document.getElementById("totalAmount").innerHTML =
      currencyAmount(totalWithDiscount);
  }
  // step 4 I need to create an alert for the discounts that are not valid
  else {
    alert("Invalid Coupon! Try again :/");
    document.getElementById("totalAmount").innerHTML =
      currencyAmount(valorTotal);
  }
};
