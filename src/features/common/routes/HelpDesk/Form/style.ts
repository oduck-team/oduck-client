import styled from "@emotion/styled";

import Textarea from "@/components/TextArea";
import TextInput from "@/components/TextInput";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: auto;

  & > h3 {
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    ${({ theme }) => theme.typo["title-2-b"]};
    flex-shrink: 0;
    margin-bottom: -8px;
  }
`;

export const FormItem = styled.div<{ textarea?: boolean }>`
  display: flex;
  width: 100%;
  & > h4 {
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    ${({ theme }) => theme.typo["body-2-m"]};
    width: 81px;
    padding-top: ${({ textarea = false }) => (textarea ? "0" : "9.5px")};
    height: fit-content;
  }
`;

export const FormTextInput = styled(TextInput)`
  width: calc(100% - 81px);
  & > input {
    border-radius: 12px;
  }
`;

export const FormTextarea = styled(Textarea)`
  width: calc(100% - 81px);
  & > textarea {
    height: calc(233px * 1.1429);
    border-radius: 12px;
  }
`;
