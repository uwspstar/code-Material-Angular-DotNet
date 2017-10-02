# GitTutorial
see details in 
[Git Beginner's Guide for Dummies](https://backlogtool.com/git-tutorial/en/contents/)


## Topic branch

When some changes need to be merged into the Integration branch, it is generally a good idea to create a Topic branch to work on independently.

- Topic branch is typically created off from an Integration branch

## Switching branches

```javascript
Run > git branch
Run > git checkout branchname

```

### HEAD

HEAD is used by Git to represent the current snapshot/position of a branch. For a new repository, Git will by default point HEAD to the master branch. Changing where HEAD is pointing to will updating your current active branch.

### Stash

- Think of stash as a drawer to store uncommited changes temporarily. 

- Stashing allows you to put aside the dirty changes in your working tree and continue working on other things in a different branch on a clean slate.

- If Git finds a conflict between the files from the newly switched branch and the uncommited changes from the previous branch, you will not be allowed to execute a check out/switch to the other branch. For that, you have to commit or stash those changes first before switching branch.


## Integration branch

"master" is usually used as integration branch.

"bugfix" branch is typically created off from an Integration branch

### Merge 
"master" has been updated several times since "bugfix" was branched out. The changes from "bugfix" and "master" need to be combined when a merge is executed on these two branches.

### Rebase
- When you rebase a bugfix branch to the master branch, commits from the bugfix branch will be replayed and appended to the end of the master branch. The end result is a single simple stream of commits in the bugfix branch history.

- In the event of a conflict when the commit is being appended, you will be asked by Git to fix the conflict before proceeding with rebasing the other commits.

- Rebase does not move the position of "master". In any case, you will be able to just do a fast-forward or a clean merge from bugfix to master after rebasing.



`If you want to keep your revision history simple, you can do the following :`

`step 1 :` 

- Use rebase on your topic branch when you want to pull the latest change 
from the integration branch.

`step 2 :`

- If you want to merge the change from your topic branch to the integration branch, 
rebase the topic branch onto the integration branch first. 
After which, merge the changes from the topic branch into the integration branch. 
This will be a fast-forward merge with no extra merge commits being created.
