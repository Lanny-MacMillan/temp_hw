# Postgres Installation

Postgres is a relational database (as opposed to MongoDB, a non-relational database).  Let's install it:

## Install (Best method for both M1 and Intel Macs)

1. `brew install postgresql`
1. `brew services start postgresql`
1. `psql template1`
1. In psql shell, run `CREATE DATABASE <YOUR COMPUTER USERNAME>;` <-this `;` is very important!

## Alternate Install (not compatible with M1 Macs)

1. Go to https://postgresapp.com/downloads.html
1. Click download button
1. Double click package and follow prompts
1. A new window in the Finder should open up, directing you to drag Postgres to the Applications folder.  Do that.
1. Open up Applications in the Finder.  Find Postgres in the Applications folder and double click it
1. If you don't see and servers in the left column of Postgres:
	1. click `+` in the lower left of Postgres
	1. click `Create Server`
	1. click `Initialize`
1. Click `Start`
1. You should see several sub databases with icons and names.  Double click one
	1. A terminal will open up, running `psql`
	1. To exit `psql` run `\q`

#### Make PSQL accessible in bash

Run

```
ln -s /Applications/Postgres.app/Contents/Versions/latest/bin/psql /usr/local/bin/psql
ln -s /Applications/Postgres.app/Contents/Versions/latest/bin/createdb /usr/local/bin/createdb
ln -s /Applications/Postgres.app/Contents/Versions/latest/bin/pg_config /usr/local/bin/
```

Now you can open up `psql` withought having to use the UI.  `createdb` will create sub databases without using the UI

#### Use Rosetta for M1 Chip Macs

1. Open New Window in Finder
1. Go to Applications folder
1. Open Utilities folder
1. Right click (two finger tap) on Terminal icon
1. Choose Get Info
1. If you see Open Using Rosetta, check that box
1. Restart Terminal if it was open
