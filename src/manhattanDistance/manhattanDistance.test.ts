import minCostConnectPoints from "./manhattanDistance"

describe("manhattan distance", () => {
    it("test manhattan distance 1", () => {
        const shortestDistance = minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])

        expect(shortestDistance).toBe(10);
    })

    it("test manhattan distance 2", () => {
        const shortestDistance = minCostConnectPoints([[3,12],[-2,5],[-4,1]])

        expect(shortestDistance).toBe(18);
    })
 })