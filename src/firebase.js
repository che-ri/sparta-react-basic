//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

// firebase SDK 개인정보입니다.
const firebaseConfig = {
    apiKey: "AIzaSyBgqpNm5zuQv-it4Id8G_awN6NHmBRPrWQ",
    authDomain: "sparta-react-f5ac5.firebaseapp.com",
    projectId: "sparta-react-f5ac5",
    storageBucket: "sparta-react-f5ac5.appspot.com",
    messagingSenderId: "416276791350",
    appId: "1:416276791350:web:4b2d7915c065347c3fd897",
    measurementId: "G-LHMM1XGD41",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
