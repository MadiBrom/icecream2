const order = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0,
  coffee: 0,
};
const froyoInput = prompt(
  "Please enter an order in all lowercase, using commas and no spaces. Thank you!"
);
function update(froyo) {
  const flavors = froyo.split(",");
flavors.forEach(froyo => {
    if (flavors in order)) {
        order[flavor] += 1;
    }
});
console.table(order);
