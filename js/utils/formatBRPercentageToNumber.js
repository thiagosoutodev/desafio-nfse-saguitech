export function formatBRPercentageToNumber(BRStringPercentage) {
  let formattedNumber;
  if (!BRStringPercentage.includes(",")) {
    formattedNumber = Number(BRStringPercentage) / 100;
    return formattedNumber;
  }

  formattedNumber = BRStringPercentage.replace(",", ".");
  formattedNumber = Number(formattedNumber) / 100;
  return formattedNumber;
}
