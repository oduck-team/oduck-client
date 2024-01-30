import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import customRender from "@/__test__/customRender";

import Avatar from "..";

describe("Avatar", () => {
  const profile = {
    name: "이름입니다",
    src: "http://image/",
  };

  afterEach(() => cleanup());

  it("이미지 src를 전달한 경우", () => {
    customRender(<Avatar userName={profile.name} src={profile.src} />);

    const image = screen.getByRole<HTMLImageElement>("img");

    expect(image.src).toBe(profile.src);
    expect(image.alt).toBe(profile.name);
  });

  it("이미지 src를 전달하지 않은 경우, userName 앞 두글자가 표시된다.", () => {
    customRender(<Avatar userName={profile.name} />);

    const image = screen.queryByRole("img");

    expect(image).not.toBeInTheDocument();
    expect(screen.getByText("이름")).toBeInTheDocument();
  });
});
