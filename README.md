
# Fetching from Open Meteo then displaying via Javascript via a Python Web Server On Replit.
<img width="1646" height="602" alt="Screenshot 2026-04-26 7 56 28 AM" src="https://github.com/user-attachments/assets/84acda65-d63d-41f8-8049-9c0247067f32" />

Doing this prework assignment I had a limited network device (not allowed to run RAW js on my device or api calls minus a giant docker headache and firewalls and cloud nightmare) .
To accomodate my limited enviroment without capability to create files that call external sources (Think Android/ChromeOS Browser firewalled limited web only device ecosystem) 
I worked a few hours to go back in time , a years of old braincells kicked in to relearn some basic API calls in javascript, a button via css, and html codin.... Yes .. This took a lot longer without using AI (like 5000x longer i guess) .
( so in order to call out to APIs i have to santize the input coming from open meteo on this network due to security requirements and so on... 
and it would just take 5000x longer than the requirements of this prework. weekend project... and i am working all week this week (allnighter on this)

 So to save time i found a "workaround" solution. "just run it in the cloud" .... Yes.. Cloud hosting a prework.. Here we go.
 SO i started it by Just coding everything by hand on github via the website editor Then I went to replit.com .. Pulled the code in via their import function from this repo
 (yea, you have to wiggle around to avoid a bunch of their AI Features and some UI wonkyness to turn it all off and just load a simple index.html/script.js
 and the templates for .replit files disappeared from previous replit versions i've used so i spent about 2-3 hours trying to figure out how to just load a simple index.html via replit.
 Well it's actually kinda cool how i found a solution to this problem without spending money (yes i had like idk a few dollars i spent on a nice VPN to work on code safely tonight via wireless connection)
 
so i figured out how to make a .replit file and use their Nix based enviroment..

 first i created a .replit file in the github repo.. In the .replit file i load in a recent python version. Second. I use that .replit file and create a python server.  finally i pointed the server at the required entrypoint "index.html"

Amazinly this worked. and i had a HTTPS website via replit's developer website on janeway. (yes!)
 
Finally i got the website to load. yay. It was broken. and that's almost task complete...

but i did have some nice data in my console.

The buttons did not work at this point (kinda documenting the whole journey for everyone that follows my repos at this pioint to laugh with me along the way.
 The first run was a mild success with some bugs.
 
<img width="1843" height="1076" alt="image" src="https://github.com/user-attachments/assets/d43e669c-8ef4-4b70-9aab-30c3687e3b81" />

# The final task Completion run

After a little more tinkering with the font color and figuring out why the open-meteo data wasn't appearing in the UI but only the console

# to get informaiton on open meteo and API specs etc you can find that at their docs here.
https://open-meteo.com/en/docs?hourly=relative_humidity_2m

# Loading the Working Code from Github Into Replit's hosting service for secure sandbox development

So we want to load A webpage with two buttons.A  CSS file to render a color for hovering and a color for stationary status. And a javascript file as well as a .replit configuration file from our github into replit.

# ci/cd 
via replit (see .replit file, go to replit.com disable the ai agent. select import from github, then click the tiny green Run button on the tab console (see screenshots for full guidance)

# Import github

Go to replit main page, click Import Code Or design button

<img width="269" height="282" alt="Screenshot 2026-04-26 8 04 31 AM" src="https://github.com/user-attachments/assets/68269f23-e104-40d2-950c-87e1e29fd9aa" />

Then Click Github, add the github repo url 

Go to Console via the Plus button on the right top of the replit project you created and imported the github to.
<img width="1013" height="274" alt="image" src="https://github.com/user-attachments/assets/a699bc62-1a49-414b-b5c4-755be42b790e" />

Click the Play Button on the top left to run the project , 
<img width="222" height="177" alt="Screenshot 2026-04-26 8 01 42 AM" src="https://github.com/user-attachments/assets/5c40156a-cd41-4009-943f-a6ec39056595" />


then go to Preview (by typing preview into the same page via the Plus Button at the top to see the webpage/and or get the Dev https URL. 
<img width="1013" height="274" alt="Screenshot 2026-04-26 8 11 40 AM" src="https://github.com/user-attachments/assets/12193614-05d0-47d3-ad4b-d0d01f03a5cc" />

You can also click deploy to deploy the project to a domain name if you would like a domain to view the weather for Berlin Germany.

## Success Images
 ![<img width="1646" height="602" alt="Screenshot 2026-04-26 7 56 16 AM" src="https://github.com/user-attachments/assets/83ca0490-141b-4274-95f8-4bfa61659e42" />[main_33_cleaned.py](https://github.com/user-attachments/files/27098988/main_33_cleaned.py)
 
<img width="1646" height="602" alt="Screenshot 2026-04-26 7 56 10 AM" src="https://github.com/user-attachments/assets/7e743447-c004-47b3-ac28-54dbec1952b8" />
Uploading Screenshot 2026-04-26 7.56.28 AM.png…]()

# Summary.

Thanks for reading my read me on desinging a javascript/html/css repo to grab Humidity and temperture from Open Meteo. and Happy Coding.

-- Graylan

