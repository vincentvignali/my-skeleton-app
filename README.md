# Prototype SvelteKit & PocketBase Projet
Stack :
- SvelteKit as the MetaFramework (w/ Typescript)
- Svelte as the Component Framework 
- Skeleton as UI Library.
- PocketBase as a BackEnd

## Projet Development
Once you have installed your pocketBase along with this repo, run the following :

`make -s appStart`

It will start both svelte server and pocketBase for you.
Find the local urls in the terminal tabs the previous command just opened.
## Backend 
The Backend itself is the server side environment allowed by svelteKit. If you are beginner to svelte, just keep in mind these are the two point in the repo where server side code happens :

- Within the route folder :
    - Any file nammed +page.server.ts or +layout.server.ts

- Within the lib folder :
    - Any file nammed with the following extension'.server.ts' It can be a standalone api endpoint, a page.server.ts or a layout.server.ts

These piece of Server side code are interacting with pocket base.

Svelte front-End <=> Svelte Backend <====> PocketBase

Here is the dataFlow from a page 

The 

PocketBase instance hosted on Pocket.io
Pocket.Io dashboard : `https://pockethost.io/dashboard`
PocketBase Dashboard : `https://pocket-piton.pockethost.io/_/#`
## Deployment deploy
This tool can be used to manually sync Schmea between local and prod database
`https://candid-daffodil-9a4d11.netlify.app/`
The app is hosted on vercel : 
`https://my-skeleton-app-vincentvignali.vercel.app/`

Push a commit on master to trigger the continuous deployment.

