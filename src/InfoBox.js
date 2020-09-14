import React from "react";
import "./InfoBox.css";

import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, color, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected-"}${color}`}
    >
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* number */}
        <h1 className={`infoBox__cases infoBox--${color}`}>{cases}</h1>
        {/* total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
