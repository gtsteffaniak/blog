---
title: "Why Microsoft's strategic choice to use Go for Typescript compiler matters"
date: 2025-03-13
visible: true
tags:
 - news
 - filebrowser
categories:
 - technology
 - development
image: "/blog/posts/2025/04_typescript_port_go/banner.jpeg"
---


Microsoft gave a surprise announcement recently: they are [porting the typscript compiler to go](https://devblogs.microsoft.com/typescript/typescript-native-port/)! This is exciting for many reasons but also surprising for many other reasons.


I'll address the central question right from the start - *Why go instead of other languages*? Because go easily allows them to do a *port* of typescript code vs a complete re-write. So, backwards compatibility and the timeline for release is much improved.


Using go makes sense to me: it's a fast, lightweight, proven language that has all the necessary type features needed for the job.


Now, in this article, I want to explain my thoughts on typescript and give some of my opinions on typescript in general.


## Why improving the typescript compiler matters - a lot


Nobody likes waiting.


I have always been hesitant to embrace typescript for my projects. I am fully aware of the benefits of using typescript, but it also has cons that need to be weighed. Many of my projects have very minimal and lightweight frontends. So much so, that I have often opted not to use any framework to build them and use vanilla javascript. Yes, that's right - vanilla javascript. For a very simple reason: I want my build process to be **blazingly fast**. I highly value and prioritize faster developer feedback in the form of fast compile times (one reason I love go!). For a small project, I think the value of fast feedback for changes outweighs the type safety benefits of typescript.


> The moment you include typescript, you need a framework, and your project suddenly balloons in size.


If your project's goal is fast and minimal, typescript is at odds. It needs a typescript-compatible framework to be useful. Otherwise, you have to use the typescript compiler on its own and essentially build your framework around the compiler.


With this in mind, typescript compilation becomes an unfortunate bottleneck in the process. Compling typescript code to javascript increases build time significantly. So, if Microsoft is able to solve the problem, that solves half my issue with typescript.


## Compile time challenges


Let me put this into perspective with a real-world example. I maintain a [fork](https://github.com/gtsteffaniak/filebrowser) of the [filebrowser repository](https://github.com/filebrowser/filebrowser) that is vastly different and superior in many ways.


One of those ways: **compile time**.


When the original repo moved to Vue 3, they also converted most of the javascript to TypeScript- a choice I mostly avoided. This was intentional - because I noticed typscript significantly slowed down build times, I chose to keep the javascript versions mostly the same.


How much slower was it? Well, see for yourself:


### Original Filebrowser frontend build time (mostly typescript)
```
> vue-tsc -p ./tsconfig.tsc.json --noEmit
✓ 1140 modules transformed.
✓ built in 19.12s
```


### Filebrowser Quantum frontend build time (mostly javascript)
```
> vite build
✓ 188 modules transformed.
✓ built in 1.83s
```


That's a **more than 10x improvement**! This means I can make changes and test them much more quickly. Sure, there may be type-related errors in my code, but I will catch them while I debug. It's not ideal, but neither is using typescript.


I had the same problem using Svelte -- I began to prefer Vue3 because I found my Svelte compile times (even without javascript) were quite slow, sometimes taking 10-15 seconds. Using vue3 with similar projects compiled quickly in under 1 second. I view compile time as a top priority, so it's unfortunate that I am limited to using certain frameworks because of it.


## Typescript is currently a catch-22


The benefit of typescript is a bit of a catch-22. Its purpose is to ensure code quality, and it does that job well in many circumstances. If a project is maintained by a team, its "pros" can outweigh the "cons".


However, for independent projects, I believe the cons outweigh the pros. Because, if using typescript slows down development, those type-related bugs could be found with playwright or javascript tests or during local debugging with the time you save waiting for compilation.


So, if typescript slows down developer feedback, it partly defeats the organic developer bug hunt. That's not always the case, but I hope I have made my point that sometimes it is.


## Will I use typescript more when it's faster


The final question is why I'm personally excited for Typescript 7 with faster compile times. Once compile times have been reduced, it opens my options back up I can use more frameworks if the feedback loop is faster. I would much prefer a type-safe language that needs to be compiled first. My main reservation is the build time. And it looks like Microsoft is preparing to fix that!


So, yes -- I can't wait to use Typescript 7.

