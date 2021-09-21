---
1. What does git clean do?
2. What do the -d and -f flags for git clean do?
3. What git command creates a branch?
4. What is the difference between a fast-forward and recursive merge?
5. What git command changes to another branch?
6. How do you remove modified or deleted files from the working directory?
7. What git command deletes a branch?
8. What does the git diff command do?
9. How do you remove files from the staging area?
10. How do merge conflicts happen?

Jawaban:
1.  git clean is a convenience method for deleting untracked files in a repo's working directory.
2.  If you just clean untracked files, run git clean -f and If you want to also remove directories, run git clean -f -d.
3.  you can create a new branch off main using git branch new_branch.
4.  The merge commit continues to have two parents. There is nothing right or wrong of either one of the strategies but with fast forward merge you have a straight line of history and with the recursive merge, it is of multiple lines.
5.  Use the “git checkout” command and specify the name of the branch you want to switch to.
6.  git rm <file-name>.
7.  Delete a branch with git branch -d <branch>.
8.  Diffing is a function that takes two input data sets and outputs the changes between them.
9.  git reset HEAD <file-name>.
10.  when merging a branch, rebasing a branch, or cherry picking a commit
---
