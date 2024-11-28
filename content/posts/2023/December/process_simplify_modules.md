---
title: Simplifying frontend frameworks
date: 2023-12-24
tags:
  - javascript
  - npm
categories:
  - technology
  - development
theme: snow
visible: true
---

## Introduction

I wrote an/other [post](/blog/posts/2023/october/dependency-on-dependencies) about
the frustration I have with frameworks in modern frontend software development.
The fast pace of change is hailed as the consequence of the innovative field of
front-end frameworks. It's a running joke that there's 10 new frameworks every
day. But I disagree this is simply a necessity of innovation.

Frontend frameworks evolve and change primarily because there is not and has
never been one good way to use javascript. No matter how flawed javascript is as
a programming language, it's biggest flaw is that it was woefully incomplete
from it's inception. The,re has never been good tooling for javascript. So this
massive void is constantly being filled with good-but-not-perfect solutions.
Heard of these: npm ? yarn? webpack? rollup? vite? bable? eslint? vite?
Typescript? I could go on and on. All these things that are typically built-in
to a language are all separate installable packages which are managed by
third-party maintainers. These maintainers have no obligation to keep up with
javascript changes or more devastatingly, changes to other tooling for
javascript. This compounds the main problem I have with frontend development...
Your frontend project will inevitably be crippled by incompatibilities. A
project is inevitably doomed to aging out due to vulnerabilities and old
tooling.

Maybe you retort, "Don't be a developer if you can't handle it!"? Well, that may
be true from a certain perspective. However, look at other languages -- C, C++,
Golang, Rust, Java, C# (and many more) -- can exist for decades and be easily
updated to new versions. They don't have this problem. I would actually say
(this leads to one of the ways I could deal with this), vanilla javascript also
fits into this category. decades old vanilla javascript projects still work --
they are simple to update for vulnerabilities. Vanilla javascript is one
solution to the framework issue. Albeit not the best solution, it does solve the
problem.

I have used vanilla javascript in a hackathon project at work to get an up and
running project going within a week. It worked great and was incredibly simple.
Yet, I had one coworker laughingly ask be if I really used vanilla javascript. I
said, "yes, it works very well for this". A hackathon project is the perfect
scenario to skip a framework and just get something working.

A project becomes a devastatingly complicated web of
dependencies that needs solving if you want your project to continue on without
being marked legacy with thousands of vulnerabilities.

