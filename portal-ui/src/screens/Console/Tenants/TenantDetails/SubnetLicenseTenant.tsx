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

import React from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import { containerForHeader } from "../../Common/FormComponents/common/styleLibrary";
import { Typography } from "@mui/material";
import { niceBytes } from "../../../../common/utils";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { ITenant } from "../ListTenants/types";
import RBIconButton from "../../Buckets/BucketDetails/SummaryItems/RBIconButton";


interface ISubnetLicenseTenant {
  classes: any;
  tenant: ITenant | null;
  loadingActivateProduct: any;
  loadingLicenseInfo: boolean;
  licenseInfo:  undefined;
  activateProduct: any;
}

const styles = (theme: Theme) =>
  createStyles({
    paperContainer: {
      padding: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    licenseInfoValue: {
      textTransform: "none",
      fontSize: 14,
      fontWeight: "bold",
    },
    licenseContainer: {
      position: "relative",
      padding: "20px 52px 0px 28px",
      background: "#032F51",
      boxShadow: "0px 3px 7px #00000014",
      "& h2": {
        color: "#FFF",
        marginBottom: 67,
      },
      "& a": {
        textDecoration: "none",
      },
      "& h3": {
        color: "#FFFFFF",
        marginBottom: "30px",
        fontWeight: "bold",
      },
      "& h6": {
        color: "#FFFFFF !important",
      },
    },
    licenseInfo: { color: "#FFFFFF", position: "relative" },
    licenseInfoTitle: {
      textTransform: "none",
      color: "#BFBFBF",
      fontSize: 11,
    },
    verifiedIcon: {
      width: 96,
      position: "absolute",
      right: 0,
      bottom: 29,
    },
    noUnderLine: {
      textDecoration: "none",
    },
    ...containerForHeader(theme.spacing(4)),
  });


