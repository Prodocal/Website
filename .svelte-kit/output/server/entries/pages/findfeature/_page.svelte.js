import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
const UserIcon = "/_app/immutable/assets/usericon-71bdb7a2.svg";
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member = [
    {
      num: 0,
      icon: UserIcon,
      name: "Corey Curtis"
    },
    {
      num: 1,
      icon: UserIcon,
      name: "Allison Culhane"
    },
    {
      num: 2,
      icon: UserIcon,
      name: "Kianna Herwitz"
    },
    {
      num: 3,
      icon: UserIcon,
      name: "Jaylon Lipshutz"
    },
    {
      num: 4,
      icon: UserIcon,
      name: "Ererson Aminoff"
    },
    {
      num: 5,
      icon: UserIcon,
      name: "Terry Brown"
    },
    {
      num: 6,
      icon: UserIcon,
      name: "Aisha Saris"
    }
  ];
  const getMember = () => {
    return member;
  };
  return `<div>${each(getMember(), ({ icon, name, status, num }, i) => {
    return `<div class="${"card card-side m-5 bg-white hover:shadow-xl"}"><img class="${"ml-4 w-15"}"${add_attribute("src", icon, 0)}${add_attribute("alt", name, 0)} width="${"130"}">
			
			<div class="${"card card-center"}"><div class="${"card-body items-center text-2xl pt-14"}">${escape(name)}</div></div>
			
			<div class="${"card-body justify-end"}"><button class="${"btn btn-info"}">View Organizations</button>
				<button class="${"btn btn-outline btn-error"}">Remove Friend</button></div>

		</div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="${"md:flex md:justify-center mb-6 mt-10"}"><div class="${"card bg-base-100 shadow-xl w-9/12 "}"><div class="${"card-body bg-gradient-to-r from-[#FAE1A7] to-[#FFAB9F]"}"><h1 class="${"text-[#31302e] text-3xl text-left pl-6 font-extrabold"}">Your Friends &amp; Organizations</h1>
            ${validate_component(Users, "Users").$$render($$result, {}, {}, {})}</div></div></div></main>`;
});
export {
  Page as default
};
