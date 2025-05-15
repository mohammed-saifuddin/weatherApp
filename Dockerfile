from node:18-alpine
workdir /app
copy . .
run npm install
expose 3000
CMD["npm","start"]
