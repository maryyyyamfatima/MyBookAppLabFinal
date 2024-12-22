import { useEffect, useState } from "react";
import app from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db);

    console.log("Fetching data...");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.books) {
        setBooks(data.books); // Extract the `books` array
        console.log("Books fetched: ", data.books);
      } else {
        console.log("No books available");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { books, loading };
};
