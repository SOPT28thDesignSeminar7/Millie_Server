"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose Connected ...");
        // Book.createCollection().then(function(collection) {
        //   console.log('Book Collection is created!');
        // });
        // Book.insertMany([
        //   {
        //     "title": "우리가 빛의 속도로 갈 수 없다면",
        //     "author": "김초엽",
        //     "highlightCount": 1,
        //     "highlights": [
        //       {
        //         "highlightText": "그들은 귀환의 길을 걸어 영웅처럼 마을에 들어서고, 마침내 한 사람의 어른으로 인정받았지. 하지만 떠난 사람에 비해 돌아오는 사람의 수는 늘 적었어."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AE%E1%84%85%E1%85%B5%E1%84%80%E1%85%A1+%E1%84%87%E1%85%B5%E1%86%BE%E1%84%8B%E1%85%B4+%E1%84%89%E1%85%A9%E1%86%A8%E1%84%83%E1%85%A9%E1%84%85%E1%85%A9+%E1%84%80%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%AE+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%83%E1%85%A1%E1%84%86%E1%85%A7%E1%86%AB.jpeg"
        //   },
        //   {
        //     "title": "데미안",
        //     "author": "헤르만 헤세",
        //     "highlightCount": 3,
        //     "highlights": [
        //       {
        //         "highlightText": "새는 알에서 나오기 위해 힘겹게 싸운다. 알은 세상이다. 태어나려는 자는 한 세상을 깨뜨려야 한다. 새는 신에게로 날아간다. 신의 이름은 아브락사스다."
        //       },
        //       {
        //         "highlightText": "피난처는 예상치 못했던 곳에서 '우연히' 왔다. 하지만 우연이란 존재하지 않는다. 뭔가를 간절히 원해서 발견한 것이라면, 그건 우연히 이루어진 것이 아니라 자기 자신이, 그의 필사적인 소원이 필연적으로 그곳으로 이끈 것이다."
        //       },
        //       {
        //         "highlightText": "불을 들여다보고, 흘러가는 구름을 응시하고, 그러다가 내면의 소리가 들리거든 즉시 그것들에 자신을 내맡기게."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB2.jpeg"
        //   },
        //   {
        //     "title": "나를 공부할 시간",
        //     "author": "김선희",
        //     "highlightCount": 1,
        //     "highlights": [
        //       {
        //         "highlightText": "끝도 귀환도 없이 영원히 떠도는 삶을 택할 수 있는 사람은 어쩌면 영원회귀아 무한한 생성을 견디는, 니체가 말하는 초인일지도 모른다. 무엇이 우리를 길 위로 부르는가. 끝없는 유동이 아니라 일시적 궤도 일탈에서 우리는 무엇을 얻고 싶은가."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%E1%84%92%E1%85%A1%E1%86%AF+%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB.jpeg"
        //   },
        //   {
        //     "title": "역사의 역사의 역사",
        //     "author": "유시민",
        //     "highlightCount": 1,
        //     "highlights": [
        //       {
        //         "highlightText": "인간을 이성을 지녔지만 욕망과 감정에 휘둘리는 불완전한 존재이고, 사회는 정도의 차이가 있을 뿐 언제 어디서나 모순과 부조리가 넘쳐나며, 개인의 삶은 예측할 수 없는 행운과 불운에 흔들린다."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1.jpeg"
        //   },
        //   {
        //     "title": "대중문화의 겉과 속",
        //     "author": "강준만",
        //     "highlightCount": 1,
        //     "highlights": [
        //       {
        //         "highlightText": "이 지식 혁명이 도박에서의 행운까지도 지식의 범주에 포함시킴으로써, 지식의 목적을 지식 그 자체에만 국한시켰던 소크라테스 시절보다 훨씬 심한 지식의 신비화를 범하고 있다는 비판에서 얼마나 자유로울 수 있는가."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%92%E1%85%AA.jpeg"
        //   },
        //   {
        //     "title": "로봇 시대, 인간의 일",
        //     "author": "구본권",
        //     "highlightCount": 2,
        //     "highlights": [
        //       {
        //         "highlightText": "\"왜?\"를 묻는 일은 인지 과정에서 적극적이고 주체적인 사유와 판단에 필수적 요소다. 질문은 새로 접한 정보를 단순히 수용하는 행위와 다르다."
        //       },
        //       {
        //         "highlightText": "피아노나 바이올린을 배우면 클래식 음악을 더욱 깊이 있게 감상할 수 있고, 한문을 알아야 한시에 담긴 멋을 이해할 수 있다 . 새로운 세상은 새로운 리터러시 능력을 필요로 한다."
        //       }
        //     ],
        //     "image": "https://sopt28-test.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A9%E1%84%87%E1%85%A9%E1%86%BA%E1%84%89%E1%85%B5%E1%84%83%E1%85%A2.jpeg"
        //   }
        // ]).then(function(collection) {
        //   console.log("Data Insert Success.");
        // });
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map