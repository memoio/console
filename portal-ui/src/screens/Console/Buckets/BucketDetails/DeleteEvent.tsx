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
import get from "lodash/get";
import { connect } from "react-redux";
import { DialogContentText } from "@mui/material";
import { BucketEvent } from "../types";
import { setErrorSnackMessage } from "../../../../actions";
import { ErrorResponseHandler } from "../../../../common/types";
import useApi from "../../Common/Hooks/useApi";
import ConfirmDialog from "../../Common/ModalWrapper/ConfirmDialog";
import { ConfirmDeleteIcon } from "../../../../icons";

interface IDeleteEventProps {
  closeDeleteModalAndRefresh: (refresh: boolean) => void;
  deleteOpen: boolean;
  selectedBucket: string;
  bucketEvent: BucketEvent | null;
  setErrorSnackMessage: typeof setErrorSnackMessage;
}

const DeleteEvent = ({
  closeDeleteModalAndRefresh,
  deleteOpen,
  selectedBucket,
  bucketEvent,
  setErrorSnackMessage,
}: IDeleteEventProps) => {
  const onDelSuccess = () => closeDeleteModalAndRefresh(true);
  const onDelError = (err: ErrorResponseHandler) => setErrorSnackMessage(err);
  const onClose = () => closeDeleteModalAndRefresh(false);

  const [deleteLoading, invokeDeleteApi] = useApi(onDelSuccess, onDelError);

  if (!selectedBucket) {
    return null;
  }

  const onConfirmDelete = () => {
    if (bucketEvent === null) {
      return;
    }

    const events = get(bucketEvent, "events", []);
    const prefix = get(bucketEvent, "prefix", "");
    const suffix = get(bucketEvent, "suffix", "");

    invokeDeleteApi(
      "DELETE",
      `/api/v1/buckets/${selectedBucket}/events/${bucketEvent.arn}`,
      {
        events,
        prefix,
        suffix,
      }
    );
  };

  return (
    <ConfirmDialog
      title={`Delete Event`}
      confirmText={"Delete"}
      isOpen={deleteOpen}
      titleIcon={<ConfirmDeleteIcon />}
      isLoading={deleteLoading}
      onConfirm={onConfirmDelete}
      onClose={onClose}
      confirmationContent={
        <DialogContentText>
          Are you sure you want to delete this event?
        </DialogContentText>
      }
    />
  );
};

const connector = connect(null, {
  setErrorSnackMessage,
});

export default connector(DeleteEvent);
