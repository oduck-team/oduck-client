import { Badge, Card, Flex, Table, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import { useAnimations } from "@/features/animations/hooks/useAnimations";
import { Status } from "@/features/animations/types";

export default function AnimationList() {
  const { animations } = useAnimations();
  const navigate = useNavigate();

  const ths = (
    <tr>
      <th></th>
      <th>이름</th>
      <th>년도분기</th>
      <th>공개</th>
      <th>상태</th>
      <th>생성일시</th>
    </tr>
  );

  const rows = animations?.map((anime, index) => (
    <tr key={`${anime.name}${index}`}>
      <td>
        <Flex gap="sm">
          <Button name="수정" size="sm" styleType="outline">
            수정
          </Button>
          <Button name="삭제" size="sm" styleType="outline">
            삭제
          </Button>
        </Flex>
      </td>
      <td>{anime.name}</td>
      <td></td>
      <td>
        <ReleasedBadge isReleased={anime.isReleased} />
      </td>
      <td>
        <StatusBadge status={anime.status} />
      </td>
      <td></td>
    </tr>
  ));

  return (
    <>
      <Head title="오덕 | 애니메이션 목록" />
      <Title order={2}>애니메이션 목록</Title>
      <div>조회 섹션</div>

      <Card withBorder radius="md" padding="xl">
        <Flex justify="flex-end" mb="sm">
          <Button
            name="애니메이션 등록"
            onClick={() => navigate("/admin/animations/new")}
          >
            등록
          </Button>
        </Flex>
        <Table highlightOnHover>
          <thead>{ths}</thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </>
  );
}

function ReleasedBadge({ isReleased }: { isReleased: boolean }) {
  return (
    <Badge color={isReleased ? "green" : "gray"}>
      {isReleased ? "공개" : "비공개"}
    </Badge>
  );
}

function StatusBadge({ status }: { status: Status }) {
  let color;
  let text;

  switch (status) {
    case "ONGOING":
      color = "green";
      text = "방영중";
      break;
    case "FINISHED":
      color = "blue";
      text = "완결";
      break;
    case "COMING":
      color = "orange";
      text = "방영예정";
      break;
    case "UNKNOWN":
      color = "gray";
      text = "알 수 없음";
      break;
    default:
      break;
  }

  return <Badge color={color}>{text}</Badge>;
}
