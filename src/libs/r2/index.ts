import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const r2Client = new S3Client({
  region: "auto",
  endpoint: import.meta.env.VITE_R2_ENDPOINT,
  credentials: {
    accessKeyId: import.meta.env.VITE_R2_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_R2_SECRET_ACCESS_KEY,
  },
});

export async function getSignedR2Url(path: string, filename: string) {
  const key = `${path}/${filename}`;
  return await getSignedUrl(
    r2Client,
    new PutObjectCommand({
      Bucket: import.meta.env.VITE_R2_BUCKET_NAME as string,
      Key: key,
    }),
    { expiresIn: 60 },
  );
}
