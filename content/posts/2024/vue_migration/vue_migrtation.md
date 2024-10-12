---
title: "Migration experience for vue 2 to vue 3"
date: 2024-10-12
visible: true
tags:
  - vue
  - filebrowser
categories:
  - technology
  - development
image: "posts/2024/vue_migration/banner.png"
---

I wanted to write about the experience of migrating the [FileBrowser Quantum](https://github.com/gtsteffaniak/filebrowser) from vue 2 to vue 3 because it took a lot of strategy to do smoothly. I enjoy working with Vue but the experience of moving between versions was quite bad.

The [original filebrowser application](https://github.com/filebrowser/filebrowser/pull/2689) took almost 1 year to complete the migration and I forked the repo in the middle of the migration before it was finished. In hindsight, I am still glad for this, because it gave me valuable experience in migrating a large Vue application and the opportunity to think about components that were not needed.

I [wrote about](https://gportal.link/blog/posts/2023/october/dependency-on-dependencies/) my ire for unnecessary dependencies which node modules are a big part of. I later [wrote about](https://gportal.link/blog/posts/2023/december/process_simplify_modules/) some things I did to simplify the application so migration could be more easily done. This is the final post I will make about my experience finishing it.

## Why it took so long

I was mostly to blame for the delay. Sure, it took me less time than the original repo, which had one [primary migration PR](https://github.com/filebrowser/filebrowser/pull/2689) which took 8 months to merge! My problem was that I kicked the can down the road and said I would handle it later after a couple of different attempts I made in a day were insufficient. So, I left it alone, until I realized I lost interest in developing the repo because I knew I needed to migrate and that was always in the back of my mind.

So, in [version v0.2.6](https://github.com/gtsteffaniak/filebrowser/releases/tag/v0.2.6) I finally completed the migration!

## How I handled the migration

In my previous posts, I mentioned I would choose a *reduction first* strategy. I removed many unnecessary dependencies by replacing them with a few lines of simple code that accomplished the same thing:

First, in [version v0.2.6](https://github.com/gtsteffaniak/filebrowser/releases/tag/v0.2.6), I started preparing for the migration:

```
In prep for vue3 migration, npm modules were removed:
js-base64
pretty-bytes
whatwg-fetch
lodash.throttle
lodash.clonedeep
```

Then, in version `v0.2.6` I finished the migration:

```
removed npm modules:
vuex
noty
moment
vue-simple-progress
```

In total there were 9 different dependencies were removed. All of which would have complicated the migration if I chose to keep them around. It also helped reduce bundle size, making the site just a little bit quicker.

Ultimately, the Vue 3 challenges were quite minimal (besides dependencies). There were a few state-related changes and the switch to vite was the most significant. However, the biggest hurdle (unrelated to vue itself) was that dependencies **had their own dependencies** that required certain vue versions. Which is, in my opinion, the worst part of a tech stack... untangling the web of dependencies.

## After the migration 

Once the migration was complete, I was able to make a lot of great changes very quickly. It's very clear that having a site held back by old versions slowed down my interest in the site and my morale. I learned a lot about what to do and not to do, but overall I feel pretty happy with how it went.

Take a look at how much faster [The releases](https://github.com/gtsteffaniak/filebrowser/releases) have been since the migration:

2024 FileBrowser Quantum Releases Summarized:
|date|version|change|
|---|---|---|
|Feb 9th|v0.2.4| prepped for migration, some sharing features|
|June 12th|v0.2.5| a minor bugfix... |
|July 30th|v0.2.6| The migration was completed! Yay! |
|Aug 3rd  |v0.2.7| behavior changes, bugfixes |
|Aug 24th |v0.2.8| LOTS |
|Sept 17th|v0.2.9| LOTS |
|Oct 7th  |v0.2.10| Folder size feature, bugfixes |


You can see the pace **clearly** picked up! In the first half of 2024, I didn't make any significant changes. Once the migration was completed, I was able to work on a lot more things.

I am glad its all done and looking forward to making some of the more meaningful changes that I have wanted to do for a while.