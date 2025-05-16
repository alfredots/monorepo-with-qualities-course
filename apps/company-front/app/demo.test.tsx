
const message = "testing";

describe("demo()", () => {
  it("true must be true", () => {
    expect(true).toBe(true);
  });
  it("message must be valid", () => {
    expect(message).toBe("testing");
  })
});