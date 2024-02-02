import OpenAI from "openai";
import { options } from "./constants";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function gptMovie(inputValue) {
  const query =
    "Act as a movie recommendation system and just give me list of 20 movies for the query : " +
    inputValue +
    ",list must be comma separated.I don't want any word or sentence or number before after or between the list. For example your results must be like : [golmaal, uri, hanuman, ....] list of 20 movies";

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });

  if (!completion.choices) {
    console.log("no results for given query from GPT");
    return;
  }
  const gptResult = completion.choices?.[0]?.message?.content.split(",");
  return gptResult;
}

export const getMovie = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    options
  );
  const json = await data.json();
  return json.results;
};
