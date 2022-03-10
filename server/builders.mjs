import { data } from "./data.mjs";
// let jsonData = JSON.parse(data);
export function getBuilders() {
  let p = data;
  return p
}

export function addBuilder(b) {
  data.push(b)
}
