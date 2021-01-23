import React from "react";
import { Noticias } from "../service/Notices";
import { useHistory } from "react-router-dom";
import * as videoServices from '../service/NoticeServices';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//import "./VideoItem.css";
interface Props {
  video: Noticias;
  loadVideo: ()=> void;
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const VideoItem = ({ video, loadVideo }: Props) => {
    const handleDelete = async(id: string) => {
        await videoServices.deleteVideo(id)
        loadVideo()
    }
  const history = useHistory();
  return (
    <div className="col-md-4">
      <div
        className="card card-body video-card"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h1>
          <span className="text-danger" onClick={()=> video._id && handleDelete(video._id)}>X</span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          
        </div>
      </div>
    </div>
  );
};

export default VideoItem;