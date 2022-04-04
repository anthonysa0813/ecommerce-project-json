import React from "react";
import { CommentsContainer } from "../styled/ProductId";
import Stars from "simple-rating-stars";

const Comments = ({ info }) => {
  return (
    <CommentsContainer className="">
      <h4>Opiniones sobre {info.model}</h4>
      {info.comments?.map((user) => {
        return (
          <div className="commentsUser">
            <div className="userProfile">
              <div className="userImage">
                <img src={user.profile_image} alt="" />
              </div>
              <div className="userName">
                <p>{user.name}</p>
                <Stars
                  stars={user.score}
                  outOf={5}
                  full={"#fff04c"}
                  empty={"#E1F1FF"}
                  stroke={"#369"}
                />
              </div>
            </div>
            <div className="userComment">
              <p>{user.comment}</p>
            </div>
          </div>
        );
      })}
    </CommentsContainer>
  );
};

export default Comments;
