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
import moment from "moment"

const Team: React.FC<ComponentProps> = ({ viewer, environment, setSuccessMessage, refetch, setErrorMessage }) => {
    const [quizStatus, setQuizStatus] = React.useState<UserQuizStatus>("NOT_STARTED")
    const [disableButton,setButtonDisable]=React.useState(true)
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
        const timer = setInterval(() => {
            const currentTime = moment(new Date())
            const enableTime = moment("19:00:00","hh:mm:ss")
            const disableTime = moment("19:06:00","hh:mm:ss")
            if (currentTime.isBetween(enableTime,disableTime)) {
                setButtonDisable(false)
            }else{
                setButtonDisable(true)
                if(currentTime.isAfter(disableTime))
                clearInterval(timer)
            }
          
            
        }, 1000);

        return () => clearTimeout(timer);
    })
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


    return quizStatus === 'STARTED' ? (
      <QuizPage
        viewer={viewer}
        environment={environment}
        setSuccessMessage={setSuccessMessage}
        refetch={refetch}
        setErrorMessage={setErrorMessage}
        setQuizStatus={() => setQuizStatus('ENDED')}
      />
    ) : quizStatus === 'NOT_STARTED' ? (
      <>
        <Instructions
          page="instructions"
          viewer={viewer}
          environment={environment}
          setSuccessMessage={setSuccessMessage}
          refetch={refetch}
          setErrorMessage={setErrorMessage}
        />
        <Grid container spacing={0} alignItems="center" justify="center">
          <Box marginBottom={4}>
            <Button
              onClick={handleStartQuiz}
              disabled={disableButton}
              variant="contained"
              color="primary"
            >
              Start Quiz
            </Button>
          </Box>
        </Grid>
      </>
    ) : (
      <Success
        viewer={viewer}
        environment={environment}
        setSuccessMessage={setSuccessMessage}
        refetch={refetch}
        setErrorMessage={setErrorMessage}
      />
    );
}

export default Team