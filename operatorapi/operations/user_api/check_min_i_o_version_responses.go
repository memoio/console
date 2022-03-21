// Code generated by go-swagger; DO NOT EDIT.

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
//

package user_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/memoio/console/models"
)

// CheckMinIOVersionOKCode is the HTTP code returned for type CheckMinIOVersionOK
const CheckMinIOVersionOKCode int = 200

/*CheckMinIOVersionOK A successful response.

swagger:response checkMinIOVersionOK
*/
type CheckMinIOVersionOK struct {

	/*
	  In: Body
	*/
	Payload *models.CheckOperatorVersionResponse `json:"body,omitempty"`
}

// NewCheckMinIOVersionOK creates CheckMinIOVersionOK with default headers values
func NewCheckMinIOVersionOK() *CheckMinIOVersionOK {

	return &CheckMinIOVersionOK{}
}

// WithPayload adds the payload to the check min i o version o k response
func (o *CheckMinIOVersionOK) WithPayload(payload *models.CheckOperatorVersionResponse) *CheckMinIOVersionOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the check min i o version o k response
func (o *CheckMinIOVersionOK) SetPayload(payload *models.CheckOperatorVersionResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CheckMinIOVersionOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*CheckMinIOVersionDefault Generic error response.

swagger:response checkMinIOVersionDefault
*/
type CheckMinIOVersionDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewCheckMinIOVersionDefault creates CheckMinIOVersionDefault with default headers values
func NewCheckMinIOVersionDefault(code int) *CheckMinIOVersionDefault {
	if code <= 0 {
		code = 500
	}

	return &CheckMinIOVersionDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the check min i o version default response
func (o *CheckMinIOVersionDefault) WithStatusCode(code int) *CheckMinIOVersionDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the check min i o version default response
func (o *CheckMinIOVersionDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the check min i o version default response
func (o *CheckMinIOVersionDefault) WithPayload(payload *models.Error) *CheckMinIOVersionDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the check min i o version default response
func (o *CheckMinIOVersionDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CheckMinIOVersionDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
