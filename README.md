# Discord Emoji without Nitro
---
![Mozilla Add-on Version](https://img.shields.io/amo/v/discord-no-nitro-emoji)
![Mozilla Add-on Downloads](https://img.shields.io/amo/dw/discord-no-nitro-emoji)
![Mozilla Add-on Users](https://img.shields.io/amo/users/discord-no-nitro-emoji)

Send animated or not emoji everywhere without using discord nitro.  
Why paying for just using some links ....  

**Attention: This extension only works for discord in your web browser, not the application**  

## Using
  
To use this extension, just click on the emojis you want in the chat or discord
emojis menu and paste the link in the chat.  
  
**Be careful, discord only render the picture if the link is lonely in a
message**  
*Tips: You can use markdown image to include your emoji in your message*
```markdown
Your message [.](YOUR EMOJI LINK HERE)
```

## Installing

Discord No Nitro Emoji is now available on the Firefox Add-On Website

[![Download For Firefox](https://img.shields.io/badge/Download%20For%20Firefox-238636?style=for-the-badge&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/discord-no-nitro-emoji/)

For Chrome / Chromium, see below

## Downloading from Github

The zip discord-no-nitro-emoji file can be obtained from github releases or 
by packaging the extensions directly from the source code.

### Firefox

The addons can be installed from the page
`about:debugging#/runtime/this-firefox`, then click on the button `Load
Temporary Add-On`, and choose the discord-no-nitro-emoji zip file.  

### Chrome / Chromium

The addons can be installed from the page `chrome://extensions`, then click on
the slider `Developer Mode` and click on the button `Load Unpack` and select 
the discord-no-nitro-emoji unzipped folder.
  
## Packaging

For packaging the project, use this command:

```bash
export VERSION=1.2
zip -r -FS ../discord-no-nitro-emoji-$VERSION.zip icons/ manifest.json main.js
```

## Version
  
V1: copy emoji from emoji menu into the clipboard  
V1.1: copy emoji from chat into the clipboard  
V1.2: code refactored + optimized  

## License

This extensions is licensed under the [GPLv3.0](https://opensource.org/license/gpl-3-0).
