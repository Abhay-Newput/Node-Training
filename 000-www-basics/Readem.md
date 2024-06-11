# http

- HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web.
- It is an application layer protocol used for transmitting hypermedia documents, such as HTML.
- HTTP is designed for communication between web browsers and web servers, but it can also be used for other purposes.

- HTTP Methods:

  - GET: Requests using GET should only retrieve data and have no other effect.
  - POST: Submits data to be processed to a specified resource, often causing a change in state or side effects on the server.
  - PUT: Replaces all current representations of the target resource with the request payload.
  - PATCH: Applies partial modifications to a resource.
  - DELETE: Deletes the specified resource.

- HTTP Status Codes:

  - Informational: Request received, continuing process.

    - 100 Continue
    - 101 Switching Protocols

  - Success: The action was successfully received, understood, and accepted.

    - 200 OK
    - 201 Created
    - 204 No Content

  - Redirection: Further action needs to be taken in order to complete the request.

    - 301 Moved Permanently
    - 302 Found
    - 304 Not Modified

  - Client Error: The request contains bad syntax or cannot be fulfilled.

    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found

  - Server Error: The server failed to fulfill an apparently valid request.
    - 500 Internal Server Error
    - 502 Bad Gateway
    - 503 Service Unavailable

# https

HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, using TLS (Transport Layer Security) to encrypt the data between the client and server.

- Encryption: Protects data from being read by third parties.
- Data Integrity: Ensures that data is not altered during transfer.
- Authentication: Confirms the identity of the communicating parties.

# TLS

- Transport Layer Security, or TLS, is a widely adopted security protocol designed to facilitate privacy and data security for communications over the Internet.
- A primary use case of TLS is encrypting the communication between web applications and servers, such as web browsers loading a website.

- **HTTPS is an implementation of TLS** encryption on top of the HTTP protocol, which is used by all websites as well as some other web services. Any website that uses HTTPS is therefore employing TLS encryption.

- There are three main components to what the TLS protocol accomplishes: Encryption, Authentication, and Integrity.
  - Encryption: hides the data being transferred from third parties.
  - Authentication: ensures that the parties exchanging information are who they claim to be.
  - Integrity: verifies that the data has not been forged or tampered with.

# TLS handshake

A TLS handshake takes place whenever a user navigates to a website over HTTPS and the browser first begins to query the website's origin server. A TLS handshake also happens whenever any other communications use HTTPS, including API calls and DNS over HTTPS queries.

TLS handshakes occur after a TCP connection has been opened via a TCP handshake.

- **What happens during a TLS handshake?**

During the course of a TLS handshake, the client and server together will do the following:

- Specify which version of TLS (TLS 1.0, 1.2, 1.3, etc.) they will use
- Decide on which cipher suites they will use
- Authenticate the identity of the server via the server’s public key and the SSL certificate authority’s digital signature
- Generate session keys in order to use symmetric encryption after the handshake is complete

`cipher suites`: a set of cryptographic algorithms for use in establishing a secure communications connection.
`cryptographic`: the process of hiding or coding information so that only the person a message was intended for can read it.

- The TLS handshake typically involves the following steps:

1. Client Hello: The client sends a "Client Hello" message, which includes the highest version of the TLS protocol it supports, a list of supported cipher suites, and a random number.
2. Server Hello: The server responds with a "Server Hello" message, which contains the chosen TLS protocol version, cipher suite, and another random number. The server also sends its digital certificate.
3. Certificate Validation: The client validates the server's digital certificate to ensure that it is trusted and has not been tampered with.
4. Key Exchange: The client and server exchange encrypted information to generate a shared secret key used for encrypting and decrypting data during the TLS session.
5. Finished: Both the client and server send a "Finished" message encrypted with the shared secret key to verify that the key exchange was successful.

After the handshake is complete, the client and server can begin securely exchanging application data using the negotiated cipher suite and session keys.

# Digital Signatures

Digital signatures are cryptographic mechanisms used to ensure the authenticity, integrity, and non-repudiation of digital data or electronic documents. They work by applying cryptographic algorithms and techniques to create a unique digital code that is attached to the data or document.

Here's how digital signatures work:

- Hashing: The original data or document is passed through a cryptographic hash function, which creates a fixed-size digital fingerprint or hash value that uniquely represents the data. Any change to the data will result in a different hash value.
- Encryption: The hash value is then encrypted using the sender's private key, which is part of a public-private key pair generated using asymmetric cryptography (e.g., RSA, ECDSA). This encrypted hash value is the digital signature.
- Signature Attachment: The digital signature is attached to the original data or document, along with other relevant information such as the signer's certificate and details about the cryptographic algorithms used.
- Verification: On the recipient's side, the digital signature is decrypted using the sender's public key, which is obtained from a trusted certificate authority (CA). The recipient also calculates the hash value of the received data or document and compares it with the decrypted hash value from the digital signature. If they match, the signature is considered valid, confirming the authenticity and integrity of the data or document.

# Encodeing and Decoding

Encoding and decoding are processes used in data communication and storage to convert data between different formats or representations. They play a crucial role in ensuring the accurate transmission and interpretation of information.

**Encoding:**
Encoding is the process of converting data from one format or code into another format or code. It is typically used to prepare data for transmission or storage.

Some common encoding techniques include:

- Character Encoding: Converting character data (text) into a sequence of bytes or binary data, such as ASCII, Unicode (UTF-8, UTF-16), or other character encoding schemes.
- Audio/Video Encoding: Converting analog audio or video signals into a compressed digital format, such as MP3 for audio or H.264 for video.
- Data Compression: Reducing the size of data by applying compression algorithms, such as ZIP, GZIP, or DEFLATE, to remove redundancies and minimize storage or transmission requirements.
- Encryption: Encoding data using cryptographic algorithms to protect its confidentiality and integrity during transmission or storage.

**Decoding:**
Decoding is the reverse process of encoding, where encoded data is converted back into its original format or representation. It is necessary to interpret and use the transmitted or stored data correctly.

Some examples of decoding include:

- Character Decoding: Converting a sequence of bytes or binary data into human-readable text characters using the appropriate character encoding scheme.
- Audio/Video Decoding: Converting compressed digital audio or video formats into analog signals that can be played or displayed.
- Data Decompression: Restoring compressed data to its original, uncompressed form using the appropriate decompression algorithm.
- Decryption: Decoding encrypted data using the correct cryptographic key and algorithm to retrieve the original, plaintext data.
