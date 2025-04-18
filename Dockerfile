# 🐳 Base image
FROM node:18-alpine

# 📁 Set working directory
WORKDIR /app

# 📦 Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 🧾 Copy the rest of the application
COPY . .

# 🛠️ Build the app
RUN npm run build

# 🌐 Serve the app using a lightweight HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
