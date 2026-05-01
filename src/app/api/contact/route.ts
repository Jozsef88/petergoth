export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[contact-form] New message:", body);

    return Response.json({ ok: true, message: "Received" }, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
}
