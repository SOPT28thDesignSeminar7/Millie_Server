import mongoose from "mongoose";
import config from "../config";
import Book from "../models/Book";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");

    // Book.remove({ });

    // Book.createCollection().then(function(collection) {
    //   console.log('Book Collection is created!');
    // });
    // Book.insertMany([
    //   {
    //     "title": "달러구트 꿈 백화점",
    //     "author": "이미예",
    //     "highlightCount": 5,
    //     "highlights": [
    //       {
    //         "highlightText": "숨 가쁘게 이어지는 직선 같은 삶에, 신께서 공들여 그려 넣은 쉼표인 것 같아요!"
    //       },
    //       {
    //         "highlightText": "숨 가쁘게 이어지는 직선 같은 삶에, 신께서 공들여 그려 넣은 쉼표인 것 같아요!"
    //       },
    //       {
    //         "highlightText": "숨 가쁘게 이어지는 직선 같은 삶에, 신께서 공들여 그려 넣은 쉼표인 것 같아요!"
    //       },
    //       {
    //         "highlightText": "숨 가쁘게 이어지는 직선 같은 삶에, 신께서 공들여 그려 넣은 쉼표인 것 같아요!"
    //       },
    //       {
    //         "highlightText": "숨 가쁘게 이어지는 직선 같은 삶에, 신께서 공들여 그려 넣은 쉼표인 것 같아요!"
    //       }
    //       ],
    //       "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%AE%E1%84%90%E1%85%B3+%E1%84%81%E1%85%AE%E1%86%B7+%E1%84%87%E1%85%A2%E1%86%A8%E1%84%92%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7.jpeg"
    //   },
    //   {
    //     "title": "넛지",
    //     "author": "리처드 H.탈러",
    //     "highlightCount": 3,
    //     "highlights": [
    //       {
    //         "highlightText": "디폴트 옵션이 존재하지 않는다."
    //       },
    //       {
    //         "highlightText": "디폴트 옵션이 존재하지 않는다."
    //       },
    //       {
    //         "highlightText": "디폴트 옵션이 존재하지 않는다."
    //       }
    //     ],
    //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A5%E1%86%BA%E1%84%8C%E1%85%B5.jpeg"
    //   },
    //   {
    //     "title": "그림책으로 읽는 감정 수업",
    //     "author": "송귀예",
    //     "highlightCount": 2,
    //     "highlights": [
    //       {
    //         "highlightText": "불안함은 불확실성에서 오는 경우가 많은데, 자신의 감정이 무엇인지 알게 되면 그 불확실성이 감소하기 때문입니다."
    //       },
    //       {
    //         "highlightText": "불안함은 불확실성에서 오는 경우가 많은데, 자신의 감정이 무엇인지 알게 되면 그 불확실성이 감소하기 때문입니다."
    //       }
    //     ],
    //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9+%E1%84%8B%E1%85%B5%E1%86%B0%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%B8.jpeg"
    //   },
    //   {
    //     "title": "오래 준비해온 대답",
    //     "author": "이영하",
    //     "highlightCount": 6,
    //     "highlights": [
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       },
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       },
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       },
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       },
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       },
    //       {
    //         "highlightText": "사서 축적하는 삶이 아니라 모든게 왔다가 그대로 가도록 하는 삶"
    //       }
    //     ],
    //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A2+%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%87%E1%85%B5%E1%84%92%E1%85%A2%E1%84%8B%E1%85%A9%E1%86%AB+%E1%84%83%E1%85%A2%E1%84%83%E1%85%A1%E1%86%B8.jpeg"
    //   },
    // ]).then(function(collection) {
    //   console.log("Data Insert Success.");
    // });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
