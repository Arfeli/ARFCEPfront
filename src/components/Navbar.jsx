import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import EditIcon from '@material-ui/icons/Edit';
import FaceIcon from '@material-ui/icons/Face';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '%100',
    background: "#ccc"
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push("/"+ newValue)
  };


  return (
    <div className="content-justify-between">
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      
        <BottomNavigationAction
          label="Notishot"
          value=""
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          label="Noticias"
          value="todo-noticia"
          icon={<RemoveRedEyeIcon />}
        />
        <BottomNavigationAction
          label="Editar"
          value="editar"
          icon={<EditIcon />}
        />
        <BottomNavigationAction
          label="Cuenta"
          value="cuenta"
          icon={<FaceIcon />}
        />
    </BottomNavigation>
      </div>
  );
}
