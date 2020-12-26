import { useReducer } from "react";

enum Status {
  IDLE = "idle",
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected"
}

enum ActionTypes {
  SUCCESS = "success",
  FAILED = "failed",
  LOADING = "loading"
}

type Action = {
  type: ActionTypes;
  data?: any;
  error?: any;
};

type State = {
  status: Status;
  error: any;
  data: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.SUCCESS:
      return {
        ...state,
        status: Status.RESOLVED,
        data: action.data
      };
    case ActionTypes.FAILED:
      return {
        ...state,
        status: Status.REJECTED,
        error: action.error,
        data: null
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        status: Status.PENDING
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useAsync = () => {
  const [state, dispatch] = useReducer(reducer, {
    status: Status.IDLE,
    error: null,
    data: null
  });

  const run = <T>(promise: Promise<T>) => {
    dispatch({ type: ActionTypes.LOADING });
    promise.then(
      (data: T) => {
        dispatch({
          type: ActionTypes.SUCCESS,
          data
        });
      },
      (error: Error) => {
        dispatch({
          type: ActionTypes.FAILED,
          error
        });
      }
    );
  };

  return {
    data: state.data,
    error: state.error,
    run,
    isLoading: state.status === Status.PENDING,
    isError: state.status === Status.REJECTED,
    isSuccess: state.status === Status.RESOLVED
  };
};
