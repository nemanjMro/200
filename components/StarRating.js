"use client"
import { useState, useEffect } from "react";
import { db } from "../firebase"; // Prilagodite putanju ako je potrebno
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Image from "next/image";

const StarRating = () => {
  const [ratings, setRatings] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);
  const [percent5Stars, setPercent5Stars] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collection("ratings").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRatings(data);

      const count5Stars = data.filter((r) => r.rating === 5).length;
      const percentage =
        data.length > 0 ? ((count5Stars / data.length) * 100).toFixed(2) : 0;
      setPercent5Stars(percentage);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("summary")
      .doc("summaryData")
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const avgRating = (data.sumRatings / data.totalRatings).toFixed(2);
          setAverageRating(avgRating);
          setTotalRatings(data.totalRatings);
        }
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("comments")
      .where("approved", "==", true)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(data);
      });

    return () => unsubscribe();
  }, []);

  const handleRating = async (rate) => {
    const batch = db.batch();

    // Dodaje novu ocenu u kolekciju "ratings"
    const ratingRef = db.collection("ratings").doc();
    batch.set(ratingRef, { rating: rate });

    // Ažurira zbirne podatke u kolekciji "summary"
    const summaryRef = db.collection("summary").doc("summaryData");
    const summaryDoc = await summaryRef.get();
    if (summaryDoc.exists) {
      const summaryData = summaryDoc.data();
      batch.update(summaryRef, {
        totalRatings: summaryData.totalRatings + 1,
        sumRatings: summaryData.sumRatings + rate,
      });
    } else {
      batch.set(summaryRef, {
        totalRatings: 1,
        sumRatings: rate,
      });
    }

    await batch.commit();
  };

  const calculatePercentage = (rating) => {
    const count = ratings.filter((r) => r.rating === rating).length;
    return ratings.length > 0 ? ((count / ratings.length) * 100).toFixed(2) : 0;
  };

  const getFilledStars = () => {
    if (percent5Stars <= 20) return 1;
    if (percent5Stars <= 40) return 2;
    if (percent5Stars <= 60) return 3;
    if (percent5Stars <= 80) return 4;
    return 5;
  };

  const handlePostComment = async () => {
    if (comment.trim() === "") return;

    await db.collection("comments").add({
      content: comment,
      approved: false,
      username: "User123",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFeedbackMessage("Thanks for your feedback!");
    setComment("");
  };

  const openAllComments = () => {
    setShowAllComments(true);
  };

  const closeAllComments = () => {
    setShowAllComments(false);
  };

  return (
    <div className="flex-col justify-center items-center w-11/12 sm:w-[60%] md:w-[80%] lg:w-[60%] 2xl:w-full rounded-lg bg-[#1d1f30] p-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full pb-4">
        <table className="border-[1.5px] border-[#5865F2] w-full md:w-1/2 lg:w-1/2">
          <thead>
            <tr>
              <th className="text-left pl-5 pb-2 pt-2">{averageRating} ⭐</th>
              <th className="text-left pb-2 pt-2">{totalRatings} votes</th>
            </tr>
          </thead>
          <tbody>
            {[5, 4, 3, 2, 1].map((star) => (
              <tr key={star}>
                <td className="text-left pl-5  w-1/4 md:py-1 py-2">
                  {star} star{star > 1 ? "s" : ""}
                </td>
                <td className="text-right pr-5">
                  <div className="flex items-center w-full">
                    <div className="w-full h-1 bg-gray-200 rounded-full relative">
                      <div
                        className="h-1 bg-[#5865F2] rounded-full absolute top-0 left-0"
                        style={{ width: `${calculatePercentage(star)}%` }}
                      ></div>
                    </div>
                    <span className="pl-5">{calculatePercentage(star)}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full md:w-1/2 2xl:ml-4">
          <p className="font-bold text-base text-center">
            Your opinion matters to us!
          </p>
          <p className="text-sm text-center">Rate your experience.</p>
          <div className="flex justify-center items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={`star ${
                  star <= getFilledStars() ? "star-filled" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p>Leave a comment</p>
        <textarea
          className="border-[1.5px] border-[#5865F2] w-full h-[70px] mt-5 mb-5 p-2 bg-transparent text-white outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
        ></textarea>
        <div className="flex justify-between items-center">
          <p className="underline cursor-pointer" onClick={openAllComments}>
            See all comments
          </p>
          <button
            className="bg-blue-500 p-2 text-sm rounded-md font-semibold"
            onClick={handlePostComment}
          >
            POST COMMENT
          </button>
        </div>
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>

      {/* Modal za prikaz svih komentara */}
      {showAllComments && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center">
          <div className="bg-blue-400 p-6 rounded-lg w-11/12 h-5/6 overflow-y-auto relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
              All Comments
            </h2>
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={closeAllComments}
            >
              X
            </button>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="mb-4">
                  <div className="flex w-full gap-2 items-center justify-start pb-4">
                    <Image
                      src={`/user.webp`}
                      alt={`logo casino games`}
                      width={40}
                      height={10}
                      //   className="border border-[#5865F2] rounded-md"
                    />
                    <p className="font-bold">{comment.username}: </p>
                    <p>{comment.content}</p>
                  </div>
                  <hr className="h-1 w-full"></hr>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarRating;
