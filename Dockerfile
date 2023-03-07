FROM node:8
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g @angular/cli@6.0.7
RUN npm install bootstrap@4.1.1
RUN npm install font-awesome@4.7.0
RUN npm set strict-ssl false
COPY . .
EXPOSE 3333
EXPOSE 4200