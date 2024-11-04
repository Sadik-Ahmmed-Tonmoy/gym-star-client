
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://gym-star-server-with-ts-and-mongoose.vercel.app/api/v1/",
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
         const token = (getState() as RootState).auth.token;
        // const token = getTokenFromLocalStorage();
        headers.set("accept", "application/json");
        if (token) {
            headers.set("authorization", `${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    tagTypes: ["User", "Trainers", "Classes"],
    endpoints: () => ({}),
});