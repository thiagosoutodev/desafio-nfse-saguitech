export function formatBRLToNumber(BRLStringValue) {
  const formattedNumber = Number(BRLStringValue.replace(",", "."));
  return formattedNumber;
}
