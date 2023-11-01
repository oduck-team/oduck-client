import { Group, Text, useMantineTheme } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { notifications } from "@mantine/notifications";
import { ImageSquare, UploadSimple, X } from "@phosphor-icons/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useApi } from "@/hooks/useApi";

/** 5MB */
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

interface ImageDropzoneProps {
  /** 업로드 경로 */
  uploadPath: string;

  /** 컴포넌트 최소 높이 @default 220 */
  minHeight?: number;

  onUpload: (path: string) => void;
}

export default function ImageDropzone({
  uploadPath,
  minHeight = 220,
  onUpload,
}: ImageDropzoneProps) {
  const theme = useMantineTheme();
  const { fileApi } = useApi();
  const [isLoading, setIsLoading] = useState(false);

  const handleDrop = async (file: File) => {
    try {
      setIsLoading(true);

      const path = await fileApi.uploadImage({
        path: uploadPath,
        filename: uuidv4(),
        file,
      });

      if (path) onUpload(path);
    } catch (e) {
      notifications.show({
        message: "이미지를 올리는데 실패했어요. 다시 시도해보세요",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = () => {
    console.log("handle reject");
  };

  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      loading={isLoading}
      maxSize={MAX_SIZE_BYTES}
      onDrop={(files) => handleDrop(files[0])}
      onReject={handleReject}
    >
      <Group justify="center" gap="xl" mih={minHeight}>
        <Dropzone.Idle>
          <ImageSquare size={52} color={theme.colors.dark["3"]} />
        </Dropzone.Idle>
        <div>
          <Text size="xl" inline>
            이미지를 드래그하거나 클릭하여 파일을 선택하세요.
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            각 파일은 5MB를 넘지 않아야 해요.
          </Text>
        </div>
        <Dropzone.Accept>
          <UploadSimple size={52} color={theme.colors.dark["3"]} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <X size={52} color={theme.colors.dark["3"]} />
        </Dropzone.Reject>
      </Group>
    </Dropzone>
  );
}
