const aInput = document.getElementById("a");
const bInput = document.getElementById("b");

if (!(aInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'a' found");
}
if (!(bInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'b' found");
}

aInput.addEventListener("input", () => {
	bInput.value=((parseInt(aInput.value)-32) * 5/9).toString()
});
bInput.addEventListener("input", () => {
	aInput.value=((parseInt(bInput.value)-32) * 5/9).toString()
});
