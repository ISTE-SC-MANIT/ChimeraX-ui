import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress } from "@material-ui/core"
import { useQuery } from "relay-hooks"
import { GetInvitationQuery } from "../__generated__/GetInvitationQuery.graphql"
import query from "../components/relay/queries/GetInvitationQuery"


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
                    return (<ListItem>
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/dummy.png" />
                            
                        </ListItemAvatar>
                        <ListItemText
                          primary={invitation.receiversName}
                          secondary={invitation.receiversEmail}
                        />
                        <ListItemSecondaryAction>
                          {/* <Button variant="contained" color="primary">Confirm</Button>&nbsp;&nbsp; */}
                        <Button variant="outlined" color="primary">Delete</Button>
                        </ListItemSecondaryAction>
                      </ListItem>)
                })}
      </List>
    </>
}

export default SendInvitation