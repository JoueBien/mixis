// import { setupClient } from "@joue-bien/rtp-midi-transport/testing";
import { setupClient } from "@joue-bien/osc-ts/testing/vitest";
import { describe, expect, it } from "vitest";

describe("t", () => {
  const items = setupClient();

  it("i", () => {
    expect(items).toBeInstanceOf(Object);
  });
});
