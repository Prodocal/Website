import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from './index-f5798eac.js';

const UsernameIcon = "/_app/immutable/assets/username-24b7cfda.svg";
const PasswordIcon = "/_app/immutable/assets/password-0afbbb11.svg";
const EmailIcon = "/_app/immutable/assets/email-8944fd37.svg";
const PhoneIcon = "/_app/immutable/assets/phonenumber-a4121816.svg";
const Logform = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs = ["Login", "Signup"];
  let activeTab = 0;
  var username, password, email, phone, firstname, lastname;
  return `<main><div class="${"card w-96"}"><div class="${"card-body items-center text-center"}"><div class="${"bg-white rounded-full px-5 py-.5 text-center mt-2 shadow-xl"}"><div class="${"tabs tabs-bordered"}">${each(tabs, (tab, index) => {
    return `<button class="${[
      "tab text-[#FFAB9F] text-opacity-50 text-m",
      activeTab == index ? "tab-active" : ""
    ].join(" ").trim()}">${escape(tab)}</button>`;
  })}</div></div>

            
            <div class="${["card-body", ""].join(" ").trim()}"><form class="${"form-control w-full max-w-xs"}"><div class="${"card-actions justify-start"}"><input type="${"text"}" placeholder="${"username"}" class="${"bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"}"${add_attribute("value", username, 0)}>
                        <img${add_attribute("src", UsernameIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-start"}"><input type="${"text"}" placeholder="${"password"}" class="${"bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"}"${add_attribute("value", password, 0)}>
                        <img${add_attribute("src", PasswordIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-center"}"><button type="${"submit"}" class="${"text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl"}"><a href="${"/calendar2"}" class="${"font-extrabold"}">LOGIN</a></button></div></form></div>

            
            <div class="${["card-body", "hidden"].join(" ").trim()}"><form class="${"form-control w-full max-w-xs"}"><div class="${"card-actions justify-start mb-2"}"><input type="${"text"}" placeholder="${"first name"}" class="${"input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl"}"${add_attribute("value", firstname, 0)}>
                        <input type="${"text"}" placeholder="${"last name"}" class="${"input w-full max-w-xs flex-1 bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl"}"${add_attribute("value", lastname, 0)}></div>
                    <div class="${"card-actions justify-start mb-2"}"><input type="${"text"}" placeholder="${"email"}" class="${"input w-full max-w-xs bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"}"${add_attribute("value", email, 0)}>
                        <img${add_attribute("src", EmailIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>
                    <div class="${"card-actions justify-start mb-4"}"><input type="${"text"}" placeholder="${"phone number"}" class="${"input w-full max-w-xs bg-white text-[#31302e] placeholder-[#FFAB9F] rounded-full shadow-xl pl-11"}"${add_attribute("value", phone, 0)}>
                        <img${add_attribute("src", PhoneIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-start"}"><input type="${"text"}" placeholder="${"username"}" class="${"bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"}"${add_attribute("value", username, 0)}>
                        <img${add_attribute("src", UsernameIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-start"}"><input type="${"text"}" placeholder="${"password"}" class="${"bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"}"${add_attribute("value", password, 0)}>
                        <img${add_attribute("src", PasswordIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-start"}"><input type="${"text"}" placeholder="${"re-enter password"}" class="${"bg-white input w-full text-[#31302e] max-w-xs rounded-full mb-2 shadow-xl placeholder-[#FFAB9F] pl-11"}"${add_attribute("value", password, 0)}>
                        <img${add_attribute("src", PasswordIcon, 0)} class="${"absolute w-8 ml-2 mt-2"}" alt="${"?"}"></div>

                    <div class="${"card-actions justify-center"}"><button type="${"submit"}" class="${"text-[#FFAB9F] text-lg bg-white hover:text-[#31302e] rounded-full px-10 py-2.5 text-center mt-8 mr-2 mb-2 shadow-xl"}"><a href="${"/calendar2"}" class="${"font-extrabold"}">SIGNUP</a></button></div></form></div></div></div></main>`;
});
const Logo = "/_app/immutable/assets/logo-63d340ea.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><body class="${"flex items-center justify-center min-h-screen bg-white"}"><div><div class="${"card grid place-items-center shadow-xl px-3/6 bg-gradient-to-bl from-[#FAE1A7] to-[#FFAB9F]"}"><img class="${"mt-12"}"${add_attribute("src", Logo, 0)} alt="${"ProdoCal"}" width="${"100"}">
                ${validate_component(Logform, "Logform").$$render($$result, {}, {}, {})}</div></div></body></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2aec10c6.js.map
