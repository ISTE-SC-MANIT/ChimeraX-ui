import React from "react"
import { Button, Grid, Box } from "@material-ui/core"
import QuizPage from "../../components/quizPage"
import Instructions from "../../components/instructions"
import { ComponentProps } from "../_app"
import query from "../../components/relay/queries/GetQuizStatusQuery"
import { useQuery } from "relay-hooks"
import { GetQuizStatusQuery } from "../../__generated__/GetQuizStatusQuery.graphql"
import LoadingScreen from "../../components/loadingScreen"
import StartQuizMutation from "../../components/relay/mutations/StartQuizMutation"

const Team: React.FC<ComponentProps> = ({ viewer, environment, setSuccessMessage, refetch, setErrorMessage }) => {
    const [startQuiz, setStartQuiz] = React.useState(false)
    const { data, error, isLoading, retry } = useQuery<GetQuizStatusQuery>(query)
   
    React.useEffect(() => {
        if (Boolean(data)) {
            setStartQuiz(data.getQuizDetails.userQuizStatus === "STARTED" ? true : false)
        }

    }, [data])
    if (isLoading) {
        return <LoadingScreen loading />
    }






    const handleStartQuiz = () => {
        StartQuizMutation(environment, {
            onCompleted: () => {
                setSuccessMessage("Quiz has Started")
                setStartQuiz(true)
            }, onError: () => { setErrorMessage("Something went wrong") }
        })
    }


    return startQuiz ? (
      <QuizPage
        viewer={viewer}
        environment={environment}
        setSuccessMessage={setSuccessMessage}
        refetch={refetch}
        setErrorMessage={setErrorMessage}
      />
    ) : (
      <>
        <Instructions
          viewer={viewer}
          environment={environment}
          setSuccessMessage={setSuccessMessage}
          refetch={refetch}
          setErrorMessage={setErrorMessage}
        />
        <Grid container spacing={0} alignItems="center" justify="center">
          <Box mb={4}>
            <Button onClick={handleStartQuiz} variant="contained" color="primary">
              Start Quiz
            </Button>
          </Box>
        </Grid>
      </>
    );
}

export default Team