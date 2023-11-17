import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { db } from "../../../firebase.config";
import { collection, getDocs } from "@firebase/firestore";
import { useAuthStatus } from "../../../hooks/useAuthStatus";

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const { isAdmin } = useAuthStatus();
  console.log(isAdmin);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = collection(db, "transactions");
        const querySnap = await getDocs(transactions);

        let data = [];
        querySnap.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data() });
        });

        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="content">
        <h1>Transactions</h1>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>ID: {transaction.id}</p>
              <p>Status: {transaction.data.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
