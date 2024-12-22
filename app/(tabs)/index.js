import React from "react";
import { useFetchBooks } from "../../hooks/usefetchdata.js";
import BookList from "@/components/bookList.js";

export default function Index() {
  const { books, loading } = useFetchBooks();

  return <BookList books={books} loading={loading} />;
}
