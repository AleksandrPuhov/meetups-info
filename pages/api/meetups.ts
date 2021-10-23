// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MEETUPS_LIST } from "../../mock/mock-data";
import { IMeetup } from "../../types/meetup";

const handler = (req: NextApiRequest, res: NextApiResponse<IMeetup[]>) => {
	res.status(200).json(MEETUPS_LIST);
};
export default handler;
