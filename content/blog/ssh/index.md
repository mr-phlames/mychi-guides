---
title: Trying out SSH
date: "2020-10-11T22:12:03.284Z"
description: Trying out SSH on a shared hosting server (first time).
---

I've done a bunch of personal projects which usually didn't scale to the point of drowning a shared hosting server, and so shared hosting has basically been my thing for a while now. However this meant I couldn't host laravel apps (at least with my shared hosting provider). I wrote [Leaf PHP](https://leafphp.netlify.app) which provided a ton of powerful features without bloating your app.

Point is I always had to export my database on localhost and import it on my shared hosting account because there was no way of running migrations and stuff like that, not until I met SSH.

## Creating a connection

You first need to connect to your server using SSH. In your terminal, run `ssh -p [PORT] [user]@[SERVER IP]` eg:`ssh -p 65002 u395xxxxxx@185.xxx.xx.xxx`

This will connect you to the server after typing in your password. You can now do all your cool server-ish stuff.

What else can you do with SSH?
