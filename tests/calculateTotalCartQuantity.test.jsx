import calculateTotalCartQuantity from "../src/components/calculateTotalCartQuantity";
import { describe, expect, it } from "vitest";

describe("cart total quantity calculation", () => {
    it("returns 12 with empty cart array", () => {
        expect(calculateTotalCartQuantity([
            {
                quantity: 2,
                price: 5
            },
            {
                quantity: 10,
                price: 2
            }
        ])).toBe(12);
    });
    it("returns 0 with empty cart array", () => {
        expect(calculateTotalCartQuantity([
            
        ])).toBe(0);
    });
})