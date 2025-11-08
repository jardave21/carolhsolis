export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 })
    }

    // TODO: Replace with your email service (SendGrid, Mailchimp, etc.)
    // For now, just log the email
    console.log("[v0] Email subscription:", email)

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
