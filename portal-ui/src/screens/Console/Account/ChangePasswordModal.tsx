// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useState } from "react";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import ModalWrapper from "../Common/ModalWrapper/ModalWrapper";
import Grid from "@mui/material/Grid";
import InputBoxWrapper from "../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import { Button, LinearProgress } from "@mui/material";
import {
  containerForHeader,
  formFieldStyles,
  modalStyleUtils,
  spacingUtils,
} from "../Common/FormComponents/common/styleLibrary";
import { ChangePasswordRequest } from "../Buckets/types";
import { setModalErrorSnackMessage } from "../../../actions";
import { ErrorResponseHandler } from "../../../common/types";
import api from "../../../common/api";
import { ChangePasswordIcon } from "../../../icons";

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    ...modalStyleUtils,
    ...formFieldStyles,
    ...spacingUtils,
    ...containerForHeader(theme.spacing(4)),
  });

interface IChangePasswordProps {
  classes: any;
  open: boolean;
  closeModal: () => void;
  setModalErrorSnackMessage: typeof setModalErrorSnackMessage;
}

const ChangePassword = ({
  classes,
  open,
  closeModal,
  setModalErrorSnackMessage,
}: IChangePasswordProps) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changePassword = (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== reNewPassword) {
      setModalErrorSnackMessage({
        errorMessage: "New passwords don't match",
        detailedError: "",
      });
      return;
    }

    if (newPassword.length < 8) {
      setModalErrorSnackMessage({
        errorMessage: "Passwords must be at least 8 characters long",
        detailedError: "",
      });
      return;
    }

    if (loading) {
      return;
    }
    setLoading(true);

    let request: ChangePasswordRequest = {
      current_secret_key: currentPassword,
      new_secret_key: newPassword,
    };

    api
      .invoke("POST", "/api/v1/account/change-password", request)
      .then(() => {
        setLoading(false);
        setNewPassword("");
        setReNewPassword("");
        setCurrentPassword("");
        closeModal();
      })
      .catch((err: ErrorResponseHandler) => {
        setLoading(false);
        setNewPassword("");
        setReNewPassword("");
        setCurrentPassword("");
        setModalErrorSnackMessage(err);
      });
  };

  return open ? (
    <ModalWrapper
      title="Change Password"
      modalOpen={open}
      onClose={() => {
        setNewPassword("");
        setReNewPassword("");
        setCurrentPassword("");
        closeModal();
      }}
      titleIcon={<ChangePasswordIcon />}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          changePassword(e);
        }}
      >
        <Grid container>
          <Grid item xs={12} className={classes.modalFormScrollable}>
            <Grid item xs={12} className={classes.formFieldRow}>
              <InputBoxWrapper
                id="current-password"
                name="current-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCurrentPassword(event.target.value);
                }}
                label="Current Password"
                type="password"
                value={currentPassword}
              />
            </Grid>
            <Grid item xs={12} className={classes.formFieldRow}>
              <InputBoxWrapper
                id="new-password"
                name="new-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNewPassword(event.target.value);
                }}
                label="New Password"
                type="password"
                value={newPassword}
              />
            </Grid>
            <Grid item xs={12} className={classes.formFieldRow}>
              <InputBoxWrapper
                id="re-new-password"
                name="re-new-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReNewPassword(event.target.value);
                }}
                label="Type New Password Again"
                type="password"
                value={reNewPassword}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.modalButtonBar}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                loading ||
                !(
                  currentPassword.length > 0 &&
                  newPassword.length > 0 &&
                  reNewPassword.length > 0
                )
              }
            >
              Save
            </Button>
          </Grid>
          {loading && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </form>
    </ModalWrapper>
  ) : null;
};

const connector = connect(null, {
  setModalErrorSnackMessage,
});

export default withStyles(styles)(connector(ChangePassword));
