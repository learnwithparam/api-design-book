# API Design for Beginners

Source code for the API design for beginners book.

## Prerequisites

- [git](https://git-scm.com/) v2 or greater
- [Node Js](https://nodejs.org/) v8 or greater
- [yarn](https://yarnpkg.com/lang/en/) v1 or greater (or [npm](https://www.npmjs.com/) v6 or greater)
- [postgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) v11 or greater

All of these must be available in your PATH. To verify things are set up properly, you can run this:

```
git --version
node --version
yarn --version # or npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or [mac/linux](http://stackoverflow.com/a/24322978/971592).

A good code editor like [VS Code](https://code.visualstudio.com/) is preferred.

### Installing postgres

Postgres is little tricky to install and get it running. You can [download it here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) and follow the steps for respective OS.

For installing postgres in respective OS,

- For [windows](https://www.enterprisedb.com/edb-docs/d/postgresql/reference/manual/12.1/install-windows.html)
- For [macOS](https://www.enterprisedb.com/postgres-tutorials/installation-postgresql-mac-os)
- For [linux distribution](https://www.enterprisedb.com/postgres-tutorials/how-install-postgres-ubuntu)
- Using [docker](https://www.enterprisedb.com/postgres-tutorials/how-install-postgres-docker)

For connecting to postgres, check the guide [here](https://www.enterprisedb.com/postgres-tutorials/connecting-postgresql-using-psql-and-pgadmin).

## Run the API server

For running the final project,

```bash
npm install # install the node modules
npm start # start the server locally on port 6060
```

## Code for each chapter

You have the source code for all chapter. You can go to any chapter code in the folder `code/<chapter-name>`.

Then run the server. It will show the output specific to that chapter.
