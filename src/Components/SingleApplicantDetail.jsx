import React from "react";
import { useParams } from "react-router";
const SingleApplicantDetail = () => {
  const { id, name } = useParams();
  return (
    <div className="userDetails">
      <div className="user_id">
        {id}
        {name}
      </div>
    </div>
  );
};

export default SingleApplicantDetail;
