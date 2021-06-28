// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const COMPLETE = "bucket/COMPLETE";

// Action Creators
export const loadBucket = bucket => {
    return { type: LOAD, bucket };
};

export const createBucket = bucket => {
    return { type: CREATE, bucket };
};

export const deleteBucket = index => {
    return { type: DELETE, index };
};

export const completeBucket = index => {
    return { type: COMPLETE, index };
    //이 bucket 데이터에는 bucketlist의 idx가 올 것입니다.
}

//state 기본값 설정
const initialState = {
    list: [
        {text:"영화관 가기", completed:false},
        {text:"매일 책읽기", completed:false},
        {text:"수영 배우기", completed:false},

    ],

};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "bucket/LOAD":
            return state;

        case "bucket/CREATE":
            const new_bucket_list = [...state.list, {text:action.bucket, completed:false}];
            return { list: new_bucket_list,  };

        case "bucket/DELETE":
            const bucket_list = state.list.filter((l, idx) => {
                if (idx !== action.index) {
                    return l;
                }
            });
            return { list: bucket_list };

        case "bucket/COMPLETE":
            //기존 state에서 완료로 바뀐 state를 return 해주어야 한다!
            const buckit_list = state.list.map((l, idx)=>{
                if (idx === action.index) {
                    return {...l,completed:true};
                }
                else return l;
                
            })
            return {list: buckit_list };

        default:
            return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc

// export function getWidget() {
//     return dispatch =>
//         get("/widget").then(widget => dispatch(updateWidget(widget)));
// }
