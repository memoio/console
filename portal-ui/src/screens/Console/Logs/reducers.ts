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

import {
  LOG_MESSAGE_RECEIVED,
  LOG_RESET_MESSAGES,
  LogActionTypes,
} from "./actions";
import { LogMessage } from "./types";

export interface LogState {
  messages: LogMessage[];
}

const initialState: LogState = {
  messages: [],
};

export function logReducer(
  state = initialState,
  action: LogActionTypes
): LogState {
  switch (action.type) {
    case LOG_MESSAGE_RECEIVED:
      // if it's a simple ConsoleMsg, append it to the current ConsoleMsg in the
      // state if any
      let msgs = [...state.messages];

      if (
        msgs.length > 0 &&
        action.message.time.getFullYear() === 1 &&
        action.message.ConsoleMsg !== ""
      ) {
        for (let m in msgs) {
          if (msgs[m].time.getFullYear() === 1) {
            msgs[
              m
            ].ConsoleMsg = `${msgs[m].ConsoleMsg}\n${action.message.ConsoleMsg}`;
          }
        }
      } else {
        msgs.push(action.message);
      }

      return {
        ...state,
        messages: msgs,
      };
    case LOG_RESET_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
}
