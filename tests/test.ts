import _ from "ts-auto-mock";
import { TsTestObject } from "../ts-test-object";
const { createMock } = _;

const mockTsTestObject = createMock<TsTestObject>({
  name: "Mocked Name",
});

describe(`Tests mocked ts object`, () => {
  const name = mockTsTestObject.name;
});
