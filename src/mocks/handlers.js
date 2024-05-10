import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(`${BASE_URL}`, async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return HttpResponse.json({
      displayState: "Success",
    });
  }),
];
