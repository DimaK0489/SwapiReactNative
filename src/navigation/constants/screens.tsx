import Films from "../../screens/films";
import People from "../../screens/people";
import Home from "../../screens/home";
import FilmDetails from "../../screens/filmDetails";
import PersonDetails from "../../screens/personDetails";

export enum SCREEN {
  HOME = 'Home Page',
  FILMS = 'Films',
  PEOPLE = 'People',
  FILM_DETAILS = 'Film Details',
  PERSON_DETAILS = 'Person Details',
}

export const screens = {
  [SCREEN.HOME]: Home,
  [SCREEN.FILMS]: Films,
  [SCREEN.PEOPLE]: People,
  [SCREEN.FILM_DETAILS]: FilmDetails,
  [SCREEN.PERSON_DETAILS]: PersonDetails,
};
