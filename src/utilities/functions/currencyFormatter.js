const CurFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0
    //maximumFractionDigits: 0,
  });
  
//   formatter.format(2500); /* $2,500.00 */

  export default CurFormatter;