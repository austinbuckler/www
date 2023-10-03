import { rewrite, next } from "@vercel/edge";

export const config = {
  matcher: "/",
};

export default function middleware(req: Request) {
  // const url = new URL(req.url);
  // const hostname = url.hostname;

  // if (hostname.startsWith("suits")) {
  //   return rewrite(new URL(`/suits${url.pathname}`, req.url));
  // }

  return next();
}
