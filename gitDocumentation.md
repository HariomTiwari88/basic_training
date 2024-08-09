
1.Create a private GitHub repo named "i-am-a-git-noob"
Created a Git Repository by naming it as “i-am-git-noob”

2.Create a new repository on locally in an empty directory (NOTE: do not clone)
Ques: What changes did you observe in the current directory after initializing the local repo?
mkdir GitLocal
It will create a new directory named as GitLocal
cd GitLocal 
NOW WE ARE in local directory
Run -> git init 
It will gonna create a .git directory locally in the system.

3.Point the remote of your local git repo to the newly created repo on GitHub 
copied the URL Link from the GItHub Respository of “i-am-git-noob”.
Used git remote add origin Copied Link
IT will connect the local repo to remote repo.

4.Print current git configs on the terminal
git config –list 
it will print all the basic details like user name,user email etc


5.Update the git config with your name and email address (only for the current repository)
git config --global user.name "Hari"
git config --global user.email  "Hari@123"

6.Create a file named "test1.txt"
touch test1.txt
It will create a file name as test1.txt

7.Add a line with text "the first line in file" in "test1.txt".
echo “first line in the file” >test1.txt
 It will push the echo content in side test1.txt

8.Push this file to your GitHub repo.
   git push -u origin master

9.Append line with text "second line in file" in "test1.txt".
echo “second line in file” >> test1.txt

10.Add file to the staging area.
               git add test1.txt

11.Check the status of the file in all staging area
git status

12.Append line with text "Third line in file" in "test1.txt". (Note the status of files across different areas).
echo “third line in file” >> test1.txt
Git status
//file modified is the status after appending the content

13.Remove "test1.txt" from the staging area.
Git restore –staged test1.txt
It will take the test1 file to working directory

14.Create a commit with the message "My First Commit"
git add test1.txt
 git commit -m “My First Commit”
It will add a commit with a commit Hash Id and my first commit will be a message

15.Push commit to the remote repo 
NOTE: checklist commits pushed to the remote
git push -u  origin master
It will push it to gitHub Repo with Branch as Master
git log –oneline
It will give all commits details with its hash Id

16.Update the message of the last commit "My First Commit" to "My Second Commit" (without creating a new commit)
git commit –amend <COMMIT ID>
Open the Editor edit the Comment to My Second Commit and the exit the editor

17.Push commit with the updated message to the remote repo
git push -u origin master
18.Check the difference between the last and second last commits.
git diff HEAD HEAD~1 
Gives the difference between the last and second last commit  

19.Revert the last commit and check the updated commit logs history.
git revert HEAD
It will open the editor to change the file content and commit message.
It will revert the last commit and creates a new commit with a unique commit Id. 
 
20.Append line with text "Fourth line in file" in "test1.txt" and commit it.
echo “Fourth line in file” >> test1.txt
It will append the fourth line in test. txt file
As file is modified so we will run:
git add .
git commit -m “Fourth Line added is added in test1.txt”
It will created a new commit with the passed message

21.Update the last commit such that the "test1.txt"  also contains "Fifth line in file" (without creating a new commit)
echo “fifth line in file” >> test1.txt
append the fifth line in test1.txt
git commit –amend
Editor will open but just close it without making any changes

22.Push the updated commits to the remote repository
git push -u origin master

23.Append some content in "test1.txt" file
echo “added more content “ >>  test1.txt

24.Pull all the content from remote repository to local repository
Git pull <URL of the Remote Repository>
It will take all the files from the git remote repository to local repository

25.Clone the remote repository to some other directory in your local system.
mkdir OtherDir
cd OtherDir
git clone <URL of the remote repository>

 


