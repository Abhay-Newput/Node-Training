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

## Synchronous (Sync) File Handling:

- Synchronous file handling operations block the execution of further code until the operation is complete.
- In synchronous operations, the program waits until the file operation (reading, writing, etc.) finishes before moving on to the next line of code.
- Synchronous operations are simpler to use and understand, especially for sequential tasks, as the flow of execution is straightforward.

## Asynchronous (Async) File Handling:

- Asynchronous file handling operations do not block the execution of further code.
- In asynchronous operations, the program initiates the file operation and continues executing the subsequent lines of code without waiting for the operation to finish.
- Asynchronous operations are often preferred for I/O-bound tasks (such as file operations), as they allow the program to continue doing other work while waiting for I/O operations to complete. This can improve overall program efficiency and responsiveness, especially in scenarios where multiple operations occur simultaneously.
