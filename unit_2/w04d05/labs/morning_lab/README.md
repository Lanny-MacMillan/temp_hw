# Intergalactic Bounty Hunter Database

![](https://snworksceo.imgix.net/car/614a86c8-405f-4fd8-b60d-93998c769661.sized-1000x1000.jpg)

You've been going to meetup events and networking. You've been telling everyone you're so excited to get a dev job that you'll take _any job_.

You run into a shadowy stranger, who asks you three times 'Really? Any job?' and you continue to agree enthusiastically. Things go dark, and you wake up in a strange place.

The shadowy stranger greets you and says 'Welcome to your new job! You are now our dev who will be building an intergalactic bounty hunter database for us!'

You look around, notice some high end coffee and tea machines, an air hockey table, nap rooms and floor to ceiling windows with a view of outer space. The shadowy stranger takes you to your desk which has a fancy sit-to stand adjustable hight desk with a swing bar, two big monitors, and Herman Miller chair. You say to yourself 'Not bad! Not bad at all!'

---

## Set up

1. Start `Mongo`, by typing `mongod`, if you don't already have it running.

1. Open a new tab and start a Mongo shell if you don't have it running by typing `mongo`

1. Connect to a new sub-database by typing `use hunters`

    * If this database does not exist, it will be created

1. Let's create a collection for all the beings that have bounties.

    ```js
    db.createCollection('bounties')
    ```

1. We should get an `ok` message.

## Create/Insert

Let's add our first bounty

```js

db.bounties.insert(
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Boba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  }
  )
```

You should get an ok message that looks similar to this:

![Insert ok](https://i.imgur.com/KdFh4Ss.png)

Using the above template, make another bounty

Now insert a few more bounties

```js

db.bounties.insert([
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Boba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  },
  {
    name: 'Rocket',
    wantedFor : 'Stealing Batteries',
    client : 'Ayesha High Priestess of the Sovereign',
    reward : 1000000000,
    ship: 'The Milano',
    hunters :['Nebula', 'Ravagers'],
    captured: false
  },
  {
    name: 'Sara Lance',
    wantedFor : 'Screwing up the timeline, causing anachronisms',
    client : 'Time Bureau',
    reward : 50000,
    ship: 'Waverider',
    hunters :['Chronos'],
    captured: false
  },
  {
    name: 'Malcolm Reynolds',
    wantedFor : 'Aiming to misbehave',
    client : 'The Alliance',
    reward : 40000,
    ship: 'Serenity',
    hunters :['Jubal Early'],
    captured: false
  },
  {
    name: 'Starbuck',
    wantedFor : "Disobeying Captain's orders",
    client : 'Captain Adama',
    ship: 'Demetrius',
    reward : 1000,
    hunters :['Apollo'],
    captured: true
  }
])
```

## Read/Query

1. Do a query to see all the bounties.
1. Do a query to find the bounty whose client is `Time Bureau`.
1. Do a query to find the bounties who have been `captured`.
1. Do a query specific to the bounty you inserted.
1. Do a query to just return the names of all the bounties.

## Remove

1. Starbuck and the Captain have come to an understanding. Remove her record.
1. find and remove the duplicate record - be sure to JUST remove the one copy.

## Update
Update `Sara Lance`'s name to be her superhero alias 'White Canary'.

Update Rocket's ship to be `The Milano 2`.

---

## Hungry for More - Intermediate Mongo

Find the [INTERMEDIATE_MONGO.md lecture notes](../../instructor_notes/Advanced%20Mongo/2.%20INTERMEDIATE_MONGO.md) in the instructor notes directory. Follow through each of the explanations. Follow the commands and perform appropriate finds after each update call to see the results:

1. Find the bounties that are greater than `100000`.
1. Find the bounties that are less than `1000`.
1. Find the bounties that are less than or equal to `1000`.

1. Find the bounty with the hunter `Nebula`.
1. Find the bounty with the ship `Waverider` OR `Serenity`.
1. Find the bounty who is not captured AND has whose client is `Ayesha High Priestess of the Sovereign`.
1. Increase all the bounties by 333333.
1. Multiply all the bounties by 2.
1. Add `Boba Fett` as a hunter for `Malcolm Reynolds`.
1. Add `Boba Fett` as a hunter for the one that has the ship. `Waverider`
1. Find and remove `Dengar` the bounty hunter.
1. Upserts will insert a value if it doesn't exist, if it does it will update it.
1. Try giving a new field of `lastSeen` to Han Solo, with the property `yesterday` set upsert to true.
1. Try giving all bounties a new field of `lastSeen` - with a value of `last week` and set upsert to `false`.
