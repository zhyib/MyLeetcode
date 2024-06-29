function discountPrices(sentence: string, discount: number): string {
  return sentence.replace(/\$[0-9]+\b/g, (match) => {
    let price = Number(match.slice(1));
    price -= (price * discount) / 100;
    return `$${price.toFixed(2)}`;
  });
}
