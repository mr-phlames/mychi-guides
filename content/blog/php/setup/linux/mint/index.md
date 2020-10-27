---
title: PHP setup on Linux Mint 
date: "2020-10-20T22:12:03.284Z"
description: "Setting up PHP on linux mint (for the first time)...and fixing some common PHP errors"
---

## Intro

So I decided to setup a linux dual boot on my laptop, linux mint to be precise, it appears to be debian based, and I once saw grub labelled it as ubuntu. That's besides the point though. My stacks are basically javascript and PHP, so I'd obviously have to setup php and javascript. [Setting up npm and node](/javascript/linux/mint/node-setup) was crazily easy, at least compared to the windows environment I came from.

### Setting up PHP

Jumping unto linux for the first time and hearing about `apt` and [`apt-get`](https://www.geeksforgeeks.org/apt-get-command-in-linux-with-examples/#:~:text=apt%2Dget%20is%20a%20command,for%20the%20Advanced%20Packaging%20Tool.), the first thing I did was to run:

```bash
sudo apt-get install php
```

This run quickly, the next part was apache, mysql and those stuff. I decided to go with [Xampp](https://www.apachefriends.org/download.html). Xampp comes with PHP too, but oh well, I'd already pulled in PHP.

### Xampp Apache not starting?

Turns out xampp's apache stopped everytime I tried to run it. The problem was that there was already apache running on the system, only God knows where it came from, but the system was preventing xampp from starting another apache2 process, so quickest solution was to stop that one:

```bash
sudo /etc/init.d/apache2 stop
```

That solved the problem!

### PHP plugins not found?

I then run into a problem where some plugins weren't installed, so I had to uninstall the php files I installed before with:

```bash
sudo apt-get purge php7.4-* phpmyadmin
```

Then after this, I installed new PHP files with the plugins I needed

```bash
sudo apt-get install apache2 php7.4 php7.4-mysql
```

Right! So at this point, everything worked as it should.....or so I thought!

### SQLSTATE[HY000] [2002] No such file or directory

This wonderful SQL error popped up when I tried to run some database migrations on a project I was working on `SQLSTATE[HY000] [2002] No such file or directory`. After searching and opening about 5 or 6 new tabs, I saw something that made sense. It had to do with changing the database host/hostname from `localhost` to `127.0.0.1`, and it worked!! The reason is (and this is from stackoverflow):

```text
The error message indicates that a MySQL connection via socket is tried (which is not supported).
```

The issue that arose here is that "localhost" uses a UNIX socket and can not find the database in the standard directory. However "127.0.0.1" uses TCP (Transmission Control Protocol), which essentially means it runs through the "local internet" on your computer being much more reliable than the UNIX socket in this case.

<hr>

Sometime later, I pulled in a laravel project I was working on and had to run composer install. Btw, you can use `apt-get` to install composer. So I run `composer install` in the laravel project, and oh...

### Your requirements could not be resolved to an installable set of packages

This problem seemed to be caused by a missing PHP plugin. There was this thing about `ext-dom` on a bunch of packages, so, composer install wasn't working.

**Fix?**

Simple:

```bash
sudo apt-get install php-xml
```

On windows, Xampp actually took care of just about all these problem, so I never encountered them. If you're new to linux too, I hope you can get through your problems with some of these.
