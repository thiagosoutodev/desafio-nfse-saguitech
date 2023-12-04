export function formatNumberToBRL(number) {
  const formattedBRL = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedBRL.replace(/^R\$\s?/, "");
}
