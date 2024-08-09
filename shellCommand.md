
1.#!/bin/bash
echo "THis is the Starting Content written in Shell Script" > new.txt

freq=$(grep -o "t" new.txt | wc -l)
echo "$freq"

echo "THis is the NEW CONTENT ADDED"  >> new.txt

freq1=$(grep -o "t" new.txt | wc -l)
echo "$freq1"

chmod u+rwx new.txt

chmod g-r new.txt
chmod 000 new.txt

chmod u+rwx new.txt

cat new.txt > sample2.txt

for i in {1..1000}; do echo "append line $i " >> new.txt; done

head -n 50 new.txt

tail -n 50 new.txt

touch  program.txt prog1.txt prog2.txt code.txt info.txt

2.1.source -> it run inside the shell and has acces to the environment  so it can access and manipulate it.

2.2. sh -> it run inside an subshell so it can not change environment/attributes.

3. echo “content for file a are vowels aeiou” > a.txt
echo “content for file b are consonants bcdfghjklmnpqrstvwxyz” > b.txt
diff a.txt b.txt

4.1 ls  -> is used to get the list of all folder and files in which directory we goona apply it and other than this is it also has other options for different works like -l for long listing with detailed description.

Syntax : ls [options] 

4.2. lsof -> it gives the details of on running process on the system with process Id and other useful details.  

5. mkdir -p hello world

6.  nano script.sh
export permEnvrnVar = 100
echo $permEnvmVar

7 lsof -i: PortId
Kill PortId










