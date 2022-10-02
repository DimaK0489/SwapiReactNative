import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmDetails, IFilms, IPeople, PersonDetails } from "../common/Types/Types";

const baseUrl = "https://swapi.dev/api"

export const homePageAPI = createApi({
  reducerPath: "homePageAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    fetchFilms: build.query<IFilms, string>({
      query: () => ({
        url: `/films`,
        method: "GET"
      })
    }),
    fetchFilmsDetails: build.query<FilmDetails, number>({
      query: (id: number) => ({
        url: `/films/${id}`,
        method: "GET",
      })
    }),
    fetchPeople: build.query<IPeople, string>({
      query: (page: string) => ({
        url: `/people/?page=${page}`,
        method: "GET"
      })
    }),
    fetchPersonDetails: build.query<PersonDetails, number>({
      query: (id: number) => ({
        url: `people/${id}`,
        method: "GET"
      })
    })
  })
});
export const {
  useFetchFilmsQuery,
  useFetchPeopleQuery,
  useFetchFilmsDetailsQuery,
  useFetchPersonDetailsQuery
} = homePageAPI;
