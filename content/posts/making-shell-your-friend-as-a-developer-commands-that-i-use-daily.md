---
title: Making shell your friend as a developer | Commands that I use daily
date: 2020-03-23T20:34:46.315Z
published: true
tags:
  - shell
  - beginners
  - linux
  - productivity
description: Sharing my most common bash history and explaining every command.
---
In this post, I will be sharing all types of bash commands that I use during my daily life.

To start with, I am a big-time shell user. I do everything from the shell. It may be as simple as pushing the code, It may be running a project, It may be changing a few files. Everything I do involves shell to some extent.

## Git

Git commands were the most common commands in my shell history. There are less than 10 git commands that I have used to date.

```bash
git status
git diff <file_name>
git add <file_name>
git branch <branch_name>
git checkout <branch_name>
git checkout <file_name>
git commit -m "<commit_message>"
git fetch <branch_name>
git cherry-pick <commit_hash>
git pull origin <branch_name>
git push origin <branch_name>
git reset
```

These are the few git commands along with a few more which you will use. There are a lot of tutorials that will tell you the uses of these commands. If you want to know about anything specific, let me know in the comments below.

## Moving inside the directory structure

Another pretty common command that I was using to switch between the different directories is `cd`.

```bash
cd /Users/ranvir/Documents/...
```

```bash
cd ~/Documents/...
```

Both of these commands will produce the same result.

```bash
cd ..
```

This command will take you one directory back.

```bash
cd -
```

This command is one of my favourites. This will take you to directory where you were before.

For example, if you were in `~/Documents/some_dir/` and then you ran the command

```bash
cd /var/www/html/
```

and after completing your stuff, you run `cd -`, it will take you back to `~/Documents/some_dir/`.

## ls

ls/Listing command will help you to list everything in a directory. There are a lot of versions, but primarily we use the following.

```bash
ls
ls -a
ls -la
```

## Checking your command history

```bash
history
```
Use this command to see your history.

## Finding old commands

Use this technique to find old commands.

Use the combination of `control + r` and type the words that you want to appear.

**For example:** `control + r` restart. This will show the most recently used command with a `restart` in it. This command is pretty helpful in many of the cases.

## Run the last command with `sudo`.


```bash
sudo !!
```

This will run the last executed command as a `sudo` user.

## Remove the clutter

To my surprise, this was one more which I was frequently using. Not sure if you guys are using it. Let me know in the comments below.

```bash
clear
```


## Exiting the terminal

This command was being used frequently to quit the shell as well.

```bash
exit
```

## vim and cat

These commands are used to edit or check the content of the files regularly.

```bash
vim ~/.ssh/config
```

## See and analyze your running processes

I prefer to use this command regularly to check which processes are taking more memory or CPU usage than other apps and maybe killing them.

```bash
htop
```

## Finding stuff around

This command is used to find content in a directory or a group of files. I mostly use the following version.

```bash
grep -rni "search_material" *
```

where `r` stands for recursive and `i` stands for removing case check.

## ssh

I have a lot of boxes (servers) running for various things that I have to access during the work. I have simply made a config, using which I can directly call the aliases to connect to a specific server. For example.

```bash
ssh ranvir_server
```

Let me know if you want to know how is this config written.

## Creating a directory

This command is used to create a directory.

```bash
mkdir abc
```

## Creating a file

This command is used to create new files.

```bash
touch abc.js
```

## Docker

I use a lot of docker related things to use databases. I think discussing docker will again a bigger one. I don't think we would be able to do that in this part.

Do let me know if you want to know more about the docker. I will come up with a new article.