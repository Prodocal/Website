import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.svelte-1oqj2o0.svelte-1oqj2o0{box-sizing:border-box}ul.svelte-1oqj2o0.svelte-1oqj2o0{margin:0;padding:0}ul.svelte-1oqj2o0 li.svelte-1oqj2o0{cursor:pointer;position:relative;padding:12px 8px 12px 40px;background:#eee;font-size:18px;transition:0.2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}ul.svelte-1oqj2o0 li.svelte-1oqj2o0:nth-child(odd){background:#f9f9f9}ul.svelte-1oqj2o0 li.svelte-1oqj2o0:hover{background:#ddd}.header.svelte-1oqj2o0.svelte-1oqj2o0{background-image:url('../background/pink_image.png');background-size:cover;padding:40px 40px;color:white;text-align:center}.header.svelte-1oqj2o0.svelte-1oqj2o0:after{content:"";display:table;clear:both}input.svelte-1oqj2o0.svelte-1oqj2o0{margin:0;border:none;border-radius:0;width:75%;padding:10px;float:left;font-size:16px}.addBtn.svelte-1oqj2o0.svelte-1oqj2o0{padding:10px;width:25%;background:#d9d9d9;color:#555;float:left;text-align:center;font-size:16px;cursor:pointer;transition:0.3s;border-radius:0}.addBtn.svelte-1oqj2o0.svelte-1oqj2o0:hover{background-color:#bbb}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1oqj2o0"}"><div id="${"myDIV"}" class="${"header svelte-1oqj2o0"}"><h2 class="${"svelte-1oqj2o0"}">My To Do List</h2>
        <input type="${"text"}" id="${"myInput"}" placeholder="${"Title..."}" class="${"svelte-1oqj2o0"}">
        <span onclick="${"newElement()"}" class="${"addBtn svelte-1oqj2o0"}">Add Event</span></div>

    <ul id="${"myUL"}" class="${"svelte-1oqj2o0"}"><li class="${"svelte-1oqj2o0"}">example</li></ul>
</main>`;
});
export {
  Page as default
};
