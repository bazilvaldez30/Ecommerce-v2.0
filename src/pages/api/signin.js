export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const response = await fetch(`https://backendvaldez.onrender.com/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    if (!response.ok) {
      res.status(response.status).json({ error: json.error });
    }
    if (response.ok) {
      res.status(response.status).json(json);
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}