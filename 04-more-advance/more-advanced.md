---
1. What is the difference between git reset and git revert. When would you use one over the other?
2. What is the difference between git merge and git rebase. When would you use one over the other?
3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
4. What kinds of things can you do in interactive mode when rebasing?

Jawaban:
1. git reset It modifies the index (the so-called "staging area",This command may alter existing history (by changing the commit that a branch references). If you have made a commit, but haven't shared it with anyone else and you decide you don't want it, then you can use to rewrite the history so that it looks as though you never made that commit. git revert this command creates a new commit that undoes the changes from a previous commit. This command adds new history to the project (it doesn't modify existing history). If a commit has been made somewhere in the project's history, and you later decide that the commit is wrong and should not have been done, then is the tool for the job.
2. Git merge For developers using version control systems, merging is a prevalent method. Merging takes the contents of a source branch and combines them with a target branch, to be more precise, Combine multiple branch histories together. Git rebase Another way to integrate modifications from one branch to another is by Rebase, Reapply commits on top of the base branch. 
3. git stash pop applies the top stashed element and removes it from the stack. git stash apply does the same, but leaves it in the stash stack.
4. Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing.
