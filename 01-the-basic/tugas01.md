---
Create a folder called git-basic = mkdir git-basic
cd into the git-basic folder = cd git basic
Create a file called first.txt = touch first.txt
Initialize an empty git repository = git init
Add first.txt to the staging area = git add first.txt
Commit with the message "adding first.txt" = git commit -m "adding first.txt"
Check out your commit with git log = git log
Create another file called second.txt = touch second.txt
Add second.txt to the staging area = git add second.txt
Commit with the message "adding second.txt" = git commit -m "adding second.txt"
Remove the first.txt file = rm first.txt
Add this change to the staging area = git add first.txt
Commit with the message "removing first.txt" = git commit -m "removing first.txt"
Check out your commits using git log = git log




Noviankus@Noviankus MINGW64 /d/Git&Github
$ mkdir git-basic

Noviankus@Noviankus MINGW64 /d/Git&Github
$ cd git-basic

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic
$ touch first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic
$ git init
Initialized empty Git repository in D:/Git&Github/git-basic/.git/

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git add first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git commit -m "adding firts.txt"
[master (root-commit) 32e8e1e] adding firts.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git log
commit 32e8e1e0784d94c0e86fc7873fb89b2127b4e8e3 (HEAD -> master)
Author: noviankus03 <muhammadnoviankusuma@gmail.com>
Date:   Tue Sep 21 12:04:47 2021 +0700

    adding firts.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ touch second.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git add second.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git commit -m "adding second.txt"
[master a0e1c2a] adding second.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 second.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ rm first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git add first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git commit -m "removing first.txt"
[master 023b98d] removing first.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 first.txt

Noviankus@Noviankus MINGW64 /d/Git&Github/git-basic (master)
$ git log
commit 023b98dae23f3405beb2d1a1c3c04682b951b9f6 (HEAD -> master)
Author: noviankus03 <muhammadnoviankusuma@gmail.com>
Date:   Tue Sep 21 12:06:36 2021 +0700

    removing first.txt

commit a0e1c2a94d65a1f178ff8b315b81209b8df41aa9
Author: noviankus03 <muhammadnoviankusuma@gmail.com>
Date:   Tue Sep 21 12:05:42 2021 +0700

    adding second.txt

commit 32e8e1e0784d94c0e86fc7873fb89b2127b4e8e3
Author: noviankus03 <muhammadnoviankusuma@gmail.com>
Date:   Tue Sep 21 12:04:47 2021 +0700

    adding firts.txt

---
