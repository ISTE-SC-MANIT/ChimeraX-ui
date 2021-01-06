import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress, Tooltip, Box } from "@material-ui/core"
import { useQuery } from "relay-hooks"
import { GetInvitationQuery } from "../__generated__/GetInvitationQuery.graphql"
import query from "../components/relay/queries/GetInvitationQuery"
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment"
import AcceptInvitation from "./acceptInvitation"
import DeleteInvitationMutation from "../components/relay/mutations/DeleteInvitationMutation"
import { DeleteInvitationInput } from "../__generated__/DeleteInvitationMutation.graphql"
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
interface Props {
  refetchRef: any;
  environment: RelayModernEnvironment;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
  refetch:()=>void
}

const ReceivedInvitation: React.FC<Props> = ({
  refetchRef,
  environment,
  setSuccessMessage,
  setErrorMessage,
  refetch
}) => {
  const { data, error, retry, isLoading } = useQuery<GetInvitationQuery>(query);

  const [details, setDetails] = React.useState({ userId: '', invitationId: '', name: '' });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  
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

  const sentInvitations = data.getInvitations.receivedInvitations;

  return (
    <>
      <AcceptInvitation
        environment={environment}
        name={details.name}
        invitationId={details.invitationId}
        userId={details.userId}
        open={open}
        handleClose={handleClose}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
        refetch={refetch}
      />
      <List>
        {sentInvitations.map((invitation) => {
          if (Boolean(invitation))
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/dummy.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={invitation.sendersName}
                  secondary={invitation.sendersEmail}
                />
                <ListItemSecondaryAction>
                  <Tooltip title="Accept Invitation">
                    <IconButton
                      color="primary"
                      aria-label="Check"
                      onClick={() => {
                        setDetails({
                          userId: invitation.sendersId,
                          name: invitation.sendersName,
                          invitationId: invitation._id,
                        });
                        setOpen(true);
                      }}
                    >
                      <CheckIcon />
                    </IconButton>
                  </Tooltip>
                  &nbsp;&nbsp;
                  <Tooltip title="Reject Invitation">
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
          else return null;
        })}
      </List>
    </>
  );
};

export default ReceivedInvitation