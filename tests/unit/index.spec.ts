import Foo from "../../src/components/Foo.vue";
import { mount } from "@vue/test-utils";
test("1+1=2", () => {
  console.log(mount(Foo));
  expect(1 + 1).toBe(2);
});
