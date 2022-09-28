import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmDetails, IFilms, IPeople } from "../common/Types/Types";

export const homePageAPI = createApi({
  reducerPath: "homePageAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (build) => ({
    fetchFilms: build.query<IFilms, string>({
      query: () => ({
        url: `/films`,
        method: "GET"
      })
    }),
    fetchFilmsDetails: build.query<FilmDetails, string>({
      query: () => ({
        url: `/films/4/`,
        method: "GET"
      })
    }),
    fetchPeople: build.query<IPeople, string>({
      query: () => ({
        url: `/people`,
        method: "GET"
      })
    })
  })
});
export const { useFetchFilmsQuery, useFetchPeopleQuery, useFetchFilmsDetailsQuery } = homePageAPI;
