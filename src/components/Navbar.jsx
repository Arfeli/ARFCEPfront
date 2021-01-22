import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '%100',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("notishot");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push("/todo-noticia")
  };
  const handleChangeNotishot  = (event, newValue) => {
    setValue(newValue);
    history.push("/");
  };
  const handleChangeTodoNoticia  = (event, newValue) => {
    setValue(newValue);
    history.push("/todo-noticia");
  };
  

  return (
    <div className="container content-justify-between">
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      
        <BottomNavigationAction
          label="Notishot"
          value="notishot"
          onChange={handleChangeNotishot}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Noticias"
          value="todo-noticia"
          onChange={handleChangeTodoNoticia}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
    </BottomNavigation>
      </div>
  );
}
