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

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/memoio/console/models"
)

// AddTierCreatedCode is the HTTP code returned for type AddTierCreated
const AddTierCreatedCode int = 201

/*AddTierCreated A successful response.

swagger:response addTierCreated
*/
type AddTierCreated struct {
}

// NewAddTierCreated creates AddTierCreated with default headers values
func NewAddTierCreated() *AddTierCreated {

	return &AddTierCreated{}
}

// WriteResponse to the client
func (o *AddTierCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*AddTierDefault Generic error response.

swagger:response addTierDefault
*/
type AddTierDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewAddTierDefault creates AddTierDefault with default headers values
func NewAddTierDefault(code int) *AddTierDefault {
	if code <= 0 {
		code = 500
	}

	return &AddTierDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the add tier default response
func (o *AddTierDefault) WithStatusCode(code int) *AddTierDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the add tier default response
func (o *AddTierDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the add tier default response
func (o *AddTierDefault) WithPayload(payload *models.Error) *AddTierDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the add tier default response
func (o *AddTierDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *AddTierDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
