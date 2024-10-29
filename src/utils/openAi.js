import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

const openAi = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAi;
