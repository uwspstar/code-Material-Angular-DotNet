# GitTutorial
Highly Recommend to Check out Details in 
[Git Beginner's Guide for Dummies](https://backlogtool.com/git-tutorial/en/contents/)

- [GIT CHEAT SHEET](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

- [Quick start Example : Work in parallel](https://backlogtool.com/git-tutorial/en/stepup/stepup2_6.html)


- [Reference](https://backlogtool.com/git-tutorial/en/reference/)
```javascript
// Create a directory
$ mkdir tutorial
$ cd tutorial

// initial Git
$ git init

// Create a new file
$ touch foo.txt  //same as " >> foo.txt"

// Remove file
$ rm foo.txt  

// Add file to stage
$ git add myfile.txt

// Commit changes
$ git commit -m "first commit"

// Check current branch * master
$ git branch

// Create a new branch named issue1 based on the current branch * master
$ git branch issue1

// Switched to branch 'issue1', run git branch, the * issue1
$ git checkout issue1

// A new branch will be created and you will be switched over thereafter $ git checkout -b issue2
$ git checkout -b issue2

// Merge "issue1" with "master"
// To merge commits into the master branch, 
// let's now switch over to the master branch.
$ git checkout master

// Merge "issue1" into "master"
$ git merge issue1

// Merge "issue3" into "master"
$ git merge issue3

// Delete branch
$ git branch -d issue1

// Rebase branch
$ git checkout issue3 
// Switched to branch 'issue3
$ git rebase master 
// When a conflict occurs during the rebase, you will have to resolve it immediately in order to resume the rebase operation.
$ git add myfile.txt
$ git rebase --continue


// stash
$ git pull
 ...
// file foobar not up to date, cannot merge.
$ git stash
$ git pull
$ git stash pop

```
## Update Current Branch and Merge to default

- STEP 1:  `$ F6` 
// rebuild whole solution on your local working branch
- STEP 2:  `$ Fetch`  
// to get the latest remote
- STEP 3:  `$ git rebase origin/default`
// rebase the default, may need to solve the conflicts, 
- STEP 4:  `$ git checkout default`
- STEP 5: `$ merge <YourLocalBranch>`
- STEP 6: `$ git pull –-rebase`
- STEP 7: `$ F6` 
// Build on Default after merge
- STEP 8: `$ git push origin HEAD`
// HEAD means Current branch

```
//////RESET LOCAL BRANCH to Origin/Default//////////////////
$ git fetch origin
$ git reset --hard origin/default


$ git fetch origin
$ git reset --hard origin/<branch_name>

```
## Installing Git
- [Source Tree](http://www.sourcetreeapp.com/)


- [Push a remote repository](https://backlogtool.com/git-tutorial/en/intro/intro4_2.html)

- [Clone a remote repository](https://backlogtool.com/git-tutorial/en/intro/intro4_3.html)

- [Pull from a remote repository](https://backlogtool.com/git-tutorial/en/intro/intro4_4.html)

- origin/master
Points to the "master" branch of "origin" which is typically the remote repository.

- origin/HEAD
Refers to the current commit of "origin" which is the remote repository. 
When doing a clone, in most cases, 
the local repository would always point to the same location as origin/HEAD; 
that is also the equivalent of origin/master. 
This won't be the case however, if you checkout to a different remote branch.

- master
Points to the "master" branch of our local repository.


### Braching flow

- Main branch
```
The main branch consists of the master and develop branches.
```
- Feature branch 
```
topic branch, The feature branch works like a topic branch which we have covered earlier.
```
- Release branch
```
By convention, release branch names normally start with the prefix "release-".
Only bug fix and release related issues should be addressed on this branch.
```
- Hot fix branch
```
By convention, hot fix branch names normally start with the prefix "hotfix-".
When you need to add an important fix to your production codebase quickly, 
you would want to create a Hot fix branch off the master branch.
```

- Before starting on the bug fix, you would want to create a new branch based off the integration branch.
- When you ready to release the bug fix, merge the bug fix topic branch into the integration branch.


`There are two options to go about doing this.`

```
The first is to merge the integration branch that includes commit "X" with the current branch.

The second option is to rebase the current branch to the integration branch that includes commit "X".
```

## Topic branch (Feature branch)

When some changes need to be merged into the Integration branch, it is generally a good idea to create a Topic branch to work on independently.

- Topic branch is typically created off from an Integration branch. This new branch will isolate the bug fix from the new feature that you were working on


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

- "master" is usually used as integration branch.

- "bugfix" branch is typically created off from an Integration branch

### Merge 
- Your push to the remote repository will be rejected if your local repository is out of date, possibly because there are some updates that are on the remote repository added by others that you do not have locally yet.

- "master" has been updated several times since "bugfix" was branched out. The changes from "bugfix" and "master" need to be combined when a merge is executed on these two branches.

### Resolve a conflict
- Everything above "=====" is your local content, and everything below it comes from the remote branch.

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

### Fetching
When you execute a pull, the changes from the remote branch will automatically be merged into your current local branch. If what you want is just to obtain the remote changes and not have them merged into your current local branch, you can do so by executing a fetch command

### Tag
A tag is used to label and mark a specific point/commit in the history. It is usually used to mark release points (eg. v1.0, etc.)
