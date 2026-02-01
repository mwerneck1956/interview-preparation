enum OrderType {
    PIX = 'pix',
    ELECTRONIC = 'electronic',
    CASH = 'cash'
}

class DiscountCalculator {
    calculateAmount(amount: number, orderType: OrderType) {
        if (orderType === OrderType.PIX)
            return amount * 0.95

        if (orderType === OrderType.ELECTRONIC)
            return amount * 0.90

        if (orderType === OrderType.CASH)
            return amount * 0.90

        return amount
    }
}
