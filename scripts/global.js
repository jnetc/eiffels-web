document.addEventListener("DOMContentLoaded", async () => {
	try {
		const { default: emulate } = await import("./emulate_user_access.js");
		emulate();
	} catch (error) {
		console.log(error);
	}
});
