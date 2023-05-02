Posted Date: Sat Apr 28th 2023

## Part 1

I will start out by saying, I am a fan of powershell. Even though it doesn't fit the need for 90% of use cases I prefer it over bash for 3 reasons:

1. It's object oriented
1. Almost all commands follow the same naming convention
1. Arguments also follow a logical naming scheme.
   - Consider in bash what will `-f` do for any random command? what about `-c` ? Always completely different. The only consistent one may be `v` for `verbose`.

I decided to compare the two. I will grade with the following attributes of each in mind:

1. Performance
2. Syntax
3. Consistency

each attribute will get a score on a scale from `1-3`

```
1 = poor
2 = average or no difference
3 = superior
```

But first a bit of background for context.

## History

#### bash

The Bourne Again SHell -- or bash was created in 1988 and ultimately released as a product by the 90's. The current version of bash is 5.1 (2020), which is not much different syntactically to the version 3.0 released in 2004 around the time powershell was being developed.

#### powershell

Driven by a lack of a cohesive scripting language needed for modern automation on windows, Microsoft created Powershell in 2005. Eventually, Powershell v1.0 was out of beta in 2006. Shortly after, powershell v2.0 was released in in 2008.

## Before we begin

My laptop:

- 10th gen intel Windows 10 with bash using WSL

### Powershel prompt style:

