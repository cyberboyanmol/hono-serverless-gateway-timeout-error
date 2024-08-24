import { Hono } from "hono";

const app = new Hono();

// GET route to return a list of names
app.get("/", (c) => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return c.json(names);
});

// POST route to return the name from the request body
app.post("/", async (c) => {
  const body = await c.req.json();
  const name = body.name;
  return c.json({ message: `Received name: ${name}` });
});

export default app;
