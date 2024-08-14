import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { BASE_URL } from "../utils/constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: () => ({}),
});
