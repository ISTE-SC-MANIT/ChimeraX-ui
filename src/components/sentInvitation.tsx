import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress } from "@material-ui/core"
import { useQuery } from "relay-hooks"
import { GetInvitationQuery } from "../__generated__/GetInvitationQuery.graphql"
import query from "../components/relay/queries/GetInvitationQuery"
import IconButton from '@material-ui/core/IconButton';
//import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props{
  refetchRef:any,
  send:boolean
}

const SendInvitation:React.FC<Props> =({refetchRef,send})=>{
    const {data,error,retry,isLoading}=useQuery<GetInvitationQuery>(query)
    

  React.useEffect(()=>{

retry()
  },[send])
    if(isLoading){
        return <CircularProgress disableShrink />;
    }

    const sentInvitations = data.getInvitations.sentInvitations

    return <>
    <List>
      {sentInvitations.map((invitation)=>{
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
                          <IconButton color="secondary" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                })}
      </List>
    </>
}

export default SendInvitation