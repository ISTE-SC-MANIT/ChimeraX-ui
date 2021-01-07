import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress, Tooltip, Box } from "@material-ui/core"
import { useQuery } from "relay-hooks"
import { GetInvitationQuery } from "../__generated__/GetInvitationQuery.graphql"
import query from "../components/relay/queries/GetInvitationQuery"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteInvitationMutation from "../components/relay/mutations/DeleteInvitationMutation"
import { DeleteInvitationInput } from "../__generated__/DeleteInvitationMutation.graphql"
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment"

//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  refetchRef: any;
  send: boolean;
  environment: RelayModernEnvironment;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

const SendInvitation: React.FC<Props> = ({
  refetchRef,
  send,
  environment,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const { data, error, retry, isLoading } = useQuery<GetInvitationQuery>(query);

  React.useEffect(() => {
    retry();
  }, [send]);
  if (isLoading) {
    return  <Box ml={32} mt={12}><CircularProgress disableShrink size={60} /></Box>
  }

  const handleDelete = (id: string) => {
    const input: DeleteInvitationInput = { invitationId: id };
    DeleteInvitationMutation(environment, input, id, {
      onCompleted: () => {
        setSuccessMessage('Deleted');
      },
      onError: (err) => {
        setErrorMessage(err.message);
      },
    });
  };

  const sentInvitations = data?.getInvitations?.sentInvitations;

  return (
    <>
      <List>
        {sentInvitations.map((invitation) => {
          if (Boolean(invitation))
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/dummy.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={invitation.receiversName}
                  secondary={invitation.receiversEmail}
                />
                <ListItemSecondaryAction>
                  {/* <Button variant="contained" color="primary">Confirm</Button>&nbsp;&nbsp; */}
                  <Tooltip title="Delete Invitation">
                    <IconButton
                      color="secondary"
                      aria-label="delete"
                      onClick={() => handleDelete(invitation._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            );
          else {
            return null;
          }
        })}
      </List>
    </>
  );
};

export default SendInvitation