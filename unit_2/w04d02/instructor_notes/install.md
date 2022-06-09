# Install Mongo

## Video Link

[Install Mongo](https://www.youtube.com/watch?v=z0-ZjfHnE0s&list=PLdnONIhPScSQqXfMndCJRYWQl-0uApORf&index=7)

## Directions

- Go to https://www.mongodb.com/download-center/community
- Select the version/os/package and download (e.g. use the current release for version and TGZ for package if on mac).
- Unzip the downloaded file.
- In terminal, go to the directory created by unzipping.
	- You'll see a `bin` directory.
	- Run `chmod 777 bin/*`.
- Put those files in `/usr/local/bin/` (you may need to use `sudo`).
- Create `~/dev/data/db` directories.
- Run `mongod --dbpath ~/dev/data/db/`.
- Create a new terminal tab (command+T).
- In this new terminal tab, run `mongo`.
