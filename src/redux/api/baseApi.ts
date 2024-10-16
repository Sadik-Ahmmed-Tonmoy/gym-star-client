import { getTokenFromLocalStorage } from "@/utils/tokenHandler";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://gym-star-server-with-ts-and-mongoose.vercel.app/api/v1/",
    credentials: 'include',
    // tagTypes: ["User"],
    prepareHeaders: (headers) => {
         // const token = getState().auth.token;
        const token = getTokenFromLocalStorage();
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