// https://mswjs.io/
import { HttpResponse, http } from "msw";
import { BASE_URL, CITIES, PROVINCES } from "./consts";

export const handlers = [
  http.get(`${BASE_URL}/provinces`, async ({ request }) => {
    return HttpResponse.json({ results: PROVINCES }, { status: 200 });
  }),

  http.get(`${BASE_URL}/cities/:id`, async ({ request }) => {
    const urlArray = request.url.slice("/");
    const id = urlArray.at(-1);
    const cities = CITIES[id];
    const response =
      id < 7
        ? HttpResponse.json({ results: cities }, { status: 200 })
        : HttpResponse.json({ detail: "پیدا نشد." }, { status: 404 });
    return response;
  }),

  http.post(`${BASE_URL}/submit`, async ({ request }) => {
    return HttpResponse.json(
      { detail: "اطلاعات شما با موفقیت ثبت شد." },
      { status: 200 }
    );
  }),
];
