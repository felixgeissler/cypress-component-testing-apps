import { http } from "msw";

export const handlers = [
  http.post<{ username: string; password: string }>(
    "/auth",
    async ({ request }) => {
      const { username, password } = (await request.json()) as {
        username: string;
        password: string;
      };
      if (username === "testuser" && password === "testpassword") {
        return Response.json(
          { message: "Authenticated" },
          {
            status: 200,
          }
        );
      } else {
        return Response.json(
          { message: "Bad username or password" },
          {
            status: 401,
          }
        );
      }
    }
  ),
];

export const workerSetup = async () => {
  const { setupWorker } = await import("msw/browser");
  return setupWorker(...handlers);
};
export const serverSetup = async () => {
  const { setupServer } = await import("msw/node");
  return setupServer(...handlers);
};
