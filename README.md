# Slug Salt

Testing if Web Application performance has a greater impact on students with traditionally lower scores

## Archetecture
Here is the basic database architecture for the app:
<img src="/docs/dbarchitecture.png">

## Developing

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

## TODO

- [x] Test Component
- [ ] Server Side Questions
  - [x] Bottlenecked Server
  - [ ] Test entered in database
  - [ ] Server Side Validation
    - [ ] Post to Database
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
