import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress } from "@material-ui/core"
import { useQuery } from "relay-hooks"
import { GetInvitationQuery } from "../__generated__/GetInvitationQuery.graphql"
import query from "../components/relay/queries/GetInvitationQuery"



const ReceivedInvitation:React.FC =()=>{
    const {data,error,retry,isLoading}=useQuery<GetInvitationQuery>(query)
    
    if(isLoading){
        return <CircularProgress disableShrink />;
    }

    const sentInvitations = data.getInvitations.receivedInvitations

    return <>
    <List>
      {sentInvitations.map((invitation)=>{
                    return (<ListItem>
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/dummy.png" />
                            
                        </ListItemAvatar>
                        <ListItemText
                          primary={invitation.receiversName}
                          secondary={invitation.receiversEmail}
                        />
                        <ListItemSecondaryAction><Button variant="contained" color="primary">Confirm</Button>&nbsp;&nbsp;
                        <Button variant="outlined" color="primary">Reject</Button>
                        </ListItemSecondaryAction>
                      </ListItem>)
                })}
      </List>
    </>
}

export default ReceivedInvitation