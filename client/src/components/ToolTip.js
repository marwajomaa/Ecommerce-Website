import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";

function ToolTip({ title, children }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={title}
    >
      {children}
    </Tooltip>
  );
}

export default ToolTip;
