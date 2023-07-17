const priceFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});
export const convertPriceToCAD = price => {
  return priceFormatter.format(price).split('.')[0];
};

const isEmpty = value => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length === 0;
  }
  return value === '' || value === null;
};

export const isObjectValid = obj => {
  if (isEmpty(obj)) {
    return false;
  }
  return Object.values(obj).some(value => !isEmpty(value));
};
