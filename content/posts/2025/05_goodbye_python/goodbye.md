---
title: "I'm sorry, Python, it's time to say 'goodbye'."
date: 2025-04-05
visible: true
tags:
 - python
 - go
categories:
 - technology
 - development
---


I have noticed something recently that I want to talk about. When I start new projects, I usually have an idea and implement it in Python. I used to say "I love Python for prototyping", but even that has become less useful than starting with Go. Now, every time I try to do something in Python, all of the quirks of Python (and its slowness) cause me to switch to Go in the same working session. This has happened so many times, I just need to give up on my preference for Python.


## What went wrong


In summary, two problems:


 1. It's slow and buggy
 2. The developer feedback advantage [that I love so much](https://gportal.link/blog/posts/2025/04_typescript_port_go/typescript_go/#why-improving-the-typescript-compiler-matters---a-lot) is gone.


Every simple task I want to do in Python gets derailed immediately. Web crawler? It's simply too slow. Data processor? The data type and validation features take too long. Multi-service healthcheck? works for one at a time, but then multiprocessing is so catastrophically bad in Python, it's easier to switch to Go.


Then there's the dev process. I am a fan of fast developer feedback, and Python always came out on top because of its interpreted nature. I could modify the code and immediately run it again. But I have noticed I end up spending more time re-running because of dumb typos and little errors that I don't see until the code block is executed in Python, so it's not an advantage anymore. Go is compiled and compiles *quickly*. It gives me instantaneous feedback when there are typos or when a function isn't returning the right data type.


Then, there's Docker... I use Docker a lot. How can installing and compiling code be faster for a Go Docker image than an interpreted Python image? I can't believe it, but it is.


Every major advantage of Python is gone. All except one -- which I will talk about later.


## Developer Experience


Let's list some problems with Python:

  - **Getting started:** When I prototype a project, Python starts with nothing. I have to pick the package manager... just requirements.txt? pipenv? poetry? uv? anacanda? Ok, just starting out, how about just a virtual environment?. Then what version of Python? The fragmentation of compatibility is quite exhausting.
  - **Validation:** Sure, you can lint and add VSCode plugins to help validate your code before running, but it's another extra step that doesn't come for free with the Python interpreter.
  - **Packaging:** How the heck should I "package" this for consumption? Docker makes the most sense, covering the most ground, and does solve a lot of my problems. But it requires WSL for Windows and an extra layer there. The build process and virtual env behavior for Docker is sometimes tricky to get working exactly right.
  - **resource usage:** Python can be lean and simple when run natively as a script on a host. And in the past, a Python Docker image was only 50 MB as a minimum. But now the Python slim images are 200MB plus your package code, which usually doubles the size.




Why does Go do it better?

  - **Getting started:** Go is a simple binary compiler and linter program that does everything out of the box. You can always use the latest Go binary, and it has guaranteed backwards compatibility.
  - **Validation:** You can't run your program unless it passes compile checks and simple built-in static checks.
  - **Packaging:** It produces an executable file, by default for your platform or easily and quickly for any target platform. All with blazing fast compile times.
  - **resource usage:** You can put an executable in a Docker image if you want, a Docker image that is 1.5MB in size that does the same as the 500MB Python image.

My jaw always drops when I switch my prototyped project from Go to Python because of these advantages. I constantly think "I should have done this from the beginning".

## There's just one problem

Python's ecosystem is robust. That's both good and bad. If you want to do something simple like JSONpath query, there's a robust library for that. Sure, it's going to add 100MB of dependencies to your project, but it's simple to add and works.

With Go, you can import libraries for many things. But I find they are usually not as robust and useful. Many times, it's better to do a scoped implementation of your own that works for your use case.

So this is still one area where Python comes out on top - if you need to use a certain library. But for me, this is rarely an issue.

## Goodbye Python

So, I will bid farewell to Python as my "go-to" project language in favor of Go. The Python runtime is an awesome technology, and the recent changes to the GIL should help Python be more performant. But it's not enough, it's simply too late. I'm sorry, Python, our time is over. In my mind, Python is going the way of Java. I will still know it and use it because it's everywhere. But never again for my starter projects.

Because, there is a better way.