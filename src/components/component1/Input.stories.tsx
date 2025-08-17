import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect, fn } from "storybook/test";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "./Input",
  component: Input,
  argTypes: {
    variant: { control: "select", options: ["filled", "outlined", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["text", "password"] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This will be your login ID",
    onChange : fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.type(input, 'testUser');
    await expect(input).toHaveValue('testUser');
    await expect(args.onChange).toHaveBeenCalled();

    await expect(canvas.getByText('Username')).toBeInTheDocument();

    await expect(canvas.getByText('This will be your login ID')).toBeInTheDocument();
  }
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid-email address",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Invalid-email address")).toBeInTheDocument();

  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helperText: "Enter your password",
    clearable: true,
    value: "initial",
    onChange: fn(),
  },
  play: async ({ canvasElement}) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Enter password");

    // Type something first to test clear functionality
    await userEvent.type(input, "mypassword");

    // Test password visibility toggle
    const toggleButton = canvas.getByRole("button", {
      name: /show password/i,
    });
    await userEvent.click(toggleButton);
    await expect(input).toHaveAttribute("type", "text");

  },
};

export const Loading: Story = {
  args: {
    label: "Loading state",
    placeholder: "Fetching ...",
    helperText: "loading...",
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const loader = canvas.getByLabelText('Loading');
    
    await expect(loader).toBeInTheDocument();
    await expect(loader).toHaveClass('absolute right-2');
    
    const input = canvas.getByRole('textbox');
    await expect(input).toBeDisabled();
  }
}
