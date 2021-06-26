// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

// Action Creators
export const loadBucket = bucket => {
    return { type: LOAD, bucket };
};

export const createBucket = bucket => {
    return { type: CREATE, bucket };
};

export const deleteBucket = bucket => {
    return { type: DELETE, bucket };
};

//state 기본값 설정
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "bucket/LOAD":
            return state;

        case "bucket/CREATE":
            const new_bucket_list = [...state.list, action.bucket];
            return { list: new_bucket_list };

        case "bucket/DELETE":
            const bucket_list = state.list.filter((l, idx) => {
                if (idx !== action.bucket) {
                    return l;
                }
            });
            return { list: bucket_list };

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
