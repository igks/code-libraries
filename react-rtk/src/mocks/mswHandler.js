import { rest } from "msw";
import { albums } from "./data/albumsData";
import { posts } from "./data/postData";

const getUrl = (path) => {
  const domain = "http://localhost:8000/";
  return `${domain}${path}`;
};

export const mswHandlers = [
  rest.get(getUrl("posts"), (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(posts));
  }),
  rest.get(getUrl("albums"), (req, res, ctx) => {
    const page = req.url.searchParams.get("_page");
    const limit = req.url.searchParams.get("_limit");
    const start = page * limit - limit;
    const end = page * limit;
    return res(ctx.status(200), ctx.json(albums.slice(start, end)));
  }),
  rest.post(getUrl("albums"), async (req, res, ctx) => {
    const body = await req.json();
    console.log(body);
    return res(ctx.status(200), ctx.json([...albums, body]));
  }),
];
