import React from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, CircularProgress, Tooltip } from "@material-ui/core"
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
interface Props{
  refetchRef:any,
  environment:RelayModernEnvironment
}

const ReceivedInvitation:React.FC<Props> =({refetchRef,environment})=>{
    const {data,error,retry,isLoading}=useQuery<GetInvitationQuery>(query)

    const [details,setDetails]=React.useState({userId:"",invitationId:"",name:""})
    const [open,setOpen] = React.useState(false)
const handleClose =()=>setOpen(false)

    if(isLoading){
        return <CircularProgress disableShrink />;
    }

    const handleDelete = (id:string)=>{
      const input:DeleteInvitationInput={invitationId:id}
      DeleteInvitationMutation(environment,input,id,{onCompleted:()=>{console.log("Deleted")},onError:(err)=>{console.log(err)}})
    }

    const sentInvitations = data.getInvitations.receivedInvitations

    return <>
    <AcceptInvitation
     environment={environment}
      name={details.name} 
      invitationId={details.invitationId} 
      userId={details.userId}
      open={open}
      handleClose ={handleClose}
      />
    <List>
      {sentInvitations.map((invitation)=>{
        if(Boolean(invitation))
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
                          <IconButton color="primary" aria-label="Check" onClick={()=>{
                            setDetails({userId:invitation.sendersId,
                              name:invitation.sendersName,
                              invitationId:invitation._id})
                              setOpen(true)
                          }}>
                            <CheckIcon />
                          </IconButton>
                          </Tooltip>
                          &nbsp;&nbsp;
                          <Tooltip title="Reject Invitation">
                          <IconButton color="secondary" aria-label="delete" onClick={()=>handleDelete(invitation._id)}>
                            <DeleteIcon />
                          </IconButton>
                          </Tooltip>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                    else return null
                })}
      </List>
    </>
}

export default ReceivedInvitation