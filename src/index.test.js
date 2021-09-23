import { projectName } from "./index";

describe("Starter project should", () => {
  it("output its name", () => {
    expect(projectName()).toEqual("Kata starter project");
  });

  it("has the correct string length ", () => {
    const result = projectName();

    expect(result.length).toEqual(20);
  });
});
