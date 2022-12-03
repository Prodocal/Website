import {writeable} from '$svelte/store';

let obj = writeable( {
  title: "test",
  organization: "test org",
  class: "test class",
  type: "test type",
  date: undefined
});