import OpenAI from "openai";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  try {

    const { prompt } = req.body;

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt || "enhance image high quality",
      size: "1024x1024"
    });

    res.status(200).json({
      image: result.data[0].url
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

}
