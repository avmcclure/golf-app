# snack-react-app

Personal React Template to save me time setting things up.

## Current commands
- `npm run test`
  - runs mocha
- `npm run build`
  - runs webpack build to publish bundle.js in dist/
- `npm run dev`
  - runs `build` and webpack-dev-server to launch your app on localhost:8080/webpack-dev-server
  - You need to copy the `index.html` file from src/ to dist/ after build and make sure the `script` points to `bundle.js`
- `npm run linter`
  - runs eslint ignoring /node_modules/, /dist/, and webpack.config.js

### To-Do
- Add coverage and coverage report for testing to set threshold for 100%
- Think of other things I usually use and add those as well
