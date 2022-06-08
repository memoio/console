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

import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "./store";
import {
  consoleOperatorMode,
  setDistributedMode,
  userLoggedIn,
} from "./actions";
import api from "./common/api";
import { saveSessionResponse } from "./screens/Console/actions";
import { ISessionResponse } from "./screens/Console/types";

interface ProtectedRouteProps {
  loggedIn: boolean;
  Component: any;
  userLoggedIn: typeof userLoggedIn;
  consoleOperatorMode: typeof consoleOperatorMode;
  saveSessionResponse: typeof saveSessionResponse;
  setDistributedMode: typeof setDistributedMode;
}

const ProtectedRoute = ({
  Component,
  loggedIn,
  userLoggedIn,
  consoleOperatorMode,
  saveSessionResponse,
  setDistributedMode,
}: ProtectedRouteProps) => {
  const [sessionLoading, setSessionLoading] = useState<boolean>(true);
  useEffect(() => {
    api
      .invoke("GET", `/api/v1/session`)
      .then((res: ISessionResponse) => {
        saveSessionResponse(res);
        userLoggedIn(true);
        setSessionLoading(false);
        setDistributedMode(res.distributedMode || false);
        // check for tenants presence, that indicates we are in operator mode
        if (res.operator) {
          consoleOperatorMode(true);
          document.title = "Memo Operator";
        }
      })
      .catch(() => setSessionLoading(false));
  }, [
    saveSessionResponse,
    consoleOperatorMode,
    userLoggedIn,
    setDistributedMode,
  ]);

  // if we still trying to retrieve user session render nothing
  if (sessionLoading) {
    return null;
  }
  // redirect user to the right page based on session status
  return loggedIn ? <Component /> : <Redirect to={{ pathname: "/login" }} />;
};

const mapState = (state: AppState) => ({
  loggedIn: state.system.loggedIn,
});

const connector = connect(mapState, {
  userLoggedIn,
  consoleOperatorMode,
  saveSessionResponse,
  setDistributedMode,
});

export default connector(ProtectedRoute);
