import { useEffect, useState, useRef } from "react";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (collections, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {

    let ref = collection(db, collections);

    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }


    const unsubscribe = onSnapshot(collection(db, collections), (
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Не получилось получить данные");
      }
    ));

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collections, query, orderBy]);

  return { documents, error };
};
