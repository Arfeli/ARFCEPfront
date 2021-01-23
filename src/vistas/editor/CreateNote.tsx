import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Noticias } from "../../service/Notices";
import { useHistory } from "react-router-dom";
import * as videoServices from "../../service/NoticeServices";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

export default function CreateNote({ video, loadVideo }: Props) {
    const classes = useStyles();
    const history = useHistory();
    const handleDelete = async (id: string) => {
    await videoServices.deleteVideo(id);
    loadVideo();
    };

  return (
    <>
      <div className="album py-5 bg light">
        <div className="container">
          <div className="row">
            <div className="mt-2 ml-2">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={video.description}
                  subheader="September 14, 2016"
                  
                > {video.title}
                </CardHeader>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share" onClick={() => history.push(`/update/${video._id}`)}>
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
