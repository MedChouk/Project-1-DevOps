FROM node:16.16.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install 
# CMD ["node", "index.js"]
CMD ["npm", "run", "dev"]
EXPOSE 3000
COPY . ./