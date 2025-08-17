import React, { useState } from "react";
import { InputFieldProps } from "./InputFieldType";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";

const sizeClasses = {
  sm: "px-5 py-1 text-sm rounded-md ",
  md: "px-5 py-2 text-base rounded-2xl",
  lg: "px-5 text-lg rounded-4xl",
};

const variantClasses = {
  filled: {
    default: "bg-gray-300 border border-transparent",
    blue: "focus:border-transparent focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-transparent focus:bg-gradient-to-r focus:from-blue-400 focus:to-cyan-400",
    purple:
      "focus:border-transparent focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:bg-gradient-to-r focus:from-purple-400 focus:to-pink-400",
    green:
      "focus:border-transparent focus:ring-2 focus:ring-green-400 focus:ring-offset-1 focus:bg-gradient-to-r focus:from-green-400 focus:to-lime-400",
    red: "focus:border-transparent focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:bg-gradient-to-r focus:from-red-400 focus:to-orange-400",
  },
  outlined: "border border-gray-300 dark:border-gray-600 focus:ring-2",
  ghost: "bg-transparent border-none focus:ring-2",
};

const Input: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "sm",
  type = "text",
  loading = false,
  clearable = false,
  color = "blue",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType: React.HTMLInputTypeAttribute =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-lg mx-auto flex flex-col space-y-1">
        {label && (
          <label className=" text-gray-700 translate-x-3">{label}</label>
        )}
        <div className="relative flex items-center">
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            disabled={disabled || loading}
            placeholder={placeholder}
            className={`
             ${color === "blue" ? "focus:ring-blue-400" : ""}
              ${color === "purple" ? "focus:ring-purple-400" : ""}
              ${color === "green" ? "focus:ring-green-400" : ""}
              ${color === "red" ? "focus:ring-red-400" : ""}
           ${sizeClasses[size]}
  ${
    variant === "filled"
      ? `${variantClasses.filled.default} ${variantClasses.filled[color]}`
      : variantClasses[variant]
  }
  ${invalid ? "border-red-500 focus:ring-red-500" : ""}
            disabled:opacity-50 disabled:cursor-not-allowed
           transition-all duration-200 ease-in-out
            focus:scale-[1.01]
            `}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              color: "gr",
            }}
          />
          {loading && (
            <div
              className="absolute right-2"
              data-testid="loading-spinner"
              role="status"
              aria-label="Loading"
            >
              <Loader2
                className="h-4 w-4 animate-spin text-gray-600"
                aria-hidden="true"
              />
              <span className="sr-only">Loading data...</span>
            </div>
          )}

          {clearable && value && !disabled && !loading && (
            <button
              type="button"
              onClick={() => onChange?.({ target: { value: "" } } as any)}
              className="absolute right-2 text-gray-400 hover:text-gray-600"
              aria-label="Clear input"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {type === "password" && !loading && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye className="h-4 w-4" aria-hidden="true" />
              ) : (
                <EyeOff className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
        {invalid && errorMessage ? (
          <span className="text-xs text-red-500 translate-x-3">
            {errorMessage}
          </span>
        ) : (
          helperText && (
            <span className="text-xs text-gray-500 translate-x-3">
              {helperText}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Input;
