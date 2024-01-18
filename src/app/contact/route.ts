import { readFileSync, writeFileSync } from "fs";

const FILE_PATH = `/tmp/contact-5.json` as const;

type DataType = {
  email: FormDataEntryValue | null;
  subject: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
};
type ErrorCodes = "ENOENT" | "EACCES";

const writeData = (data: DataType[]) => {
  writeFileSync(FILE_PATH, JSON.stringify(data));
};

const retrieveData = (): ErrorCodes | DataType[] => {
  try {
    const content = readFileSync(FILE_PATH, "utf8");

    return JSON.parse(content);
  } catch (error) {
    const errorCode = (error as NodeJS.ErrnoException).code as ErrorCodes;
    return errorCode;
  }
};

export async function GET() {
  const content = retrieveData();

  return Response.json(content);
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const data: DataType = { email, subject, message };

  const content = retrieveData();

  if (content === "ENOENT") {
    writeData([data]);
    return Response.json({ success: true });
  }

  if (content === "EACCES") {
    return Response.json({ error: "Access denied" });
  }

  const concatData = [...content, data];

  writeData(concatData);

  return Response.json({ success: true });
}
