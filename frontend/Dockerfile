FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm ci

COPY . .

EXPOSE 5173 


CMD ["npm", "run", "dev"]
