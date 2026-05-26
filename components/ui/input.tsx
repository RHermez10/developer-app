import React from "react";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={
        "flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
        className
      }
      {...props}
    />
  );
}