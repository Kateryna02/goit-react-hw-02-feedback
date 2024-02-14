
import React, { Component } from "react";
import Button from "../components/button/Button.jsx";
import Statistics from "./Statistics";
import s from "./Feedback.module.css"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        hasFeedback: false
    };

    handleFeedback = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1,
            hasFeedback: true
        }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        return total > 0 ? Math.round((good / total) * 100) : 0;
    }

    render() {
        const { good, neutral, bad, hasFeedback } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className={s.feedback}>
                <h2 className={s.textitle}>Please leave feedback</h2>
                <div className={s.buttonRow}>
                    <Button className={s.feedbackButton} onClick={() => this.handleFeedback("good")} text="Good" />
                    <Button className={s.feedbackButton} onClick={() => this.handleFeedback("neutral")} text="Neutral" />
                    <Button className={s.feedbackButton} onClick={() => this.handleFeedback("bad")} text="Bad" />
                </div>
                {hasFeedback && (
                    <div>
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positivePercentage}
                        />
                    </div>
                )}
                {!hasFeedback && <p className={s.feedbackMessage}>There is no feedback</p>}
            </div>
        );
    }
}

export default Feedback;