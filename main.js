/* Remove nitro things from discord emojis menu */
const emojiPickerObserver = new MutationObserver(() => {

    // Select objects to remove
    const selectors = [
        '#emoji-picker-grid ul li button [class^="emojiLockIconContainer"]',
        "div[class*='emojiPicker'] div[class*='hasTabParentContainer']",
        "div[class*='emojiPicker'] div[class*='backdrop']",
        "[class^='upsellContainer']"
    ];

    // Search and delete objects
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => element.remove());
    });
});

/* Function to copy emojis link into the clipboard */
async function copyTextToClipboard(textToCopy) {
    try {
        await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
        console.error("Error while copy in the clipboard : ", err);
    }
}

/* Add event on each emoji on emojis menu to copy them into the clipboard */
const emojisObserver = new MutationObserver(() => {
    document.querySelectorAll("div[class*='listItems'] div[class*='categorySection'] ul li button:not([affected])")
        .forEach(btn => {
            btn.setAttribute("affected", "true");

            btn.addEventListener("click", (e) => {
                let source = e.currentTarget.querySelector("img").getAttribute('src');
                copyTextToClipboard(source);
            });
        });
});

/* Copy emojis from chat when clicked on */
document.addEventListener("click", function(event) {
    const emojiImage = event.target;
    
    if (emojiImage.classList.contains("emoji")) {
        const parentDiv = emojiImage.closest("div[id^='message-content']");
        
        if (parentDiv) {
            let source = emojiImage.getAttribute('src');
            let parsedUrl = new URL(source);
            parsedUrl.searchParams.set("size", "48");
            copyTextToClipboard(parsedUrl.toString());
        }
    }
});

/* Check change in DOM to run functions if needed */
emojisObserver.observe(document.body, { childList: true, subtree: true });
emojiPickerObserver.observe(document.body, { childList: true, subtree: true });
