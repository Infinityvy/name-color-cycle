HOW TO USE:

1. you need twitch prime or turbo so you can change your name to any hex color you wish

2. download the executeable for your respective operating system
  - [Windows](https://github.com/Infinityvy/name-color-cycle/raw/main/name-color-cycle-win.zip)
  - [Linux](https://github.com/Infinityvy/name-color-cycle/raw/main/name-color-cycle-linux.zip)
  - [macOS](https://github.com/Infinityvy/name-color-cycle/raw/main/name-color-cycle-macos.zip)

3. unzip it

4. open the config.json in any text editor and enter [your twitch user id](https://www.streamweasels.com/tools/convert-twitch-username-to-user-id/)

5. - generate your [helix id and token here](https://twitchtokengenerator.com/)
   - click chat bot, then scroll down and make sure under available token scopes at least user:manage:chat_color is set to yes (or just select all, doesnt really matter)
   - click generate token
   - at the top now under generated tokens copy the access token into your config under helix_token and your client id under helix_id

6. (optional) you can set the interval at which color change happens in the config too. the duration is in milliseconds (default:2000)

7. save the config and launch the executable to start the color cycling. simply close it to stop




THIS IS WHAT YOUR CONFIG SHOULD LOOK LIKE:
```json
{
    "user_id": "79576109",
    "helix_id": "gp45235dsxfsdf57esf5se5fs7",
    "helix_token": "xc673se54u354k5d4gr3gdr",
    "change_interval_ms": 2000
}
```
