setInterval(function () {
	// Delete lockicon on nitro emote
	document.querySelector('#emoji-picker-grid ul li button [class^="emojiLockIconContainer"]')?.remove();

    //Remove annoying nitro banner that appears when emote is clicked
    document.querySelector("div[class*='emojiPicker'] div[class*='hasTabParentContainer']")?.remove();
    document.querySelector("div[class*='emojiPicker'] div[class*='backdrop']")?.remove();
    document.querySelector("[class^='upsellContainer']")?.remove();
    // Discord crash if bellow removed
    //document.querySelector("[class^='nitroTopDividerContainer']")?.remove();
    // Remove class categorySectionNitroLocked sur ceux ayant la classe les div categorySection*/
}, 100);

setInterval(function () {
	// Add event listener on emote to copy them
    document.querySelectorAll("div[class*='listItems'] div[class*='categorySection'] ul li button").forEach((btn) => {
        if (btn.getAttribute("affected") !== "true") {
            btn.setAttribute("affected", "true");

            btn.addEventListener("click", (e) => {
                let source = e.currentTarget.querySelector("img").getAttribute('src');
                copyTextToClipboard(source)
            });
        }
    });
}, 1000);

async function copyTextToClipboard(textToCopy) {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        }
    } catch (err) {
        console.error(err);
    }
}

// Ajoute un écouteur d'événement de clic au document pour capturer les clics sur les images emoji
document.addEventListener("click", function(event) {
    // Vérifie si l'élément cliqué est une image avec la classe 'emoji'
    if (event.target.classList.contains("emoji")) {
        // Sélectionne le parent (ou ancêtre) ayant un id commençant par 'message-content'
        const parentDiv = event.target.closest("div[id^='message-content']");

        // Vérifie que l'image est bien dans une div dont l'id commence par 'message-content'
        if (parentDiv) {
          	let source = event.target.getAttribute('src');
          	let parsedUrl = new URL(source);
          	parsedUrl.searchParams.set("size", "48");
          	copyTextToClipboard(parsedUrl.toString());
        }
    }
});

// copier le lien dans [class^='markup'] div span span span.text
