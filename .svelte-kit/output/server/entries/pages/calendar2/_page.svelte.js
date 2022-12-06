import { c as create_ssr_component, e as escape, d as each } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{list-style-type:none}main.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{font-family:sans-serif, 'Trebuchet MS'}#month.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{padding:70px 25px;width:100%;background-size:cover;text-align:center}#month.svelte-1513ms5 ul.svelte-1513ms5.svelte-1513ms5{margin:0;padding:0}#month.svelte-1513ms5 ul.svelte-1513ms5 li.svelte-1513ms5{color:black;font-size:20px;text-transform:uppercase;letter-spacing:3px}#month.svelte-1513ms5 .prev.svelte-1513ms5.svelte-1513ms5{float:left;padding-top:10px;cursor:pointer}#month.svelte-1513ms5 .next.svelte-1513ms5.svelte-1513ms5{float:right;padding-top:10px;cursor:pointer}#weekdays.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{margin:0;padding:10px 0;background-color:rgb(75, 74, 74)}#weekdays.svelte-1513ms5 li.svelte-1513ms5.svelte-1513ms5{display:inline-block;width:13.6%;color:#ffffff;text-align:center}#days.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{padding:10px 0;background:rgb(255, 255, 255);margin:0}#days.svelte-1513ms5 li.svelte-1513ms5.svelte-1513ms5{list-style-type:none;display:inline-block;border:1px solid black;padding:40px;width:13.6%;text-align:center;margin-bottom:5px;font-size:13px;color:rgb(0, 0, 0)}.active.svelte-1513ms5.svelte-1513ms5.svelte-1513ms5{padding:5px;background:#fda3956e;color:rgb(0, 0, 0) !important\r\n    }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let month;
  let firstday;
  let numdays;
  let lastMonthDays;
  let cellQuantity;
  const date = new Date();
  const today = {
    dayNum: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
  const listofMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  $$result.css.add(css);
  month = listofMonths[monthIndex];
  firstday = new Date(year, monthIndex, 1).getDay();
  numdays = new Date(year, monthIndex + 1, 0).getDate();
  lastMonthDays = new Date(year, monthIndex, 0).getDate();
  cellQuantity = firstday <= 4 ? 35 : 42;
  {
    console.log(`${monthIndex} --- First Day Index: ${firstday}-- Number of Days: ${numdays} --- ${month} ${today.dayNum}`);
  }
  return `<main class="${"svelte-1513ms5"}"><div id="${"month"}" class="${"svelte-1513ms5"}"><ul class="${"svelte-1513ms5"}"><li class="${"prev svelte-1513ms5"}">\u276E</li>
        <li class="${"next svelte-1513ms5"}">\u276F</li>
        <li class="${"svelte-1513ms5"}">${escape(month)} <br><span style="${"font-size:18px"}">${escape(year)}</span></li></ul></div>

    <ul id="${"weekdays"}" class="${"svelte-1513ms5"}"><li class="${"svelte-1513ms5"}">Su</li>
        <li class="${"svelte-1513ms5"}">Mo</li>
        <li class="${"svelte-1513ms5"}">Tu</li>
        <li class="${"svelte-1513ms5"}">We</li>
        <li class="${"svelte-1513ms5"}">Th</li>
        <li class="${"svelte-1513ms5"}">Fr</li>
        <li class="${"svelte-1513ms5"}">Sa</li></ul>

    <ul id="${"days"}" class="${"svelte-1513ms5"}">${each(Array(cellQuantity), (_, i) => {
    return `${i < firstday ? `<li style="${"color:gray;"}" class="${"svelte-1513ms5"}">${escape(lastMonthDays - firstday + 1 + i)} </li>` : `${i >= numdays + firstday ? `<li style="${"color:gray;"}" class="${"svelte-1513ms5"}">${escape(i - (numdays + firstday - 1))} </li>` : `<li class="${[
      "svelte-1513ms5",
      i === today.dayNum + (firstday - 1) && today.month === monthIndex && today.year === year ? "active" : ""
    ].join(" ").trim()}">${escape(i - firstday + 1)}  </li>`}`}`;
  })}</ul>

</main>`;
});
export {
  Page as default
};
