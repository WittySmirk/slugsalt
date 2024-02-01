# Slug Salt

Testing if Web Application performance has a greater impact on students with traditionally lower scores

## Archetecture
Here is the basic database architecture for the app:
<img src="/docs/dbarchitecture.png">

## Benchmarks
Because of the Research Question the project's goal is to solve, here are the lighthouse scores of the control and bottlenecked versions of the test.
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
