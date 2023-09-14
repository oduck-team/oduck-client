import { Image } from "@mantine/core";

export default function Logo({ size }: { size: number }) {
  return (
    <Image
      height={size}
      width={size}
      mx="auto"
      radius="md"
      src="/logo/logo-rect.png"
      alt="로고"
    />
  );
}
