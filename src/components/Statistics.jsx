
import React from "react";
import s from "./Feedback.module.css"
const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
        <div>
            <h2 className={s.statisticsTitle}>Statistics</h2>
            <p className={s.post}>Good: {good}</p>
            <p className={s.post}>Neutral: {neutral}</p>
            <p className={s.post}>Bad: {bad}</p>
            <p className={s.post}>Total: {total}</p>
            <p className={s.postFedback}>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Statistics;