export function closeDialog(dialog) {
	document.body.removeAttribute("style");
	dialog.close();
}
export function openDialog(dialog) {
	document.body.style.overflow = "hidden";
	dialog.showModal();
}