![](https://i.imgur.com/nfFDE4Y.png)

### bash prompt style:

![](https://i.imgur.com/6FKxQbV.png)

### Testing commands and functions

I will test 15 different operations on each and judge each on the attributes listed above. Here are the 15 operations I have chosen to compare:

Part 1:

1. Make directory
1. Download file
1. write file size to console
1. find file and unzip it
1. find a string in any file
1. count file sizes of a type
1. Get process by name and append to new file

## Ready? Go!

### Test 1 : Make Directory

I will create test directories for each shell

#### Bash

Command : `mkdir -p bash/test{1..15}`

![](https://i.imgur.com/m0cj7UU.png)
![](https://i.imgur.com/HYfy5rM.png)

#### Powershell

Command `new-item -itemType directory $(1..15 | foreach{"powershell/test$_"})`

![](https://i.imgur.com/nawxV6q.png)

#### Score

| Stat           | Powershell | Bash  |
| -------------- | ---------- | ----- |
| Performance    | 2          | 2     |
| Syntax         | 1          | 3     |
| Consistency    | 2          | 2     |
| execution time | 16.7 ms    | 11 ms |
| ------------   | ---------- | ----  |
| Total          | 6          | 6     |

**Winner: Tie**

### Test 2 : download zip form online

#### Bash

Command : `wget https://github.com/mongodb/mongodb-kubernetes-operator/archive/refs/heads/master.zip`

#### Powershell

Command : `Invoke-WebRequest https://github.com/mongodb/mongodb-kubernetes-operator/archive/refs/heads/master.zip -outfile master.zip`

#### Score

| Stat           | Powershell | Bash     |
| -------------- | ---------- | -------- |
| Performance    | 1          | 3        |
| Syntax         | 1          | 3        |
| Consistency    | 2          | 2        |
| execution time | 1.724 s    | 19.364 s |
| ------------   | ---------- | ----     |
| Total          | 4          | 8        |

**Winner: Bash**

### Test 3 : Write file size to console

simple example where you want to list a file's size in console

#### Bash

Command : `echo "Size : $(ls -lh master.zip|awk '{print $5}')"`

#### Powershell

Command : `write-host "Size: $((Get-Item master.zip).length/1KB)K"`

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 2          | 2    |
| Syntax       | 3          | 2    |
| Consistency  | 3          | 3    |
| ------------ | ---------- | ---- |
| Total        | 8          | 7    |

**Winner : Powershell**

### Test 4 : Find file and unzip it

#### Bash

Command: `find $(pwd) -name *.zip -exec unzip -q {} \;`

#### Powershell

Command: `gci -name *.zip|foreach{Expand-Archive $_}`

#### Score

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 1          | 3    |
| Syntax       | 3          | 1    |
| Consistency  | 3          | 1    |
| ------------ | ---------- | ---- |
| Total        | 7          | 5    |

**Winner : Powershell**

### Test 5 : Find a string in any file

#### Bash

Command : `grep -R testing`

#### Powershell

Command : `gci -Recurse | Select-String "testing" -List`

#### Score

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 2          | 3    |
| Syntax       | 2          | 3    |
| Consistency  | 3          | 2    |
| ------------ | ---------- | ---- |
| Total        | 7          | 8    |

**Winner : Bash**

### Test 6 : Count file sizes of a type

#### Bash

Script:

```
#!/bin/bash
files=$(find . -name *.go)
size=0
for i in $files
do
	val=$(ls -l $i|awk '{print $5}')
	size=$(( $size + $val ))
done

echo "Total goLang file size:"
echo "Bytes: $size"
echo "Kilobytes: $(($size / 1000))"
```

TotalMilliseconds : 1879

#### Powershell

Script:

```
$files=(gci -recurse *.go)
$size = ($files | Measure-Object -Sum Length).Sum

write-host "Total goLang file size:"
write-host "Bytes: $size"
write-host "Kilobytes: $($size/1KB)"

```

TotalMilliseconds : 80.0936

#### Score

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 3          | 1    |
| Syntax       | 3          | 1    |
| Consistency  | 3          | 2    |
| ------------ | ---------- | ---- |
| Total        | 9          | 4    |

**Winner: Powershell**

### Test 7 : Get process by name and append to new file

#### Bash

Command : `pgrep -f bash > out-file.txt && wc out-file.txt`

#### Powershell

Command : `(get-process -name system).id|out-file out-file.txt; gci out-file.txt|Measure-Object –Line`

#### Score

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 3          | 2    |
| Syntax       | 2          | 2    |
| Consistency  | 2          | 2    |
| ------------ | ---------- | ---- |
| Total        | 7          | 6    |

**Winner: Powershell**

## Summary

Aggregate total for first 7 tests:

| Stat         | Powershell | Bash |
| ------------ | ---------- | ---- |
| Performance  | 15         | 15   |
| Syntax       | 16         | 15   |
| Consistency  | 18         | 14   |
| ------------ | ---------- | ---- |
| Total        | 49         | 44   |

## Powershell Feature spotlight:

### Advanced help pages.

Powershell has an intuative way to find commands that you may want to use. Unlike man pages on bash, which require you to know and read the exact binary that you are needing help with. Powershell allows for searching all help pages, for example:

`Get-Help -Name remoting`

```
Name                              Category  Module                    Synopsis
Add-AppvClientConnectionGroup     Cmdlet    AppvClient                Add-AppvClientConnectionGroup...
Get-AppvClientConnectionGroup     Cmdlet    AppvClient                Get-AppvClientConnectionGroup...
Enable-AppvClientConnectionGroup  Cmdlet    AppvClient                Enable-AppvClientConnectionGroup...
Remove-AppvClientConnectionGroup  Cmdlet    AppvClient                Remove-AppvClientConnectionGroup...
Disable-AppvClientConnectionGroup Cmdlet    AppvClient                Disable-AppvClientConnectionGroup...
Repair-AppvClientConnectionGroup  Cmdlet    AppvClient                Repair-AppvClientConnectionGroup...
Stop-AppvClientConnectionGroup    Cmdlet    AppvClient                Stop-AppvClientConnectionGroup...
Connect-VMNetworkAdapter          Cmdlet    Hyper-V                   Connect-VMNetworkAdapter...
Grant-VMConnectAccess             Cmdlet    Hyper-V                   Grant-VMConnectAccess...
Disconnect-VMNetworkAdapter       Cmdlet    Hyper-V                   Disconnect-VMNetworkAdapter...
Get-VMConnectAccess               Cmdlet    Hyper-V                   Get-VMConnectAccess...
Disconnect-VMSan                  Cmdlet    Hyper-V                   Disconnect-VMSan...
Revoke-VMConnectAccess            Cmdlet    Hyper-V                   Revoke-VMConnectAccess...
Test-VMReplicationConnection      Cmdlet    Hyper-V                   Test-VMReplicationConnection...
Connect-VMSan                     Cmdlet    Hyper-V                   Connect-VMSan...
Get-IscsiConnection               Function  iSCSI                     ...
Disconnect-IscsiTarget            Function  iSCSI                     ...
Connect-IscsiTarget               Function  iSCSI                     ...
Disconnect-WSMan                  Cmdlet    Microsoft.WSMan.Manage... Disconnect-WSMan...
Connect-WSMan                     Cmdlet    Microsoft.WSMan.Manage... Connect-WSMan...
Get-NetConnectionProfile          Function  NetConnection             ...
Set-NetConnectionProfile          Function  NetConnection             ...
Get-NetTCPConnection              Function  NetTCPIP                  ...
Test-NetConnection                Function  NetTCPIP                  ...
```

### Consistency

- All of microsoft's cmdlets have a `Verb-Noun` structure.

- All of microsoft's cmdlets can easily be researched on google because no other program calls their commands "cmdlets". So, you will always get something on powershell if you use that word.

- All functions are object-oriented, making scripting and automation work the same way on every command. No more guessing which column a specific value you are looking for is on like in bash. No more trimming whitespace and tab characters.

- All loops automatically use the `$_` notation for the object being looped over. So for example, every loop can reference `$_.name` to get the name property if it exists.

## Bottom Line

Powershell is fundumentally a more intuative and powerful language to script than bash. However, the most symetrical comparison for powershell would be something we didn't compare: python.

There is little reason to use powershell on linux because its not often packaged with linux. However, python is more powerful than bash and is your most likely target language on linux for automation. The only caveot being, you would want to use bash for system calls and configuration, and then have python specifically for automation. Whereas, on windows powershell can do it all.

If you are using windows and looking to script and automate, powershell is your friend.
