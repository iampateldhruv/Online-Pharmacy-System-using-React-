import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const UserProfile = ({ user }) => {
  console.log('User data:', user);

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    console.log('Fetching purchase history...');
    const fetchPurchaseHistory = async () => {
      try {
        const db = getFirestore();
        const historyQuery = query(collection(db, 'users', user.uid, 'orders')); // Adjusted query path
        const historySnapshot = await getDocs(historyQuery);
        const history = [];
        historySnapshot.forEach((doc) => {
          history.push(doc.data());
        });
        setPurchaseHistory(history);
        console.log('Purchase history fetched:', history);
      } catch (error) {
        console.error('Error fetching purchase history:', error);
      }
    };

    if (user && user.uid) {
      fetchPurchaseHistory();
    }
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>

      <h3>Purchase History</h3>
      <ul>
        {purchaseHistory.map((order, index) => (
          <li key={index}>
            Product: {order.productName} - Quantity: {order.quantity} - Date: {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
