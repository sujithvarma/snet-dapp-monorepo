import React from "react";

import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";

import IncubationProgressDetails from "./IncubationProgressDetails";
import Agreement from "./Agreement";
import Card from "./Card";
import { useStyles } from "./styles";

const StackSession = ({ cardDetails, incubationProgressDetails, agreementDetails, date, id, btnDetails }) => {
  const classes = useStyles();

  return (
    <div className={classes.StackSessionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">
          Stake Session - {date} {id}
        </Typography>
      </div>
      <div className={classes.content}>
        <IncubationProgressDetails details={incubationProgressDetails} />
        <div className={classes.cards}>
          {cardDetails.map(item => (
            <Card key={item.title} title={item.title} value={item.value} unit={item.unit} />
          ))}
        </div>
        <Agreement details={agreementDetails} />
        <div className={classes.infoBox}>
          <AlertBox type={alertTypes.INFO}>
            <InfoIcon />
            <div>
              <Typography>- Stake amount must be minimum 500 AGI and maximum 1000 AGI</Typography>
              <Typography>- SNET foundation will accept all or a partial amount of your stake.</Typography>
              <Typography>
                - Rejected stake portions not accepted will be returned to your wallet account automatically (no gas
                cost).
              </Typography>
            </div>
          </AlertBox>
        </div>
        {btnDetails ? (
          <div className={classes.btnContainer}>
            {btnDetails.map(button => (
              <SNETButton key={button.text} color={button.color} variant={button.variant} children={button.text} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StackSession;
