export async function POST(req) {
  const body = await req.json();
  const { theme } = body;

  try {
    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer b17b7d9c1168bffdb8cbd655b6cf744825bbe4d6f37f3d72ba7c786cd4cf848c'
      },
      body: JSON.stringify({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        messages: [
          {
            role: 'user',
            content: `Write a song about the theme: "${theme}". Include verses and chorus.`
          }
        ],
        temperature: 0.8,
        max_tokens: 512
      })
    });

    const data = await response.json();
    const lyrics = data.choices?.[0]?.message?.content || 'No lyrics generated.';
    return new Response(JSON.stringify({ lyrics }), { status: 200 });
  } catch (err) {
    console.error('Together AI Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to generate lyrics' }), { status: 500 });
  }
}