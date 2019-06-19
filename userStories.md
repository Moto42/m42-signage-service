# User Stories

## Signs
- I can display a sign on a monitor, by opening a browser and navigating to a specific URL.
- When a sign is being displayed, it will rotate through a series of 'slides', displaying one after another.
- - I can set the slides to appear sequentially, or in random order.
- When a sign's page is opened, it will automatically go full-screen.
- - I can override this behavior with an option in the slideshow's settings.

## User Control Panel.
- I can create new slideshows using a GUI from the control panel.
- When I make changes to an existing slideshow, those changes will be pushed to the signs using that slideshow;
- I can see a list of all currently active and registered signs
- I can change which slideshow a particular sign is showing from the control panel.

### Templates
- All Templates will have sensible default values for any required options, such that, should they not be provided, the slide will render correctly and the app will not crash.
#### Markdown
- The Markdown Template will receive a markdown string and render it on screen with the correct formatting.
#### Weather
- The Weather Template displays current and forcasted weather conditions for a given area.
- The Weather Template accepts a location.
- The Weather Template will update it's information as a reasonable interval, **not** every time it renders on screen.
#### Stock
- The Stock Template displays the current stock price for a given ticker symbol
- The Name of the company and some other relevant information that can be gleaned from API will also be provided.
- The Stock Template will update it's information as a reasonable interval, **not** every time it renders on screen.
#### Map
- The Map Template will display an image, which should be a map of the location.
- Optionaly the Map Template may display a 'you are here' dot on the Map image
- - This dot's position is defined by a an [x,y] value in terms of it's pixel position on the map image provided.
- - If that value is not provided or invalid, the default behavior will be to not render the 'you are here' dot.

# Random Devthoughts

Ok, so we have 2 front ends, the administrative web-app, the signage, and the user-accounts that allow them to update their signs.

## Signage
This is the 'front end' that actually displays the signs
Ok, so the MVP for the front end would fetch a JSON array defining the slides,
look at the template type for each one, and render them in order.

So.... a React app, so each Template can be a separate component.

First template will be templates/Markdown.jsx
