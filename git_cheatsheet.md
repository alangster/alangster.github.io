Git Commands

Create
	Clone existing repository
		$ git clone ssh://user@domain.com/repo.git
	Create new local repository
		$ git init

Local Changes
	Changes to tracked files
		$ git diff
	Commit all local changes in tracked files
		$ git commit -a

Commit History
	Show all commits, starting with newest
		$ git log
	Show changes over time for a specific file
		$ git log -p [file]
	Who changed what and when in file
		$ git blame [file]

Branches and Tags
	List all existing branches
		$ git branch
	Switch HEAD branch
		$ git checkout [branch]
	Create new branch based on current HEAD
		$ git branch [new_branch]
	Create new tracking branch based on remote branch
		$ git branch --track [new_branch] [remote_branch]
	Delete a local branch
		$ git branch -d [branch]
	Mark current commit with a tag
		$ git tag [tag_name]

Update and Publish
	List all currently configured remotes
		$ git remote -v
	Show information about a remote
		$ git remote show [remote]
	Add new remote repository with given name
		$ git remote add [remote] [url]
	Download all changes from remote, but do not integrate into HEAD
		$ git fetch [remote]
	Download changes and directly merge/integrate into HEAD
		$ git pull [remote] [branch]
	Publish local changes on a remote
		$ git push [remote] [branch]
	Merge branch into current HEAD
		$ git merge [branch]

Undo
	Discard all local changes in working directory
		$ git reset --hard HEAD
	Discard local changes in a specific file
		$ git checkout HEAD [file]
	
