# 🐳 Base image
FROM node:18-alpine

# 📁 Set working directory
WORKDIR /app

# 📦 Copy and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# 🧾 Copy the rest of the application
COPY . .

# 🛠️ Build the app
RUN yarn build

# 🌐 Serve the app using a lightweight HTTP server
RUN yarn global add serve
CMD ["serve", "-s", "build"]
