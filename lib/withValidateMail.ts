// lib/withValidatedMail.ts
import { NextApiRequest, NextApiResponse } from "next";
import { ZodSchema } from "zod";
import { sendMail } from "./mailer";

type FormToMail<Input> = (data: Input) => {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export function withValidatedMail<Input>(
  schema: ZodSchema<Input>,
  mapToMail: FormToMail<Input>
        ) {
        return async function handler(req: NextApiRequest, res: NextApiResponse) {
                if (req.method !== "POST") {
                return res.status(405).json({ error: "Method not allowed" });
                }

                // 1) Validate
                const parseResult = schema.safeParse(req.body);
                if (!parseResult.success) {
                return res.status(400).json({ error: parseResult.error.errors });
                }
                const formData = parseResult.data;

                // 2) (Optional) Rate‐limit here

                // 3) Send email
                try {
                    const mailOpts = mapToMail(formData);
                    await sendMail(mailOpts);
                    return res.status(200).json({ success: true });
                } catch (err) {
                     return res.status(500).json({ error: "Failed to send email" });
                }
        };
        }
