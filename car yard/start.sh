#!/bin/bash

# Start JSON Server in the background
echo "Starting JSON Server..."
npm run server &
SERVER_PID=$!

# Start React development server
echo "Starting React development server..."
npm run dev

# When React server is stopped, also stop JSON Server
kill $SERVER_PID