import { put } from "@/libs/api";
import { getSignedR2Url } from "@/libs/r2";

interface UploadImageDto {
  path: string;
  filename: string;
  file: File;
}

export default class FileApi {
  /**
   * @description R2 스토리지에 이미지를 업로드합니다. 중첩된 경로일 경우, 중첩 경로마다 `/`를 넣어야합니다.
   * @example - 일반 path: 'profile', filename: 'user-image', file: file
   * @example - 중첩 path: 'user/profile', filename: 'user-image', file: file
   * @returns `"/path/filename"`
   */
  async uploadImage({ path, filename, file }: UploadImageDto) {
    const signedUrl = await getSignedR2Url(path, filename);

    await put(signedUrl, file, {
      headers: {
        Accept: "application/json",
        "Content-Type": file.type,
      },
      withCredentials: false,
    });

    return `https://cdn.oduck.io/static/${path}/${filename}`;
  }
}
