
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => {
                return {
                    url: "auth/login",
                    method: "POST",
                    body: userInfo,
                }
            },
            //   invalidatesTags: ["User"],
            // onSuccess: (result, variables, api, {dispatch}) => {
            //     const {user, token} = result;
            //     // Dispatch setUser action to update authSlice with user and token
            //     dispatch(setUser({user, token}));
            //     // Show a success toast message
            // },
        }),
        register: builder.mutation({
            query: (userInfo) => {
                return {
                    url: "user/create-trainee",
                    method: "POST",
                    body: userInfo,
                }
            },
        }),
        userData: builder.query({
            query: () => ({
                url: "user/me",
                method: "GET",
            }),
            providesTags: ["User"],
        }),
    }),
});

export const {useLoginMutation, useRegisterMutation, useUserDataQuery} = authApi;
