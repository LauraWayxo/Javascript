# Terminal Lab

In this lab, you will practice how to traverse your file and folder system using the terminal. You will practice how to:
- Add, remove, and rename files
- Add, remove, and rename folders
- Move folders and files around
- Check the contents of each folder

## Final Result
Currently this `terminal_lesson` folder looks like this:
```folder_structure
terminal_lesson/
├── content/
├── delete_this_folder/
├── rnme_fldr/
  ├── rnme_file.txt
├── .hidden_file
├── move_into_content.txt
└── README.md
```

After you complete all the steps in this lab this `terminal_lesson` folder needs to look like this:
```folder_structure
terminal_lesson/
├── content/
  ├── move_into_content.txt
├── created_folder/
  ├── file_one.txt
  ├── file_two.txt
  ├── file_three.txt
├── rename_folder/
  ├── rename_file.txt
└── README.md
```

## Getting Started
If you are on Windows, please use the `Git Bash` command line.
<br>
If you are on Mac or Linux use your regular `terminal` command line.

## Step 1
- Now that you have your correct command line/terminal open run this command:
```shell
pwd
```
You should get your current working directory (e.g., `/c/Users/FullStack Instructor/Desktop/path2tech/terminal_lesson`)

- Next, in your current command line/terminal run this command:
```shell
ls
```
After running this command you should see the following:
```cli_result
content/
delete_this_folder/
move_into_content.txt
README.md
rnme_me/
```
When you rn `ls` it will list the files and folders in your current working directory, but it won't list any hidden files (files that begin with `.`), if you want to see all files, in your command line/terminal run this command:
```shell
ls -a
```

## Step 2
- Create a folder called `created_folder`, this can be accomplished by running this command in your terminal:
```shell
mkdir created_folder
```
- Now that you created a new folder, you need to change directories into that folder to add the appropriate files, you can accomplish this by running this command in your terminal:
```shell
cd created_folder/
```
- After you change directories, check to make sure you are in the correct working directory, run this command in your terminal:
```shell
pwd
```
You should get your current working directory, and it should end with `/path2tech/terminal_lesson/created_folder` (e.g., `/c/Users/FullStack Instructor/Desktop/path2tech/terminal_lesson/created_folder`)

- In your `created_folder` folder you will need to create 3 files: `file_one.txt`, `file_two.txt`, `file_three.txt`. To accomplish this run the following commands in your terminal:
```shell
touch file_one.txt
touch file_two.txt
touch file_three.txt
```
- To confirm that you created these files run this command in your terminal:
```shell
ls
```
You should see:
```cli_result
file_one.txt
file_two.txt
file_three.txt
```
- Lastly, let's change directories up one folder, to do this run this following command in your terminal:
```shell
cd ..
```
- To confirm you are in the correct directory run this command in your terminal:
```shell
pwd
```
You should get your current working directory, and it should end with `/path2tech/terminal_lesson/` (e.g., `/c/Users/FullStack Instructor/Desktop/path2tech/terminal_lesson`)

## Step 3
- Move the `move_into_content.txt` file into the `content` folder, to accomplish this run this command in your terminal:
```shell
mv move_into_content.txt content/
```
- To confirm that this action worked, run this command in your terminal:
```shell
ls content/
```
If you were successful you should see this in your terminal:
```cli_result
move_into_content.txt
```

## Step 4
- Remove the `.hidden_file` file, to accomplish this run this command in the terminal:
```shell
rm .hidden_file
```
- To check if you were successful, run this command in the terminal:
```shell
ls -a
```
If you do not see `.hidden_file`, then you were successful in this file from your working directory
- Next, emove the `delete_this_folder` folder, to accomplish this run this command in the terminal:
```shell
rm -r delete_this_folder/
```
- To check if you were successful, run this command in the terminal:
```shell
ls -a
```
If you do not see `delete_this_folder`, then you were successful in removing this folder from your working directory

## Step 5
- Rename the `rnme_fldr` to `rename_folder`, to accomplish this run this command in the terminal:
```shell
mv rnme_fldr/ rename_folder/
```
To see if this command was successful run this command in your terminal:
```shell
ls -a
```
If you see a folder called `rename_folder` and you do not see a folder called `rnme_fldr` then you were successful in renaming the folder
- Change directories to `rename_folder`, to accomplish this run this command in your terminal:
```shell
cd rename_folder
```
- Check your current working directory, to make sure you are in the correct place, to do this run this command in your terminal:
```shell
pwd
```
You should get your current working directory, and it should end with `/path2tech/terminal_lesson/rename_folder` (e.g., `/c/Users/FullStack Instructor/Desktop/path2tech/terminal_lesson/rename_folder`)
- Rename the `rnme_file.txt` to `rename_file.txt`, to accomplish this run command in your terminal:
```shell
mv rnme_file.txt rename_file.txt
```
- To check if this command worked, run this command in your terminal:
```shell
ls
```
If you were successful, you should see this in your terminal:
```cli_result
rename_file.txt
```
- Lastly, change directories up one directory, to do this run this command in your terminal:
```shell
cd ..
```