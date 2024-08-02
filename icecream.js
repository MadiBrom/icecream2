// WARNING: The notes in this may not fully be correct. After doing research this is what I came up with along with my understanding of what is happening.

// the keys and values what is known as the object
const order = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0,
  coffee: 0,
};
// the alert asking for the order create an array from input
const froyoInput = prompt(
  "Please enter an order in all lowercase, using commas and no spaces. Your options are... vanilla, chocolate, strawberry, or chocolate.  Thank you!"
);
// taking the order and making
function update(froyo) {
  // takes array from input and splits it at the commas
  const flavors = froyo.split(",");
  // counts each flavor in the array
  flavors.forEach(function (flavor) {
    // adds a number to the original object every time the counter finds the similar item
    if (flavor in order) {
      order[flavor] += 1;
    }
  });
  //   shows the added flavors within a table
  console.table(order);
  //   exits function
  return order;
}
// calls on the update function for the prompt customer input
update(froyoInput);
