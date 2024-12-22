
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import fs from 'fs';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const fallbackImagePath = "D:\\Web Development\\3D_AI_WEBSITE\\AI_POWERED_3D-WEBSITE-main\\client\\public\\greenPattern.jpg";

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);

    if (fs.existsSync(fallbackImagePath)) {
      const imageBuffer = fs.readFileSync(fallbackImagePath);
      const imageBase64 = imageBuffer.toString('base64');
      res.status(200).json({ photo: imageBase64 });
    } else {
      res.status(500).json({ message: "Something went wrong, and fallback image not found"});
    }
  }
});

export default router;
