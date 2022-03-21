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

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/memoio/console/models"
)

// GetTenantYAMLOKCode is the HTTP code returned for type GetTenantYAMLOK
const GetTenantYAMLOKCode int = 200

/*GetTenantYAMLOK A successful response.

swagger:response getTenantYAMLOK
*/
type GetTenantYAMLOK struct {

	/*
	  In: Body
	*/
	Payload *models.TenantYAML `json:"body,omitempty"`
}

// NewGetTenantYAMLOK creates GetTenantYAMLOK with default headers values
func NewGetTenantYAMLOK() *GetTenantYAMLOK {

	return &GetTenantYAMLOK{}
}

// WithPayload adds the payload to the get tenant y a m l o k response
func (o *GetTenantYAMLOK) WithPayload(payload *models.TenantYAML) *GetTenantYAMLOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get tenant y a m l o k response
func (o *GetTenantYAMLOK) SetPayload(payload *models.TenantYAML) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetTenantYAMLOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetTenantYAMLDefault Generic error response.

swagger:response getTenantYAMLDefault
*/
type GetTenantYAMLDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetTenantYAMLDefault creates GetTenantYAMLDefault with default headers values
func NewGetTenantYAMLDefault(code int) *GetTenantYAMLDefault {
	if code <= 0 {
		code = 500
	}

	return &GetTenantYAMLDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get tenant y a m l default response
func (o *GetTenantYAMLDefault) WithStatusCode(code int) *GetTenantYAMLDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get tenant y a m l default response
func (o *GetTenantYAMLDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get tenant y a m l default response
func (o *GetTenantYAMLDefault) WithPayload(payload *models.Error) *GetTenantYAMLDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get tenant y a m l default response
func (o *GetTenantYAMLDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetTenantYAMLDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
