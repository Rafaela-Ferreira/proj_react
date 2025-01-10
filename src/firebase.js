import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSxKfhCbbC1lv8Ansd67sLKOAcf-cmsrQ",
  authDomain: "proj2-react.firebaseapp.com",
  projectId: "proj2-react",
  storageBucket: "proj2-react.appspot.com",
  messagingSenderId: "34615074179",
  appId: "1:34615074179:web:1373a6fe0a676126e2eab6",
};

const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
export default app;
