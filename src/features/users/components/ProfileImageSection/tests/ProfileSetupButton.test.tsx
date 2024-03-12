import { cleanup, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";

import customRender from "@/__test__/customRender";

import ProfileImageSection from "..";

describe("ProfileSetupButton", () => {
  afterEach(() => cleanup());

  describe("내 프로필인 경우", () => {
    it("설정 버튼을 클릭하면 '프로필 수정' 버튼이 렌더링 된다.", async () => {
      customRender(
        <MemoryRouter>
          <ProfileImageSection>
            <ProfileImageSection.ProfileSetupButton
              isMine={true}
              userName="testUser"
            />
          </ProfileImageSection>
        </MemoryRouter>,
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      const editButton = screen.getByLabelText("프로필 수정");
      expect(editButton).toBeInTheDocument();
    });

    it("'프로필 수정' 버튼을 클릭하면, '프로필 수정' 페이지로 이동한다.", () => {
      function RouteProfileEditPage() {
        return <section>프로필 수정 페이지</section>;
      }

      customRender(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route
              path="/"
              element={
                <ProfileImageSection>
                  <ProfileImageSection.ProfileSetupButton
                    isMine={true}
                    userName="testUser"
                  />
                </ProfileImageSection>
              }
            />
            <Route path="/profile/edit" element={<RouteProfileEditPage />} />
          </Routes>
        </MemoryRouter>,
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      const editButton = screen.getByLabelText("프로필 수정");
      fireEvent.click(editButton);

      expect(screen.getByText("프로필 수정 페이지")).toBeInTheDocument();
    });
  });

  it("다른 사용자의 프로필 설정 버튼 클릭하면, '신고하기' 버튼이 렌더링 된다.", () => {
    customRender(
      <MemoryRouter>
        <ProfileImageSection>
          <ProfileImageSection.ProfileSetupButton
            isMine={false}
            userName="testUser"
          />
        </ProfileImageSection>
      </MemoryRouter>,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const reportButton = screen.getByLabelText("신고하기");

    expect(reportButton).toBeInTheDocument();
  });
});
