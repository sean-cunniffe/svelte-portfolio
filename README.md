# Sean Cunniffe Web Portfolio

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/sean-cunniffe/svelte-portfolio/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/sean-cunniffe/svelte-portfolio/tree/master)

## Index

1. [About](#about)
2. [Stack Used](#stack-used)
3. [Development evolution of the web portfolio](#development-evolution-of-the-web-portfolio)

## About

This is the source code for the web portfolio on [seancunniffe.com](https://seancunniffe.com). The app showcases my education, projects I have worked on in the past, and employment experience.

---

## Stack used

![firebase](readme/firebase_28dp.png)

### Firebase

The information on the web portfolio is stored in the realtime database and is fetched during deploy time.

I had past experience with firebase and found it's setup quite simple when using the firebase CLI. The firebase CLI has an emulator feature which emulates the realtime database which helped during development.

![sveltekit](readme/sveltekit_28dp.png)

### Sveltekit

Sveltekit is a frontend framework for developing web apps. Sveltekit helps developers create fast and small packages that makes developing static, CSR, and SSR components easier.

![tailwind](readme/tailwind.png)

### Tailwind

Tailwind is a utility first css framework. It provides the developer with classes keeping the css sheets in the project smaller.

![tailwind](readme/circleCI.png)

### CircleCI

CircleCI is a CICD platform that allows a pipeline to be defined by a yml file. It has a generous free tier that allows me to test, lint, and deploy my web app when a PR is merged to master.

---

## Development evolution of the web portfolio

### First release (SPA)

On my first release I used svelte rather than sveltekit and retrieved the web pages data on the client side. This was a fast way of getting a web portfolio up and running.

-   Why I evolved this setup

    -   The client would make calls to my firebase database to retrieve the data and as all my data was public there was no issue, but if I was to add private data to the database I would have to introduce security rules to the data. I was not 100% confident with using firebase security rules and didnt want to risk exposing information, I would rather the database be not available to the client.
    -   As the system was using CSR there was no data to be indexed by google crawl bots meaning I didnt have a strong google search result. I wanted a way render the data on th server.

### Second release (SSR)

On the second release I switched to SSR using sveltekit. This setup allowed for web crawlers to index my page as all the information is already on the page, and also kept my database information private.

-   Why I evolved this setup

    -   This solution easily solved my issues BUT it introduced a new one... billing 😱. Serverless functions aren't free and I was about to get charged per function call, memory usage, and CPU usage. My function didn't use much memory but used CPU time as the data was retrieved for every request. It wasn't a big issue as my function fell under the free tier but I was still worried about my account getting drained or the web page going down.

### Third release (Rehydration)

On the third release I used rehydration of the entire page (aka static page). I switched the Sveltekit to use a static adapter and the page was hydrated with information from the database during build time.

This setup meant I hadn't dynamic data but as the data didn't change that often it was an acceptable change. I can also create a serverless function that is triggered when the database information changes that triggers the pipeline deploy job; that in turn rebuilds the page with the updated data.
