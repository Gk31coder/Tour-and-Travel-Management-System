import { createContext, useEffect, useReducer } from "react";

// ✅ Safely get user from localStorage
let storedUser = null;

try {
  const item = localStorage.getItem("user");
  storedUser = item ? JSON.parse(item) : null;
} catch (err) {
  console.error("Invalid JSON in localStorage:", err);
  storedUser = null;
}

// ✅ Initial state
const initial_state = {
  user: storedUser,
  loading: false,
  error: null,
};

// ✅ Create Context
export const AuthContext = createContext(initial_state);

// ✅ Reducer
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

// ✅ Provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // ✅ Sync user with localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user"); // cleaner than storing null
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};