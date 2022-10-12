import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Input,
  args: {
    placeholder: "Tepy your e-mail address",
    type: "email",
  },
  argTypes: {},
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {
  decorators: [
    (Story) => (
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        {Story()}
      </TextInput.Root>
    ),
  ],
};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
  decorators: [(Story) => <TextInput.Root>{Story()}</TextInput.Root>],
};
