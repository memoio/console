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

// ListBucketEventsOKCode is the HTTP code returned for type ListBucketEventsOK
const ListBucketEventsOKCode int = 200

/*ListBucketEventsOK A successful response.

swagger:response listBucketEventsOK
*/
type ListBucketEventsOK struct {

	/*
	  In: Body
	*/
	Payload *models.ListBucketEventsResponse `json:"body,omitempty"`
}

// NewListBucketEventsOK creates ListBucketEventsOK with default headers values
func NewListBucketEventsOK() *ListBucketEventsOK {

	return &ListBucketEventsOK{}
}

// WithPayload adds the payload to the list bucket events o k response
func (o *ListBucketEventsOK) WithPayload(payload *models.ListBucketEventsResponse) *ListBucketEventsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list bucket events o k response
func (o *ListBucketEventsOK) SetPayload(payload *models.ListBucketEventsResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListBucketEventsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*ListBucketEventsDefault Generic error response.

swagger:response listBucketEventsDefault
*/
type ListBucketEventsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewListBucketEventsDefault creates ListBucketEventsDefault with default headers values
func NewListBucketEventsDefault(code int) *ListBucketEventsDefault {
	if code <= 0 {
		code = 500
	}

	return &ListBucketEventsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the list bucket events default response
func (o *ListBucketEventsDefault) WithStatusCode(code int) *ListBucketEventsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the list bucket events default response
func (o *ListBucketEventsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the list bucket events default response
func (o *ListBucketEventsDefault) WithPayload(payload *models.Error) *ListBucketEventsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list bucket events default response
func (o *ListBucketEventsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListBucketEventsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
