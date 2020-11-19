# Glungabot
Glungabot is a Discord bot I created to assist in weekly Dungeons and Dragons 5E sessions. It is based on our DM's homebrewed mushroom creatures called Glungablugs, which are mischevious and like shiny things.

Glungabot can roll dice, look up spell descriptions, steal objects, be placated with gold, and send pictures of random dogs or cats.

## Usage
The bot's prefix is `gb.`, and currently Glungabot has the following commands:
| Command | Response |
| --- | --- |
|spell <spell-name>| Sends an embed of the spell's description, components, level, higher level descriptions, etc.|
|r xdxx+/-x| Rolls dice in the provided format. (To roll 1 twenty-sided die plus a modifier of 2, the command is `r 1d20+2`)|
|dog| Glungabot sends a random picture/GIF/video of a dog.|
|cat| Glungabot sends a random picture/GIF/video of a cat.|
|gold|The player's stolen belongings will be returned.|
|help|Displays the help menu.|

## Utilized Technologies

### APIs
Glungabot makes use of the following RESTful APIs to look up spells (using the D&D 5e API), and to get random dog/cat pictures.


### Hosting
Glungabot is hosted using Heroku. 

### Bot Programming
Glungabot is created using JavaScript, Discord.js, and Node.js


