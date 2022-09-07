// env Module 🔒
import {
  // Endpoint variables 👍
  DEV_ENDPOINT,
  PROD_ENDPOINT,

  // Firebase env variables 👍
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_Id,
} from "@env";

// If __DEV__ is true exporting DevEnviroment ⚡
const DevEnviroment = {
  url: DEV_ENDPOINT,
};

// If __DEV__ is false exporting ProdEnviroment ⚡
const ProdEnviroment = {
  url: PROD_ENDPOINT,
};

// Firebase Credentials 🔑
export const firebaseCredentials = {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_Id,
};

export default __DEV__ ? DevEnviroment : ProdEnviroment;
