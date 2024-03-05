# Slug Salt

Testing if Web Application performance has a greater impact on students with traditionally lower scores

## Archetecture
Here is the basic application flow and database architecture for the app:
<img src="/docs/dbarchitecture.png">

## Benchmarks
Because of the Research Question the project's goal is to solve, here are the lighthouse scores of the control and bottlenecked versions of the test

### Control
<img src="/docs/PerfOfControl.png">

### Bottle Necked
<img src="/docs/PerfofBottled.png">

## Developing

```bash
pnpm run dev

## Building

To create a production version of your app:

```bash
pnpm run build
```

You will need a database, and a Google OAuth token and secret.
This code uses turso which needs a url and token in .env, you can get these using the cli.

Your .env should look like this for the application to work:

```.env
TURSO_URL=YAPYAPYAP
TURSO_TOKEN=YAPYAPYAP
GOOGLE_CLIENT_ID=YAPYAPYAP
GOOGLE_CLIENT_SECRET=YAPYAPYAP
```

## Conclusion
The AP Research method this web application was created for is complete! Here is the results also available at <a href="https://slugsalt.com/about">the about page.</a>

<img src="/static/chart.png>

If you are aiming to reproduce the method, the version of the application used for actual testing is on commit <a href="https://github.com/WittySmirk/slugsalt/commit/940d279d4fcdb415f670d150142e53197db4f38d">940d279.</a>

## TODO

- [x] Test Component
- [X] Server Side Questions
  - [x] Bottlenecked Server
  - [X] Test entered in database
  - [X] Server Side Validation
    - [X] Post to Database
- [X] Authentication
  - [x] Google OAuth
  - [X] Whitelist
  - [X] Middleware based on User
- [x] Styling
  - [x] Home Page
    - [x] Login Button
  - [x] Test Component
    - [x] Custom Radios
    - [x] Spacing
    - [x] Submit button
    - [X] Support for essays
    - [X] Persistent timer
