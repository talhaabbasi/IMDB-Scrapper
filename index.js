const request = require("request-promise");
const cheerio = require("cheerio");

(async () => {
  const movieUrl = "https://www.imdb.com/title/tt5052474/?ref_=tt_rec_tt";
  const response = await request(movieUrl);

  const $ = cheerio.load(response);

  let title = $('div[class="title_wrapper"] > h1').text();

  let poster = $('div[class="poster"] > a > img').attr("src");

  let rating = $(
    "#title-overview-widget > div.vital > div.title_block > div > div.ratings_wrapper > div.imdbRating > div.ratingValue > strong > span"
  ).text();
  console.log(rating);
})();
