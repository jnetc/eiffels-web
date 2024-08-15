const INDEX = "/index";
const LOGGED = "/logged";
const MARKETPLACE = "/marketplace";
let INDEX_PATH = INDEX;
let LOGGED_PATH = LOGGED;
let MARKETPLACE_PATH = MARKETPLACE;
const url = new URL(window.location.href);

if (url.protocol === "https:") {
	INDEX_PATH = "/eiffels-web/index";
	LOGGED_PATH = "/eiffels-web/logged";
	MARKETPLACE_PATH = "/eiffels-web/marketplace";
}

console.log("global", url.protocol);

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const { default: emulate } = await import("./emulate_user_access.js");
		emulate();
	} catch (error) {
		console.log(error);
	}
});
