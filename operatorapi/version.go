// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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

package operatorapi

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/memoio/console/models"
	"github.com/memoio/console/operatorapi/operations"
	"github.com/memoio/console/operatorapi/operations/user_api"

	"net/http"
	"time"

	"github.com/memoio/console/pkg/utils"
)

func registerVersionHandlers(api *operations.OperatorAPI) {
	api.UserAPICheckMinIOVersionHandler = user_api.CheckMinIOVersionHandlerFunc(func(params user_api.CheckMinIOVersionParams) middleware.Responder {
		versionResponse, err := getVersionResponse()
		if err != nil {
			return user_api.NewCheckMinIOVersionDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewCheckMinIOVersionOK().WithPayload(versionResponse)
	})
}

// getSessionResponse parse the token of the current session and returns a list of allowed actions to render in the UI
func getVersionResponse() (*models.CheckOperatorVersionResponse, *models.Error) {
	ver, err := utils.GetLatestMinIOImage(&utils.HTTPClient{
		Client: &http.Client{
			Timeout: 15 * time.Second,
		}})
	if err != nil {
		return nil, prepareError(err)
	}
	return &models.CheckOperatorVersionResponse{
		LatestVersion: *ver,
	}, nil
}
