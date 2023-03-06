import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    // GET
    getTodos: builder.query({
      query: () => "/todos",
    }),
    // POST
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
    }),
    // UPDATE
    updateTodos: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
    }),
    // DELETE
    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} = apiSlice;
