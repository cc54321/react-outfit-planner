Build an Outfit Planner App using React.js
● As a user, when I click on any of the fashion style buttons (casual, sport, or formal) the
app should generate a new outfit based on the clothing items in my closet (data is
provided at the bottom).
● Outfits consist of one top, one bottom, and 1 pair of shoes.

Acceptance criteria:
● When a user clicks any of the buttons the app should generate an outfit.
● The outfit should show at the bottom as shown in the design.
● Our app should always pick one top, one bottom, and one pair of shoes. (i.e. there
should never be 2 shirts and no pants).
● Each of the items in the resulting outfit should have a matching dress code. Each
clothing item has a `dressCode` property that we can use to filter down the list of valid
items.
● When we generate a new outfit each clothing item should be picked at random from the
collection of items with a matching dress code.