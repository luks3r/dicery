import { describe, it } from "mocha";
import { assert } from "chai";

import {die, dice} from "../src";

describe("Roll works correctly", () => {
  it("should retrieve random values", () => {
    assert.notEqual(die(1000), die(1000), "Random dice should differ");
    assert.notDeepEqual(dice(100, 100), dice(100, 100), "Random dice arrays should not be equal");
  })
})