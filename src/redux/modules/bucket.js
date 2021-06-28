import { firestore } from "../../firebase";

const bucket_db = firestore.collection("bucket");

//파이어스토어데이터 => 리듀서 연결
export const loadBucketFB = () => {
    return function (dispatch) {
        bucket_db.get().then(docs => {
            let bucket_data = [];
            docs.forEach(doc => {
                if (doc.exists) {
                    bucket_data = [
                        ...bucket_data,
                        { id: doc.id, ...doc.data() },
                    ];
                }
            });
            dispatch(loadBucket(bucket_data));
        });
    };
};

export const addBucketFB = bucket => {
    return function (dispatch) {
        let bucket_data = { text: bucket, complete: false };
        bucket_db.add(bucket_data).then(docRef => {
            bucket_data = { ...bucket_data, id: docRef.id };
            dispatch(createBucket(bucket_data));
        });
    };
};

export const completeBucketFB = index => {
    return function (dispatch, getState) {
        //getState를 사용하면 리덕스 스토어에 있는 스테이트를 가져옵니다.
        const _bucket_data = getState().bucket.list[index];
        // let bucket_data = { ..._bucket_data, complete: true };

        if (!_bucket_data.id) return;

        bucket_db
            .doc(_bucket_data.id)
            .update({ complete: true })
            .then(docRef => {
                dispatch(completeBucket(index));
            })
            .catch(error => console.log(error));
    };
};

export const deleteBucketFB = index => {
    return function (dispatch, getState) {
        const _bucket_data = getState().bucket.list[index];

        if (!_bucket_data.id) return;

        bucket_db
            .doc(_bucket_data.id)
            .delete()
            .then(docRef => {
                dispatch(deleteBucket(index));
            })
            .catch(error => console.log(error));
        //만약 삭제가 제대로 이루어지면 then구문으로 가겠지만, 오류가 나면 catch구문으로 간다.
    };
};

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
};

//state 기본값 설정
const initialState = {
    list: [
        { text: "어떤걸 하고싶나요?", complete: false },
        { text: "하나씩 적어볼까요?", complete: false },
    ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "bucket/LOAD":
            //action.bucket이 없다면 그냥 state를 반환한다.
            if (action.bucket.length > 0) {
                return { list: action.bucket };
            }
            return state;

        case "bucket/CREATE":
            const new_bucket_list = [...state.list, action.bucket];
            return { list: new_bucket_list };

        case "bucket/DELETE":
            const bucket_list = state.list.filter((l, idx) => {
                if (idx !== action.index) {
                    return l;
                }
            });
            return { list: bucket_list };

        case "bucket/COMPLETE":
            //기존 state에서 완료로 바뀐 state를 return 해주어야 한다!
            const buckit_list = state.list.map((l, idx) => {
                if (idx === action.index) {
                    return { ...l, complete: true };
                } else return l;
            });
            return { list: buckit_list };

        default:
            return state;
    }
}
