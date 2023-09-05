import {
  Input,
  Flex,
  Select,
  TextInput,
  Title,
  Box,
  Switch,
  FileInput,
} from "@mantine/core";
import { Upload } from "iconoir-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Form from "@/features/admin/common/components/Form";
import QuantityInput from "@/features/admin/common/components/QuantityInput";
import { BroadcastType, Rating, Status } from "@/features/animations/types";
import { useUploadImage } from "@/features/files/hooks/useUploadImage";

import {
  CreateAnimationDto,
  createAnimation,
} from "../../apis/createAnimation";

// input내 요소 배치 순서
const INPUT_WRAPPER_ORDER: ("label" | "input" | "description" | "error")[] = [
  "label",
  "description",
  "input",
  "error",
];

const RATINGS = [
  { value: "ALL", label: "전체" },
  { value: "TWELVE", label: "12세" },
  { value: "FIFTEEN", label: "15세" },
  { value: "ADULT", label: "성인" },
];

const STATUSES = [
  { value: "ONGOING", label: "방영중" },
  { value: "FINISHED", label: "완결" },
  { value: "COMING", label: "방영 예정" },
  { value: "UNKNOWN", label: "알 수 없음" },
];

const BRODCAST_TYPES = [
  { value: "TVA", label: "TVA" },
  { value: "OVA", label: "OVA" },
  { value: "ONA", label: "ONA" },
  { value: "MOV", label: "극장판" },
];

export default function AddAnimation() {
  const [form, setForm] = useState<CreateAnimationDto>({
    name: "",
    plot: "",
    broadcastType: "TVA",
    episodeNumber: 13,
    rating: "ALL",
    primaryKeyword: "",
    status: "ONGOING",
    isReleased: false,
    imageUrl: "",
    studioNames: [""],
  });
  const { handleUploadImage } = useUploadImage();
  const navigate = useNavigate();

  const handleUploadThumbnail = async (file: File) => {
    const result = await handleUploadImage({
      path: "thumbnail",
      filename: Date.now().toString(),
      file,
    });
    if (result) setForm((prev) => ({ ...prev, imageUrl: result }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createAnimation(form);
      console.log(res);
      navigate("/admin/animations");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head title="오덕 | 애니메이션 등록" />
      <Title order={2}>애니메이션 등록</Title>

      <Form onSubmit={handleSubmit}>
        <Flex gap="xl" direction="column">
          <Box sx={{ lineHeight: 1.55 }}>
            <Input.Label required>공개여부</Input.Label>
            <Input.Description>
              false이면 사용자들에게 해당 애니메이션이 노출되지 않습니다
            </Input.Description>
            <Switch
              checked={form.isReleased}
              onChange={() =>
                setForm((prev) => ({ ...prev, isReleased: !form.isReleased }))
              }
            />
          </Box>{" "}
          <FileInput
            label="썸네일 이미지"
            placeholder="애니메이션 썸네일 이미지를 업로드"
            withAsterisk
            icon={<Upload height={20} width={20} />}
            onChange={handleUploadThumbnail}
          />
          <TextInput
            label="제목"
            placeholder="애니 제목을 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextInput
            label="줄거리"
            placeholder="애니 줄거리를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.plot}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, plot: e.target.value }))
            }
          />
          <Select
            label="방영 종류"
            placeholder="방영 종류를 선택하세요"
            data={BRODCAST_TYPES}
            defaultValue={"TVA"}
            value={form.broadcastType}
            withAsterisk
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                broadcastType: value as BroadcastType,
              }))
            }
          />
          <Box sx={{ lineHeight: 1.55, maxWidth: 140 }}>
            <Input.Label required>에피소드 수</Input.Label>
            <QuantityInput
              min={0}
              max={999}
              value={form.episodeNumber}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, episodeNumber: value }))
              }
            />
          </Box>
          <Select
            label="시청 등급"
            placeholder="시청 등급을 선택하세요"
            data={RATINGS}
            defaultValue={"ALL"}
            withAsterisk
            value={form.rating}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, rating: value as Rating }))
            }
          />
          <TextInput
            label="대표 키워드"
            placeholder="대표 키워드를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.primaryKeyword}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, primaryKeyword: e.target.value }))
            }
          />
          <Select
            label="상태"
            placeholder="상태를 선택하세요"
            data={STATUSES}
            defaultValue={"ONGOING"}
            withAsterisk
            value={form.status}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, status: value as Status }))
            }
          />
          <TextInput
            label="제작사"
            placeholder="제작사를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.studioNames[0]}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, studioNames: [e.target.value] }))
            }
          />
          <Button name="저장" type="submit">
            저장
          </Button>
        </Flex>
      </Form>
    </>
  );
}
