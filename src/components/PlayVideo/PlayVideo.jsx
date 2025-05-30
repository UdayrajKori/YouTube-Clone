import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel for learn Web Develpment</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Udayraj</p>
          <span>20K Subsriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel thats make learning easy.</p>
        <p>Subsribe the Udayraj to watch more tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Thank you so much for upload this type of videos</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>

              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
