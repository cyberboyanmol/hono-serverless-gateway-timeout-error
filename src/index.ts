import { Hono } from "hono";

const app = new Hono();

const names = ["Alice", "Bob", "Charlie", "David"];

app.get("/", (c) => c.json(names));

app.post("/", async (c) => {
  try {
    const { name } = await c.req.json();
    if (!name) {
      return c.json({ error: "Name is required" }, 400);
    }
    return c.json({ message: `Received name: ${name}` });
  } catch (error) {
    console.error("Error processing request:", error);
    return c.json({ error: "Invalid request" }, 400);
  }
});

app.onError((err, c) => {
  console.error("Unhandled error:", err);
  return c.json({ error: "Internal server error" }, 500);
});

app.notFound((c) => c.json({ error: "Not found" }, 404));

export default app
