import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import customRender from "@/__test__/customRender";

import ProfileImageSection from "..";

describe("ProfileArt", () => {
  const profile = {
    name: "이름",
    src: "http://image/",
  };

  afterEach(() => cleanup());

  it("이미지 src를 전달한 경우", () => {
    render(
      <ProfileImageSection>
        <ProfileImageSection.Art src={profile.src} userName={profile.name} />
      </ProfileImageSection>,
    );

    const image = screen.getByRole<HTMLImageElement>("img");

    expect(image.src).toBe(profile.src);
    expect(image.alt).toBe(`${profile.name}님의 배경 이미지`);
  });

  it("이미지 src를 전달하지 않은 경우", () => {
    customRender(
      <ProfileImageSection>
        <ProfileImageSection.Art />
      </ProfileImageSection>,
    );

    const image = screen.queryByRole("img");

    expect(image).not.toBeInTheDocument();
  });
});
