FROM node:22-alpine
WORKDIR /sdm_ui
# RUN apk update && apk add git
# RUN git clone https://github.com/kalyanparri/Sales_Data_Management_UI.git /sdm_ui
COPY . .
RUN npm install
EXPOSE 5173
CMD npm start