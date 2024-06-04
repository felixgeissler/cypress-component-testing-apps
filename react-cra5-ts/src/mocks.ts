import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const handlers = [
  http.post<{ username: string; password: string }>(
    "/auth",
    async ({ request }) => {
      const { username, password } = (await request.json()) as {
        username: string;
        password: string;
      };
      if (username === "testuser" && password === "testpassword") {
        return HttpResponse.json(
          { message: "Authenticated" },
          {
            status: 200,
          }
        );
      } else {
        return HttpResponse.json(
          { message: "Bad username or password" },
          {
            status: 401,
          }
        );
      }
    }
  ),
];

export const worker = setupWorker(...handlers);
