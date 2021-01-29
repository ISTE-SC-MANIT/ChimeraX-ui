import React from "react"
import { Typography, Divider } from "@material-ui/core";
import { GetQuizStartTimeQueryResponse } from "../__generated__/GetQuizStartTimeQuery.graphql";
import moment from "moment"

interface Props {
    startTime: GetQuizStartTimeQueryResponse,
    onTimeUp: () => void
}

const Timer: React.FC<Props> = ({ startTime, onTimeUp }) => {

    const currentTime = moment(new Date().toISOString())
    const quizStartTime = moment(startTime.getQuizDetails.quizStartTime)
    const minutesDiff = currentTime.diff(quizStartTime, "minutes")
    const secondDiff = currentTime.diff(quizStartTime, "second")
    console.log(minutesDiff)
    const [time, setTime] = React.useState(!Boolean(isNaN(minutesDiff)) ? { minute: 29 - minutesDiff, seconds: 60 - (secondDiff % 60) } : { minute: 30, seconds: 0 })
    React.useEffect(() => {
        const timer = setInterval(() => {
            if (time.seconds > 0) {
                setTime({ ...time, seconds: time.seconds - 1 })
            }
            if (time.seconds === 0) {
                if (time.minute <= 0) {
                    onTimeUp()
                    clearInterval(timer)
                } else {
                    setTime({ minute: time.minute - 1, seconds: 59 })
                }
            }
        }, 1000);

        return () => clearTimeout(timer);
    })
    return <> <Typography component="h1" variant="h5">
        {time.minute === 0 && time.seconds === 0
            ? <>Time's Up!</>
            : <>Time Remaining: {time.minute}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</>
        }
    </Typography>

    </>
}

export default Timer