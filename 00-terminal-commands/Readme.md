# ls

- Provides list of all the directory/folders present in the current directory

# cd

- cd `file name` change the current directory/folder

# pwd

- The pwd command stands for print working directory, and as the name suggests, it is used to print out the absolute path to the current directory.

# mkdir

- `mkdir file-name` used to create new directories/ folder

- `mkdir -p file1/file2` used to create sub-directories

- `mkdir file1 file2` can be used to create dfferent folders at the same time.

# rmdir

- used to remove only empty directories from the file system

# rm -rf

- remove non-empty directories along with their sub-directories and files.

# mv

- used to move files.

# cp

- To copy files to another destination

# cat

- used to read data from a specified file and print the output.

# less

- type `q` to quit

# apt

# dpkg

- install, build, remove and manage Debian packages

# kill

- `kill process-name` used to send signals to processes, typically to terminate them.

- for force kill `kill -9 process name`.

# lsof

- report a list of all open files and the processes that opened them.

# netstat

- generates displays that show network status and protocol statistics.

# service vs systemctl

- commands used to manage services on Unix-like operating systems, but they are used in different contexts and with different init systems.

- - service: used to manage services on systems that use traditional init systems like System V (SysVinit) or Upstart. It provides a consistent interface to start, stop, restart, and check the status of services.

```
service SERVICE_NAME start    # Start a service
service SERVICE_NAME stop     # Stop a service
service SERVICE_NAME restart  # Restart a service
service SERVICE_NAME status   # Check the status of a service

```

- - systemctl: command is used to manage services and the system state on systems that use systemd as their init system. systemd is more modern and provides more features and greater flexibility compared to traditional init systems.

```
systemctl start SERVICE_NAME    # Start a service
systemctl stop SERVICE_NAME     # Stop a service
systemctl restart SERVICE_NAME  # Restart a service
systemctl status SERVICE_NAME   # Check the status of a service
systemctl enable SERVICE_NAME   # Enable a service to start at boot
systemctl disable SERVICE_NAME  # Disable a service from starting at boot

```

# vim vs nano

- Vim's optimized command-line interface ensures snappy responsiveness even with large files,
- while Nano's lightweight footprint makes it an ideal choice for low-spec systems.

- basic commands:

  - Vim:

    - Basic Navigation: Uses h, j, k, l for moving left, down, up, and right. Other keys allow for more sophisticated navigation (e.g., w to move forward by word, b to move backward by word).
    - Saving and Exiting: :w (save), :q (exit), :wq (save and exit), :q! (exit without saving).
    - Cutting and Pasting: d for delete (cut), y for yank (copy), p for paste.
    - Searching: / to search for text, :s/old/new/g to search and replace.

  - nano:
    - Basic Navigation: Simple, with arrow keys for moving around the text.
    - Saving and Exiting: Ctrl + O (save), Ctrl + X (exit).
    - Cutting and Pasting: Ctrl + K (cut), Ctrl + U (paste).
    - Searching: Ctrl + W to search for text, Ctrl + \ to search and replace.

# sudo vs normal user

- A normal user operates with limited permissions that restrict access to critical system files and administrative tasks. This user is typically used for day-to-day activities such as running applications, editing personal files, and executing standard commands.

- sudo stands for "superuser do" and allows a permitted user to execute a command as the superuser or another user, as specified by the security policy. It temporarily elevates the user's privileges to perform administrative tasks.

- - Sudo command (No commands required for normal user)
  - Installing Software: `sudo apt-get install package_name`
  - Modifying System Files: `sudo nano /etc/hosts`
  - Managing Users: `   sudo useradd newuser
sudo passwd newuser`

# sudo su

- switch to the superuser account (root) temporarily.

# Adding env variable

- Temporary Environment Variable: `export MY_VAR="my_value"`
- Permanent Environment Variable (Single User): `    echo 'export MY_VAR="my_value"' >> ~/.bashrc 
  source ~/.bashrc`
- Permanent Environment Variable (All Users): `sudo sh -c 'echo "export MY_VAR=\"my_value\"" >> /etc/profile'`
- Adding to PATH:`    echo 'export PATH=$PATH:/new/directory/path' >> ~/.bashrc
  source ~/.bashrc`

# Listing env variable

- To list environment variables, you can use commands like printenv, env, set, export -p, and declare -x. These commands provide different views and formats of the environment variables available in the current shell session.
