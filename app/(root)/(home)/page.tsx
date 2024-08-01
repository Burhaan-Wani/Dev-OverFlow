import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const Home = () => {
    const questions = [
        {
            _id: "1",
            title: "What is the best way to learn TypeScript?",
            tags: [
                { _id: "1", name: "TypeScript" },
                { _id: "2", name: "Programming" },
            ],
            author: {
                _id: "1",
                name: "Alice Johnson",
                picture: "https://example.com/picture1.jpg",
            },
            upvotes: 123,
            views: 456,
            answers: [
                {
                    _id: "1",
                    content:
                        "You can start by reading the official documentation and practicing.",
                },
                {
                    _id: "2",
                    content:
                        "There are great courses on Udemy and free resources on YouTube.",
                },
            ],
            createdAt: new Date("2021-07-01T10:00:00Z"),
        },
        {
            _id: "2",
            title: "How to implement authentication in a React application?",
            tags: [
                { _id: "3", name: "React" },
                { _id: "4", name: "Authentication" },
            ],
            author: {
                _id: "2",
                name: "Bob Smith",
                picture: "https://example.com/picture2.jpg",
            },
            upvotes: 98,
            views: 322,
            answers: [
                {
                    _id: "3",
                    content:
                        "You can use libraries like Firebase or Auth0 for authentication.",
                },
                {
                    _id: "4",
                    content:
                        "Consider implementing JWT tokens for better security.",
                },
            ],
            createdAt: new Date("2024-06-15T14:30:00Z"),
        },
        {
            _id: "3",
            title: "What are the benefits of using GraphQL over REST?",
            tags: [
                { _id: "5", name: "GraphQL" },
                { _id: "6", name: "API" },
            ],
            author: {
                _id: "3",
                name: "Charlie Davis",
                picture: "https://example.com/picture3.jpg",
            },
            upvotes: 156,
            views: 789,
            answers: [
                {
                    _id: "5",
                    content:
                        "GraphQL allows for more flexible queries and reduces over-fetching.",
                },
                {
                    _id: "6",
                    content:
                        "It's easier to evolve APIs with GraphQL without breaking existing clients.",
                },
            ],
            createdAt: new Date("2023-08-01T09:00:00Z"),
        },
    ];

    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Link
                    href={"/ask-question"}
                    className="flex justify-end max-sm:w-full"
                >
                    <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
                        Ask a Question
                    </Button>
                </Link>
            </div>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchbar
                    route={"/"}
                    iconPosition={"left"}
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for questions"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                    containerClasses="hidden max-md:flex"
                />
            </div>
            <HomeFilters />
            <div className="mt-10 flex w-full flex-col gap-6">
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            title={question.title}
                            tags={question.tags}
                            author={question.author}
                            upvotes={question.upvotes}
                            views={question.views}
                            answers={question.answers}
                            createdAt={question.createdAt}
                        />
                    ))
                ) : (
                    <NoResult
                        title="There are no questions to show"
                        description="Be the first to break the silence! 🚀 Ask a question and
                        kickstart the discussion. our query could be the next big thing
                        others learn from. Get involved! 💡"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                )}
            </div>
        </>
    );
};

export default Home;
