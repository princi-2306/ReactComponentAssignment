import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/internal/test";

import { DataTable, Column } from "./DataTable";

type User = { id: number; name: string; age: number };

const meta: Meta<typeof DataTable<User>> = {
  title: "./DataTable.tsx",
  component: DataTable<User>,
  argTypes: {
    loading: { control: "boolean" },
    selectable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 29 },
  { id: 3, name: "Charlie", age: 32 },
];

export const Default: Story = {
  args: {
    data,
    columns,
    loading: false,
    selectable: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    loading: false,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected rows:", rows),
  },
};
export const TestSorting: Story = {
  args: {
    data,
    columns,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ageHeader = await canvas.getByText("Age");
    await userEvent.click(ageHeader);
  },
};
