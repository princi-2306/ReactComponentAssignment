import React from "react";
import Input from "./components/component1/Input";

const InputComp = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-400  mb-8">
          Input Component Gallery
        </h1>

        {/* Basic Variants */}
        <Section title="Basic Variants">
          <InputVariant
            title="Default"
            label="Username"
            placeholder="Enter username"
            props={{ label: "Username", placeholder: "Enter username" }}
          />
          <InputVariant
            title="Filled"
            variant="filled"
            label="Email"
            placeholder="Enter email"
            props={{
              variant: "filled",
              label: "Email",
              placeholder: "Enter email",
            }}
          />
          <InputVariant
            title="Outlined"
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter password"
            props={{
              variant: "outlined",
              label: "Password",
              type: "password",
              placeholder: "Enter password",
            }}
          />
          <InputVariant
            title="Ghost"
            variant="ghost"
            label="Search"
            placeholder="Search..."
            props={{
              variant: "ghost",
              label: "Search",
              placeholder: "Search...",
            }}
          />
        </Section>

        {/* Sizes */}
        <Section title="Sizes">
          <InputVariant
            title="Small"
            size="sm"
            label="Small Input"
            placeholder="Enter text"
            props={{
              size: "sm",
              label: "Nickname",
              placeholder: "Enter nickname",
            }}
          />
          <InputVariant
            title="Medium (Default)"
            size="md"
            label="Medium Input"
            placeholder="Enter text"
            props={{
              size: "md",
              label: "Full Name",
              placeholder: "Enter full name",
            }}
          />
          <InputVariant
            title="Large"
            size="lg"
            label="Large Input"
            placeholder="Enter text"
            props={{
              size: "lg",
              label: "Bio",
              placeholder: "Tell about yourself",
            }}
          />
        </Section>

        {/* States */}
        <Section title="States">
          <InputVariant
            title="With Helper Text"
            label="Description"
            placeholder="Enter text"
            helperText="This helper text appears below"
            props={{
              label: "Email",
              helperText: "We'll never share your email",
            }}
          />
          <InputVariant
            title="Error State"
            label="Email"
            placeholder="Enter email"
            invalid
            errorMessage="Invalid email format"
            props={{
              invalid: true,
              errorMessage: "Please enter a valid email",
            }}
          />
          <InputVariant
            title="Loading"
            label="Processing"
            placeholder="Loading..."
            loading
            props={{ loading: true }}
          />
          <InputVariant
            title="Disabled"
            label="Disabled"
            placeholder="Can't edit this"
            disabled
            props={{ disabled: true }}
          />
        </Section>

        {/* Features */}
        <Section title="Features">
          <InputVariant
            title="Clearable"
            label="Clearable Input"
            placeholder="Type and clear"
            clearable
            value="Initial value"
            props={{ clearable: true }}
          />
          <InputVariant
            title="Password Toggle"
            label="Password"
            type="password"
            placeholder="Enter password"
            clearable
            props={{ type: "password" }}
          />
        </Section>

        {/* Colors */}
        <Section title="Color Variants (Filled)">
          <InputVariant
            title="Blue"
            variant="filled"
            color="blue"
            label="Blue"
            placeholder="Blue input"
            props={{ variant: "filled", color: "blue" }}
          />
          <InputVariant
            title="Purple"
            variant="filled"
            color="purple"
            label="Purple"
            placeholder="Purple input"
            props={{ variant: "filled", color: "purple" }}
          />
          <InputVariant
            title="Green"
            variant="filled"
            color="green"
            label="Green"
            placeholder="Green input"
            props={{ variant: "filled", color: "green" }}
          />
          <InputVariant
            title="Red"
            variant="filled"
            color="red"
            label="Red"
            placeholder="Red input"
            props={{ variant: "filled", color: "red" }}
          />
        </Section>
      </div>
    </div>
  );
};

// Reusable section component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold text-gray-400 mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  </div>
);

// Reusable input variant component
const InputVariant = (
  props: React.ComponentProps<typeof Input> & {
    title: string;
    props: Record<string, any>;
  }
) => (
  <div className="space-y-2 p-4 bg-gray-400  rounded-lg shadow-sm border border-gray-200 ">
    <h3 className="text-sm font-medium text-gray-600">{props.title}</h3>
    <Input {...props} />
    <div className="text-xs text-gray-900  mt-2 space-y-1">
      {Object.entries(props.props).map(([key, val]) => (
        <div key={key} className="flex">
          <span className="font-medium mr-1">{key}:</span>
          <span className="font-mono text-ellipsis overflow-hidden">
            {typeof val === "boolean" ? val.toString() : val}
          </span>
        </div>
      ))}
    </div>
  </div>
);
export default InputComp;
