"use server"

export async function logAccess() {
  const webhookUrl = "https://discord.com/api/webhooks/1453030708800000172/NqxP8mEU8CUch545uARjM1dZ9Sj8EzhsuR_binAp18IME--chOreyZGJ-C0fNtqE9ReQ"
  
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "Obaaa, alguém está estudandoo",
      }),
    })
  } catch (error) {
    // Silently fail to not disrupt the user and keep errors secret
  }
}
