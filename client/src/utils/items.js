export const getCartNumber = (items) => {
  let num = items.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);
  return num;
};

/* export const calculateOrderTotal = (items) => {
  return items.reduce(
    (total, item) => (total = total += item.quantity * item.item.price),
    0
  );
};
 */

export const formatDate = (date) => {
  let str = date.split('.')[0].split('T');
    return `${str[0]} ${str[1]}`
}

