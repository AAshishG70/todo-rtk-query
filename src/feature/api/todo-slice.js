import { createApi } from "@reduxjs/toolkit/query";

const todoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: () => {
    addTodo: build.query({
        query: {}
    }),
    updateTodo: build.query ({
        query: {}
    })
  }
});
