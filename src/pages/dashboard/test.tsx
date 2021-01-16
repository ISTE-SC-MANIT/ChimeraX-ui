import React from "react"
import { Button, Grid, Box } from "@material-ui/core"
import QuizPage from "../../components/quizPage"
import Instructions from "../../components/instructions"
import { ComponentProps } from "../_app"
import query from "../../components/relay/queries/GetQuizStatusQuery"
import { useQuery } from "relay-hooks"
import { GetQuizStatusQuery, UserQuizStatus } from "../../__generated__/GetQuizStatusQuery.graphql"
import LoadingScreen from "../../components/loadingScreen"
import StartQuizMutation from "../../components/relay/mutations/StartQuizMutation"
import { useRouter } from "next/router"
import Success from "../../components/success"

const Team: React.FC<ComponentProps> = ({ viewer, environment, setSuccessMessage, refetch, setErrorMessage }) => {
    const [quizStatus, setQuizStatus] = React.useState<UserQuizStatus>("NOT_STARTED")
    const { data, error, isLoading, retry } = useQuery<GetQuizStatusQuery>(query)
    const router = useRouter()

    React.useEffect(() => {
        if (viewer.step === "REGISTER") {
            router.push("/dashboard/register")
        }
        if (viewer.step === "PAYMENT") {
            router.push("/dashboard/payment")
        }
        if (viewer.step === "TEST") {

        }
        if (viewer.step === "CHOOSE_TEAM") {
            router.push("/dashboard/team")
        }

    }, [])
    React.useEffect(() => {
        if (Boolean(data)) {
            setQuizStatus(data.getQuizDetails.userQuizStatus)
        }

    }, [data])
    if (isLoading) {
        return <LoadingScreen loading />
    }






    const handleStartQuiz = () => {
        StartQuizMutation(environment, {
            onCompleted: () => {
                setSuccessMessage("Quiz has Started")
                setQuizStatus("STARTED")
            }, onError: () => { setErrorMessage("Something went wrong") }
        })
    }


    return quizStatus === "STARTED" ? (
        <QuizPage
            viewer={viewer}
            environment={environment}
            setSuccessMessage={setSuccessMessage}
            refetch={refetch}
            setErrorMessage={setErrorMessage}
            setQuizStatus={()=>setQuizStatus("ENDED")}
        />
    ) : (quizStatus === "NOT_STARTED" ?
        <>
            <Instructions
                viewer={viewer}
                environment={environment}
                setSuccessMessage={setSuccessMessage}
                refetch={refetch}
                setErrorMessage={setErrorMessage}
            />
            <Grid container spacing={0} alignItems="center" justify="center">
                <Box>
                    <Button onClick={handleStartQuiz} disabled={false} variant="contained" color="primary">Start Quiz</Button></Box>
            </Grid>

        </> : <Success />
        )
}

export default Team