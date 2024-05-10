import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(`${BASE_URL}`, () => {
    return HttpResponse.json({
      displayState: "Success",
    });
  }),
];
