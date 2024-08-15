const INDEX = "/index";
const LOGGED = "/logged";
const MARKETPLACE = "/marketplace";
const url = new URL(window.location.href);

console.log(window.location.href);

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const { default: emulate } = await import("./emulate_user_access.js");
		emulate();
	} catch (error) {
		console.log(error);
	}
});
