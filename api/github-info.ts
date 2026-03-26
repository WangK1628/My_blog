// 这是一个 Serverless 函数
export default async function handler(req, res) {
  const response = await fetch('https://api.github.com');
  const data = await response.json();
  res.status(200).json({ followers: data.followers });
}
