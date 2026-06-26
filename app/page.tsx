"use client";
import { LangProvider } from "../context/LangContext";
import { BlogProvider } from "../context/BlogContext";
import HomePage from "../components/HomePage";

export default function Page() {
  return (
    <LangProvider>
      <BlogProvider>
        <HomePage />
      </BlogProvider>
    </LangProvider>
  );
}
