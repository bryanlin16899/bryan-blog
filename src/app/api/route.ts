import { getPlaiceholder } from "plaiceholder";

export async function  GET(req: any, res: any) {
  const { body } = req;
  const { url } = body;

  const { base64 } = await getPlaiceholder(url);

  res.status(200).send(base64);
};