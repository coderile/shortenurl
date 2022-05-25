FROM node:16.13.2
WORKDIR /app
COPY ["package.json","package-lock.json","./"] 
RUN npm install
COPY . .
CMD [ "npm","start" ]
