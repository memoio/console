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

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Box, Button, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import api from "../../../../common/api";
import ConfTargetGeneric from "../ConfTargetGeneric";
import { serverNeedsRestart, setErrorSnackMessage } from "../../../../actions";
import {
  fieldBasic,
  settingsCommon,
} from "../../Common/FormComponents/common/styleLibrary";
import {
  fieldsConfigurations,
  removeEmptyFields,
} from "../../Configurations/utils";
import {
  IConfigurationElement,
  IElementValue,
} from "../../Configurations/types";
import { ErrorResponseHandler } from "../../../../common/types";
import ResetConfigurationModal from "./ResetConfigurationModal";

const styles = (theme: Theme) =>
  createStyles({
    ...fieldBasic,
    ...settingsCommon,
    settingsFormContainer: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: "10px",
    },
  });

interface IAddNotificationEndpointProps {
  serverNeedsRestart: typeof serverNeedsRestart;
  setErrorSnackMessage: typeof setErrorSnackMessage;
  selectedConfiguration: IConfigurationElement;
  classes: any;
  history: any;
  className?: string;
}

const EditConfiguration = ({
  serverNeedsRestart,
  selectedConfiguration,
  setErrorSnackMessage,
  classes,
  history,
  className = "",
}: IAddNotificationEndpointProps) => {
  //Local States
  const [valuesObj, setValueObj] = useState<IElementValue[]>([]);
  const [saving, setSaving] = useState<boolean>(false);
  const [loadingConfig, setLoadingConfig] = useState<boolean>(true);
  const [configValues, setConfigValues] = useState<IElementValue[]>([]);
  const [resetConfigurationOpen, setResetConfigurationOpen] =
    useState<boolean>(false);
  //Effects
  useEffect(() => {
    if (loadingConfig) {
      const configId = get(selectedConfiguration, "configuration_id", false);

      if (configId) {
        api
          .invoke("GET", `/api/v1/configs/${configId}`)
          .then((res) => {
            const keyVals = get(res, "key_values", []);
            setConfigValues(keyVals);
            setLoadingConfig(false);
          })
          .catch((err: ErrorResponseHandler) => {
            setLoadingConfig(false);
            setErrorSnackMessage(err);
          });

        return;
      }
      setLoadingConfig(false);
    }
  }, [loadingConfig, selectedConfiguration, setErrorSnackMessage]);

  useEffect(() => {
    if (saving) {
      const payload = {
        key_values: removeEmptyFields(valuesObj),
      };
      api
        .invoke(
          "PUT",
          `/api/v1/configs/${selectedConfiguration.configuration_id}`,
          payload
        )
        .then((res) => {
          setSaving(false);
          serverNeedsRestart(res.restart);

          history.push("/settings");
        })
        .catch((err: ErrorResponseHandler) => {
          setSaving(false);
          setErrorSnackMessage(err);
        });
    }
  }, [
    saving,
    history,
    serverNeedsRestart,
    selectedConfiguration,
    valuesObj,
    setErrorSnackMessage,
  ]);

  //Fetch Actions
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
  };

  const onValueChange = useCallback(
    (newValue) => {
      setValueObj(newValue);
    },
    [setValueObj]
  );

  const continueReset = (restart: boolean) => {
    setResetConfigurationOpen(false);
    serverNeedsRestart(restart);
    if (restart) {
      setLoadingConfig(true);
    }
  };

  return (
    <Fragment>
      {resetConfigurationOpen && (
        <ResetConfigurationModal
          configurationName={selectedConfiguration.configuration_id}
          closeResetModalAndRefresh={continueReset}
          resetOpen={resetConfigurationOpen}
        />
      )}
      {loadingConfig ? (
        <Grid item xs={12}>
          <LinearProgress />
        </Grid>
      ) : (
        <Box
          sx={{
            padding: "15px",
            height: "100%",
          }}
        >
          <form
            noValidate
            onSubmit={submitForm}
            className={className}
            style={{
              height: "100%",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Grid item xs={12} className={classes.settingsFormContainer}>
              <ConfTargetGeneric
                fields={
                  fieldsConfigurations[selectedConfiguration.configuration_id]
                }
                onChange={onValueChange}
                defaultVals={configValues}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "15px ",
                textAlign: "right" as const,
                maxHeight: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                sx={{
                  padding: {
                    xs: "3px", //avoid wrapping on smaller screens
                    md: "20px",
                  },
                }}
                onClick={() => {
                  setResetConfigurationOpen(true);
                }}
              >
                Restore Defaults
              </Button>
              &nbsp; &nbsp;
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={saving}
              >
                Save
              </Button>
            </Grid>
          </form>
        </Box>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = {
  serverNeedsRestart,
  setErrorSnackMessage,
};

const connector = connect(null, mapDispatchToProps);

export default connector(withStyles(styles)(EditConfiguration));
