import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { RenderWithProviders } from "@/__test__/customRender";
import { ToastContextProvider } from "@/contexts/ToastContext";

import ProfileEdit from "..";

describe("Profile Edit 페이지", () => {
  const fakeApi = {
    profile: {
      getProfile: vi.fn(),
    },
  };

  afterEach(() => {
    fakeApi.profile.getProfile.mockReset();
    cleanup();
  });

  const profile = {
    memberId: 1,
    name: "testName",
    description: "자기소개 테스트",
    backgroundImage: "",
    thumbnail: "",
    activity: {
      reviews: 1,
      bookmarks: 2,
      likes: 3,
      point: 0,
    },
    isMine: true,
  };

  it("사용자의 현재 닉네임과 자기소개가 input에 입력되어 있다.", async () => {
    fakeApi.profile.getProfile.mockImplementation(() => profile);

    render(
      RenderWithProviders(
        {
          children: (
            <HelmetProvider>
              <ToastContextProvider>
                <MemoryRouter initialEntries={["/profile/edit"]}>
                  <Routes>
                    <Route path="/profile/edit" element={<ProfileEdit />} />
                  </Routes>
                </MemoryRouter>
              </ToastContextProvider>
            </HelmetProvider>
          ),
        },
        fakeApi,
      ),
    );

    const name = await screen.findByLabelText<HTMLInputElement>("닉네임 입력");
    const description = await screen.findByLabelText<HTMLTextAreaElement>(
      "자기소개 입력",
    );

    expect(name.value).toBe(profile.name);
    expect(description.value).toBe(profile.description);
  });

  it("닉네임은 10글자 제한이므로, 신규 사용자 닉네임은 input에 공백으로 처리되어 있다.", async () => {
    const newUserProfile = { ...profile, name: "영역전개하는_TEST_1234" };
    fakeApi.profile.getProfile.mockImplementation(() => newUserProfile);

    render(
      RenderWithProviders(
        {
          children: (
            <HelmetProvider>
              <ToastContextProvider>
                <MemoryRouter initialEntries={["/profile/edit"]}>
                  <Routes>
                    <Route path="/profile/edit" element={<ProfileEdit />} />
                  </Routes>
                </MemoryRouter>
              </ToastContextProvider>
            </HelmetProvider>
          ),
        },
        fakeApi,
      ),
    );

    const nameInput = await screen.findByLabelText<HTMLInputElement>(
      "닉네임 입력",
    );

    expect(nameInput.value).toBe("");
  });

  it("자기소개 100글자 제한", async () => {
    fakeApi.profile.getProfile.mockImplementation(() => profile);

    render(
      RenderWithProviders(
        {
          children: (
            <HelmetProvider>
              <ToastContextProvider>
                <MemoryRouter initialEntries={["/profile/edit"]}>
                  <Routes>
                    <Route path="/profile/edit" element={<ProfileEdit />} />
                  </Routes>
                </MemoryRouter>
              </ToastContextProvider>
            </HelmetProvider>
          ),
        },
        fakeApi,
      ),
    );

    const descriptionInput = await screen.findByLabelText<HTMLTextAreaElement>(
      "자기소개 입력",
    );

    fireEvent.change(descriptionInput, { target: { value: "T".repeat(99) } });
    expect(descriptionInput.value.length).toBe(99);

    fireEvent.change(descriptionInput, { target: { value: "T".repeat(100) } });
    expect(descriptionInput.value.length).toBe(100);

    fireEvent.change(descriptionInput, { target: { value: "T".repeat(101) } });
    expect(descriptionInput.value.length).toBe(100);
  });
});
