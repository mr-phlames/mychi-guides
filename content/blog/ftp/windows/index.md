---
title: Trying out FTP
date: "2020-10-11T22:12:03.284Z"
description: Trying out FTP on a shared hosting server (first time).
---

This guide gives a little breakdown of FTP connections using the windows CMD tool

## Basics

Open up your console and type ftp. This will change to the ftp cmdlet: `>ftp`
You can the type `open` which will then ask for the server

You can enter the IP or the name eg: `example.com` or `185.xxx.xx.xxx`. After typing the password, it should connect successfully.

Alternatively, you can just type `open [site] [port]` eg: `open example.com 21`

## Useful commands

These are a bunch of commands I use often.

### changing directories (remote)

`cd` to change remote directory

### changing directory (local)

`lcd` to change local directory

### upload file to remote

`put [filename.ext]` to upload file
`mput [files]` for multiple files. `*.*` puts all files; `*.txt` puts all .txt files, `my_*.*` puts all files that start with my_ with any extension.

### copy file to local

`get [file]`
`mget [file]`

### delete a file on remote

`delete [filename.ext]`

### rename a file on remote

`rename [filename] [filename]`

### delete a folder

`rmdir [name]`
