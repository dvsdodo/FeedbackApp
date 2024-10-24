import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AbouticonLink from "./components/AbouticonLink";

function App() {
    const [feedback, setFeedback] = useState (FeedbackData);
    const deleteFeedback = (id) => {
        if (window.confirm("Are You sure that You want to delete this item?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        };
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);        
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
                <AbouticonLink />
            </div>
        </Router>
    )
};

export default App;