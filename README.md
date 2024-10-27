# Discord Emoji without Nitro
---

Send animated or not emoji everywhere without using discord nitro.  
Why paying for just using some links ....  
  
## Using
  
To use this extension, just click on the emojis you want in the chat or discord
emojis menu and paste the link in the chat.  

**Be careful, discord only render the picture if the link is lonely in a
message**

## Installing

The addons can be installed from the page
`about:debugging#/runtime/this-firefox`, then click on the button `Load
Temporary Add-On`, and choose the discord-no-nitro-emoji zip file.  
  
The zip file can be obtained from github packages or by packaging the extensions
directly from the source code.

## Packaging

For packaging the project, use this command:

```bash
export VERSION=1.2
zip -r -FS ../discord-no-nitro-emoji-$VERSION.zip icons/ manifest.json main.jsA
```

## Version
  
v1: copy emoji from emoji menu into the clipboard  
v1.1: copy emoji from chat into the clipboard  
v1.2: code refactored + optimized  
