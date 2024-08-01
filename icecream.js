// the object with keys and values
const order = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0,
  coffee: 0,
};
console.log(order);
// popup asking for input
const froyo = prompt(
  "What Fro-Yo would you like today? Please enter your choices with commas and no spaces."
);

// instructions that are repeated to look at input and split up the orders at the commas
function onlinOrder(froyo) {
  //   varriable that can be returned "splitUp"
  const splitUp = froyo.split(",");
  for (i = 0; i < splitUp.length; i++) {
    order[splitUp[i]] += 1;
  }
  console.log(order(flavor));
  return order;
}
