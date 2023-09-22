import { getSignedR2Url } from "@/lib/r2";

export async function uploadImage(path: string, filename: string, file: File) {
  const signedUrl = await getSignedR2Url(path, filename);

  const response = await fetch(signedUrl, {
    method: "PUT",
    body: file,
    headers: {
      Accept: "application/json",
      "Content-Type": file.type,
    },
  });

  if (!response.ok)
    throw new Error(`upload failed: ${response.status} ${response.statusText}`);

  return true;
}
