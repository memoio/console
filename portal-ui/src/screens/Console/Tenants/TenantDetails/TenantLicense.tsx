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

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import {
  containerForHeader,
  tenantDetailsStyles,
} from "../../Common/FormComponents/common/styleLibrary";
import { ITenant } from "../ListTenants/types";

import { setErrorSnackMessage } from "../../../../actions";
import { AppState } from "../../../../store";
import { setTenantDetailsLoad } from "../actions";
import { ErrorResponseHandler } from "../../../../common/types";

import api from "../../../../common/api";
import Loader from "../../Common/Loader/Loader";

interface ITenantLicense {
  classes: any;
  loadingTenant: boolean;
  tenant: ITenant | null;
  setTenantDetailsLoad: typeof setTenantDetailsLoad;
}

const styles = (theme: Theme) =>
  createStyles({
    ...tenantDetailsStyles,
    loaderAlign: {
      textAlign: "center",
    },
    ...containerForHeader(theme.spacing(4)),
  });



const mapState = (state: AppState) => ({
  loadingTenant: state.tenants.tenantDetails.loadingTenant,
  tenant: state.tenants.tenantDetails.tenantInfo,
});

const connector = connect(mapState, {
  setErrorSnackMessage,
  setTenantDetailsLoad,
});


