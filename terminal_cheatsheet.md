Terminal Commands


Shortcuts

	Ctrl + A
		Go to beginning of current line
	Ctrl + E 
		Go to end of current line
	Ctrl + U
		Clear the line before the cursor
	Ctrl + K
		Clear the line after the cursor
	Ctrl + W
		Delete the word before the cursor
	Ctrl + T
		Swap the last two characters before the cursor
	Esc + T
		Swap the last two words before the cursor
	Ctrl + C 
		Kill whatever is running

Core Commands

	ls -a
		Listing, including hidden files
	open [filename] 
		Opens the named file
	open .
		Opens the directory (in finder)

File Management

	touch [filename]
		Create new file with given name
	cat [filename]
		Print file to screen
	rm [filename]
		Remove file
	rm -r [filename]
		Remove a directory and contents
	cp [filename] [newfilename]
		Copy file to new file
	cp [filename] [dir]
		Copy file to directory
	mv [file] [newfilename]
		Rename a file 
			mv bad good #=> the file 'bad' is now called 'good'
		Move file to new directory
			mv bad good #=> the file 'bad' has been moved from the current directory to the 'good' directory
		Move file and rename it
			mv jewel casket/amethyst #=> the file 'jewel' has been moved to the 'casket' directory and renamed 'amethyst'
	cp [filename] [newfilename]
		Copy file to file
	cp [filename] [dir]
		Copy file to directory

Directory Management

	mkdir [dir]
		Create a new directory
	rmdir [dir]
		Remove directory (can only be used on empty directories)
	rm -R [dir]
		Remove directory and contents
