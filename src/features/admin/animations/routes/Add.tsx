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

import Head from "@/components/Head";

import Form from "../../common/components/Form";
import { QuantityInput } from "../../common/components/QuantityInput";

// input내 요소 배치 순서
const INPUT_WRAPPER_ORDER: ("label" | "input" | "description" | "error")[] = [
  "label",
  "description",
  "input",
  "error",
];

export default function AddAnimation() {
  const [form, setForm] = useState({
    title: "",
    plot: "",
    broadcastType: "TVA",
    episodeNumber: 13,
    rating: "ALL",
    primaryKeyword: "",
    status: "ONGOING",
    isReleased: false,
    imageUrl: "",
    studioNames: [],
  });

  return (
    <>
      <Head title="오덕 | 애니메이션 등록" />
      <Title order={2}>애니메이션 등록</Title>

      <Form>
        <Flex gap="xl" direction="column">
          <FileInput
            label="썸네일 이미지"
            placeholder="애니메이션 썸네일 이미지를 업로드"
            withAsterisk
            icon={<Upload height={20} width={20} />}
          />
          <Box sx={{ lineHeight: 1.55 }}>
            <Input.Label required>공개여부</Input.Label>
            <Input.Description>
              false이면 사용자들에게 해당 애니메이션이 노출되지 않습니다
            </Input.Description>
            <Switch
              checked={form.isReleased}
              onChange={() =>
                setForm({ ...form, isReleased: !form.isReleased })
              }
            />
          </Box>
          <TextInput
            label="제목"
            placeholder="애니 제목을 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.title}
          />
          <TextInput
            label="줄거리"
            placeholder="애니 줄거리를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.plot}
          />
          <Select
            label="방영 종류"
            placeholder="방영 종류를 선택하세요"
            data={[
              { value: "TVA", label: "TVA" },
              { value: "OVA", label: "OVA" },
              { value: "ONA", label: "ONA" },
              { value: "MOV", label: "극장판" },
            ]}
            defaultValue={"TVA"}
            value={form.broadcastType}
            withAsterisk
          />
          <Box sx={{ lineHeight: 1.55, maxWidth: 140 }}>
            <Input.Label required>에피소드 수</Input.Label>
            <QuantityInput
              min={0}
              max={999}
              value={form.episodeNumber}
              onChange={(value) => setForm({ ...form, episodeNumber: value })}
            />
          </Box>
          <Select
            label="시청 등급"
            placeholder="시청 등급을 선택하세요"
            data={[
              { value: "ALL", label: "전체" },
              { value: "TWELVE", label: "12세" },
              { value: "FIFTEEN", label: "15세" },
              { value: "ADULT", label: "성인" },
            ]}
            defaultValue={"ALL"}
            withAsterisk
            value={form.rating}
          />
          <TextInput
            label="대표 키워드"
            placeholder="대표 키워드를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.primaryKeyword}
          />
          <Select
            label="상태"
            placeholder="상태를 선택하세요"
            data={[
              { value: "ONGOING", label: "방영중" },
              { value: "FINISHED", label: "완결" },
              { value: "COMING", label: "방영 예정" },
              { value: "UNKNOWN", label: "알 수 없음" },
            ]}
            defaultValue={"ONGOING"}
            withAsterisk
            value={form.status}
          />
          <TextInput
            label="제작사"
            placeholder="제작사를 입력하세요"
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            withAsterisk
            value={form.plot}
          />
        </Flex>
      </Form>
    </>
  );
}

/*
  이름
  줄거리
  방영종류   TVA OVA ONA MOV
  에피소드수
  시청등급   ADULT FIFTEEN TWELVE ALL
  대표키워드
  상태 FINISHED ㅜONGOING PCOMING UNKNOWN
  공개여부

  studio
*/