I maintain a fork of filebrowser/filebrowser, which I find entertaining to watch
their [effort](https://github.com/filebrowser/filebrowser/pull/2645) to upgrade
from vue2+webpack to vue3+vite. They have a multitude of half-implemented
attempts to get there. And another [main vue3
PR](https://github.com/filebrowser/filebrowser/pull/2689) which is in a
perpetual state of change for 6 months (still unmerged).

So, how did I handle this? Well, see [my process below](#process-for-filebrowser), but
let me give a few examples. For now I want to dig into the problem more and what
I believe is *my solution*, which may not be yours because the problem is
systemic. The problem is javascript is a deeply flawed programming language
which is essential use to develope frontend webpages.

As an aside, some have said webassembly may solve this. I believe webassembly
will have a legacy similar to fusion energy -- always being a few years out of
reach. My experience of webassembly has been full of frustration, but I could see
it being simplified in the future. However, I truly see it following the exact
same path as javascript. Meaning I see there being some usefully ways to
implement webassembly, but without a standardized way to implement it will be
doomed to fragmentation.

## examples

### Process for filebrowser

My fork of filebrowser is superior to the original. Obviously, I am biased as
the maintainer. However, look - mine is [half the
size](https://hub.docker.com/layers/gtstef/filebrowser/latest/images/sha256-6574d5f4890a6a0aa2d995b9fd8856418b6fef34e3bdf774ae02cc209c78e650?context=repo)
of the
[original](https://hub.docker.com/layers/filebrowser/filebrowser/latest/images/sha256-0e0a4b700302457772b07c4efc47bc90143d7538d36731baabcf7d375360bcee?context=explore),
runs faster, has better search, and is a better organized project from a
directory and tooling standpoint. Unlike the original, I can progressively
update and test the backend and frontend side-by-side in a live hot-reload
environment. This can't be done in the original implementation because they made
the choice to embed the frontend into the binary. I immediately separated them
after I forked it. That way neither the frontend or backend were dependant on
each other.

Obviously, a streamlined developer experience is a priority for me. So, how do I
handle updating the framework update to vue3? Well, originally I ignored it...
And Still, I have not updated it. But I am preparing. Rather than untangling

There is one example such as prettBytes module, which changed and caused the
filebrowser to stop displaying properly. The original repo maintainers [updated
it](https://github.com/filebrowser/filebrowser/pull/2779) to support the new
version of prettier. I did it differently, I replaced prettyBytes and
implemented it as [vanilla
javascript](https://github.com/gtsteffaniak/filebrowser/blob/main/frontend/src/utils/filesizes.js)
in 5 minutes.

So to migrate to vue3, my plan is to remove all modules with dependencies
requiring vue2 and instead of replacing them with new modules like the original
maintainers, I will implement it myself slowly over time removing all modules
from the dependencies. I am in no hurry! It will be worth the effort and I see
no need to move to vue3 now or in the future until my finally ocker images have
vulnerabilities. Right now they are squeaky clean - unlike the original which
has 12 vulnerabilities. Albeit, due to golang and OS... which I updated on the
first day. Not sure why they haven't addressed that.


Anyways, the only vulnerabilities in the workflow are due to npm packages for
dev tools only (not present in compiled output). These can't be resolved until I
stop using vue 2:

```bash
npm i

up to date, audited 766 packages in 4s

101 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities
```

so I created a copy `package.json` with comments to note which packages I need/plan to remove:

```json
{
  "dependencies": {
    "ace-builds": "^1.24.2",
    "clipboard": "^2.0.4",
    "css-vars-ponyfill": "^2.4.3",
    "file-loader": "^6.2.0", // UNNECESSARY IN VITE
    "js-base64": "^2.5.1", // REPLACE WITH EQUIVALENT JS
    "lodash.clonedeep": "^4.5.0", // TOO OLD - REPLACE WITH JS
    "lodash.throttle": "^4.1.1", // TOO OLD - REPLACE WITH JS
    "material-icons": "^1.10.5",
    "moment": "^2.29.4", // REPLACE WITH EQUIVALENT JS
    "normalize.css": "^8.0.1", // REPLACE WITH EQUIVALENT JS
    "noty": "^3.2.0-beta", // REPLACE WITH EQUIVALENT JS
    "pretty-bytes": "^6.0.0", // REPLACE WITH EQUIVALENT JS
    "qrcode.vue": "^1.7.0", // UPDATE TO LATEST for VUE3
    "utif": "^3.1.0", // SPIKE investigate replacement
    "vue": "^2.6.10", // UPDATE to vue 3
    "vue-async-computed": "^3.9.0", // REPLACE WITH EQUIVALENT JS
    "vue-i18n": "^8.15.3", // REMOVE
    "vue-lazyload": "^1.3.3", // REMOVE
    "vue-router": "^3.1.3", // UPDATE to vue 3 @vue4 https://www.npmjs.com/package/vue-router
    "vue-simple-progress": "^1.1.1", // REPLACE WITH EQUIVALENT JS
    "vuex": "^3.1.2", // SPIKE: HOW TO REMOVE
    "vuex-router-sync": "^5.0.0", // SPIKE: HOW TO REMOVE
    "whatwg-fetch": "^3.6.2"
  },
  "devDependencies": {
    "@vue/cli-service": "^5.0.8", // REMOVE for VUE3
    "compression-webpack-plugin": "^10.0.0", // REPLACE VUE3
    "eslint": "^8.51.0",
    "eslint-plugin-vue": "^9.17.0",
    "vue-template-compiler": "^2.6.10" // REPLACE VUE3
  }
}
```

You can see I plan to remove the vast majority of packages. That is one solution
I have to this. As always, this doesn't fully resolve the long-term
maintainability problem. But it does do one thing, it means when the day comes I
need to change frameworks, it will be much simpler because my frontend won't
depend on packages that depend on a certain framework.

The next perfectly reasonable package to drop will be js-base64 which... not
sure why they needed considering javascript has native base64 encoding/decode
support.

To make this work, I would just update this:

```javascript
import { Base64 } from "js-base64";
const data = JSON.parse(Base64.decode(parts[1]));
```

to this:

```javascript
const data = JSON.parse(atob(parts[1]));
```

Do you see that? In order to remove one more package, I spent 5 seconds
replacing one line. Not all packages will be that easy, but that's still one less
package to worry about. Why didn't the original owners do that? Probably because of
laziness. They chose to searching the package manager for a solution to their
problem rather than spending a few seconds or minutes to see if they could do it
themselves. Lazy lazy lazy.

That was so easy lets do another right now. Lets look at prettyBytes, a very
similar problem to one I mentioned already with prettier - oh look I already have my own library.

So to remove this module I can just change this:

```javascript
import prettyBytes from "pretty-bytes";
usageStats = {
    used: prettyBytes(usage.used / 1024, { binary: true }),
    total: prettyBytes(usage.total / 1024, { binary: true }),
    usedPercentage: Math.round((usage.used / usage.total) * 100),
};
```

to this:

```javascript
import { getHumanReadableFilesize } from "@/utils/filesizes";

usageStats = {
    used: getHumanReadableFilesize(usage.used / 1024),
    total: getHumanReadableFilesize(usage.total / 1024,),
    usedPercentage: Math.round((usage.used / usage.total) * 100),
};
```

Wow. So easy, right? Well, thats two packages less... These are the easiest
examples to do. Many others will be much more difficult. However, I am in no
hurry. Everything still works on vue2 , but I would like to get rid of the pesky
github bot complaining about vulnerabilities. I will eventually fix it, but over
time, slowly, over multiple commits. Hopefully that will allow me to avoid the
problem the original maintainers have trying to merge the big PR thats stuck in
limbo.

## Final thoughts

As for lessons for the future - Always think about how long you want your
project to exist. The more maintenance that is required, the more quickly it
will fall into disrepair. I will continue to think about ways to implement
simple, natively supported solutions to challenges. I think this will save me
time and keep my projects living longer on their own.
