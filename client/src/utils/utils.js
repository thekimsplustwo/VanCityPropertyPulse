const priceFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});
export const convertPriceToCAD = price => {
  return priceFormatter.format(price).split('.')[0];
};
