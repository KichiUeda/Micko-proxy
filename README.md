# Project Name

> A product page mock-up of Humble Bundle, using micro-services for each components. This proxy uses React and Styled-Components for styling. The Navigation Bar and Footer are the only thing that are implemented in this proxy page. Everything in the Nav bar and Footer are all static and have no functionalities. This proxy is for demonstration purposes only and showcases our team's micro-services.

## Related Projects

  - https://github.com/KichiUeda/price_and_promotion
  - https://github.com/KichiUeda/other_popular_games
  - https://github.com/KichiUeda/Chris-app-service-overview
  - https://github.com/KichiUeda/Chris-app-service-traits
  - https://github.com/KichiUeda/Rane-app-description-service
  - https://github.com/KichiUeda/Rane-related-content
  - https://github.com/KichiUeda/Micko_App_images_service (my micro service)
  - https://github.com/KichiUeda/legal_service (my micro service)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Clone this repo

> npm install // to install all dependencies

> npm run build // for development webpack bundles

> npm run production // for production webpack

> npm start // to start application server - port set to ```process.env.PORT_PROXY```


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Running ```npm install``` will download all required dependencies

## Development

This single page application uses micro-services for individual components that are rendered on the page.

All micro-services are linked on top of the page.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

