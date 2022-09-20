type FormatProps = {
  replace: boolean;
  replaceSearchValue: string;
  replaceValue: string;
};

export function currencyFormatterBR(value: number, format?: FormatProps) {
  if (!Number(value) && value !== 0) return "";

  let amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  if (format?.replace)
    amount = amount.replace(format.replaceSearchValue, format.replaceValue);

  return `${amount}`;
}
