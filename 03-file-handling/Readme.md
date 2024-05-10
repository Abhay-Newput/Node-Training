File handling refers to the process of working with files on a computer system, including tasks such as reading from and writing to files, creating and deleting files, and modifying file metadata

To work with file handling in node we need `fs` (File System) module, which provides functions for interacting with the file system.

1. Reading from a File: You can use functions like fs.readFile() or fs.readFileSync() to read data from a file.

   ```
   const fs = require('fs');

   // Asynchronous file read
   fs.readFile('file.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data);
   });

   // Synchronous file read
   const data = fs.readFileSync('file.txt', 'utf8');
   console.log(data);
   ```

2. Writing to a File: Use functions like fs.writeFile() or fs.writeFileSync() to write data to a file.

   ```
   const fs = require('fs');

   // Asynchronous file write
   fs.writeFile('file.txt', 'Hello, world!', (err) => {
   if (err) throw err;
   console.log('Data written to file');
   });

   // Synchronous file write
   fs.writeFileSync('file.txt', 'Hello, world!');
   console.log('Data written to file');
   ```

3. Working with Directories: You can use functions like fs.readdir() to read the contents of a directory, fs.mkdir() to create a directory, and fs.rmdir() to remove a directory.

   ```
   const fs = require('fs');

   // Read directory contents
   fs.readdir('.', (err, files) => {
   if (err) throw err;
   console.log('Files in current directory:', files);
   });

   // Create a directory
   fs.mkdir('new_directory', (err) => {
   if (err) throw err;
   console.log('Directory created');
   });

   // Remove a directory
   fs.rmdir('new_directory', (err) => {
   if (err) throw err;
   console.log('Directory deleted');
   });
   ```
