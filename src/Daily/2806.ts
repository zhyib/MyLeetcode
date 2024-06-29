function accountBalanceAfterPurchase(purchaseAmount: number): number {
  return 100 - Math.round(purchaseAmount / 10) * 10;
}
