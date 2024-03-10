import calculateCartSubtotal from '../src/components/calculateCartSubtotal';
import { describe, expect, it } from "vitest";

describe("cart subtotal calculation", () => {
    it("returns 30.00 with mocked cart array", () => {
        expect(calculateCartSubtotal([
            {
                quantity: 2,
                price: 5
            },
            {
                quantity: 10,
                price: 2
            }
        ])).toBe('30.00');
    });
    it("returns 0.00 with empty cart array", () => {
        expect(calculateCartSubtotal([
        ])).toBe('0.00');
    });
    
})