# Embroider/PNPM peer resolution issue
In work to convert our Ember apps to Embroider, I've come across an issue where the build errors with: 
`Some V1 ember addons are resolving as incorrect peer dependencies. This makes it impossible for us to safely convert them to v2 format.` despite having matching versions.

```
my-app@0.0.0 -> @myOrg/my-addon@14.2.21
    sees peerDep ember-source@4.12.4
      at /path/to/monorepo/node_modules/.pnpm/ember-source@4.12.4_@babel+core@7.24.9_@glimmer+component@1.1.2_@babel+core@7.24.9__@glint+template@1.4.0_webpack@5.92.1/node_modules/ember-source
    but my-app@0.0.0 is using ember-source@4.12.4
      at /path/to/monorepo/node_modules/.pnpm/ember-source@4.12.4_@babel+core@7.24.9_@glimmer+component@1.1.2_@babel+core@7.24.9__@glint+te_d57u3ixfkr4qimpfqyd7ephogm/node_modules/ember-source
```

You can see they are both resolving `ember-source` at v4.12.4 however it doesn't connect them due to PNPM's structuring, having 2 copies in `./pnpm`. I have gone through [all of the suggested resolutions in the Embroider docs](https://github.com/embroider-build/embroider/blob/main/docs/peer-dependency-resolution-issues.md) and nothing works (delete lockfile & start over, auto-install-peers=false, dedupe).

This repo aims to be a reproduction of this issue. 

## Reproduction steps

- Run `pnpm install` to install all Node packages in repo. 
- Run `pnpm --filter my-app build-dev` to build the app using Embroider
- Observe