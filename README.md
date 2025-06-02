# Google Docs Clone - Real-Time Collaboration

A simple real-time document editor using  Express, MongoDB, and Socket.IO.

---

## Features

- Real-time collaboration: Multiple users can edit the same document at once.
- Persistent storage: Documents are saved in MongoDB and reloaded after refresh.
- WebSocket communication: Instant updates using Socket.IO.
- Simple UI: Focused on editing.
- Each Document has a separate room.

  

https://github.com/user-attachments/assets/03595834-e0c1-4e41-b2fc-dfa131347557
---

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. Clone the repository

   git clone https://github.com/yourusername/google-docs-clone.git
   cd google-docs-clone

2. Install dependencies

   npm install

3. Set up MongoDB

   - Start your MongoDB server locally or add a connection string


4. Start the server

   npm start

   The server runs on port 3002 (WebSocket). The client is on port 3000 if using a separate client server.

---

## Usage

1. Open the client

   - Go to http://localhost:3000 in your browser.
   - Create or open a document with a document ID.

2. Collaborate in real-time

   - Share the document ID with others to collaborate.
   - All changes are synced instantly.

---

## Project Structure

- Server:  Express, MongoDB, Socket.IO
- Client: React.js
- Document Model: Stores document data in MongoDB

---

## Contributing

Pull requests are welcome. Open an issue to discuss changes.


