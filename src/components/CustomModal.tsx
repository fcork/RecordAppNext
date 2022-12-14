import React, { useState } from "react";
import { Modal, Button, Box, Typography, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface Props {
  handleClose: () => void,
  open: boolean,
  position: number,
  arrayLength: number,
  currentAlbum: string,
  nextHandler: () => void,
  previousHandler: () => void,
  handleSubmit: () => void
}

const CustomModal: React.FC<Props> = ({ open, handleClose, nextHandler, previousHandler, position, handleSubmit, arrayLength, currentAlbum }: any) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  const disableRightButton = position === arrayLength - 1;
  const disableLeftButton = position === 0;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Artwork
          </Typography>
          <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid item>
              <Button
                onClick={previousHandler}
                disabled={disableLeftButton}
              >
                <ArrowBackIosIcon />
              </Button>
            </Grid>
            <Grid item>
              <img
                src={currentAlbum}
                height={324}
                width={324}
                alt="viewAlt"
              />
            </Grid>

            <Grid item>
              <Button onClick={nextHandler} disabled={disableRightButton}>
                <ArrowForwardIosIcon />
              </Button>
            </Grid>

            
          </Grid>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
