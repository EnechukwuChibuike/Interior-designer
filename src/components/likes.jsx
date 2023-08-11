import { useState } from "react";
import { BiSolidLike, BiLike } from "react-icons/bi";

function Likes() {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState("0");

  const handleClick = () => {
    const likeCount = like ? "0" : "1";
    setLikeCount(likeCount);
    setLike(!like);
  };

  return (
    <div className="text-6xl grid justify-items-center gap-5">
      <h1>{likeCount}</h1>
      <div onClick={handleClick}>{like ? <BiSolidLike /> : <BiLike />}</div>
    </div>
  );
}

export default Likes;
