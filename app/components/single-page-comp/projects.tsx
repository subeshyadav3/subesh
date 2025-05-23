"use client"

import { useState } from "react"
import ProjectCard from "../projectcard"
import useInViewAnimation from "@/app/hooks/useInViewAnimation"

export default function ProjectsPage() {
  const [showMore, setShowMore] = useState(false)
  const isInView = useInViewAnimation(0.8, "projects")
  const [multiPhoto, setMultiPhoto] = useState({
    aqi: {
      aqi: {
        photos: [
          "/projects/aqi.png",
          "/projects/aqi1.png",
        ]
      }
    }
  })

  return (
    <div id='projects' className=" flex flex-col mt-10 sm:ml-[100px] lg:ml-[200px] pl-2 sm:pl-0 ">
      <div className="space-y-8">
        <div>
          <h1 className={`text-3xl  font-bold text-[#90A0D9] title-line opacity-0 ${isInView ? "hero-anim-title opacity-100 " : ""}`}>Projects</h1>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Tech Store"
            description="A full-stack e-commerce website developed using the MERN stack, admin and user dashboard and all features."
            photo="/projects/store.png"
            stack={["React", "NodeJS", "ExpressJS", "MongoDB"]}
            projectLink="https://frontendstore-five.vercel.app/"
            githubLink="https://github.com/subeshyadav3/store"
            isInView={isInView}
            delay="delay-200"
          />

          <ProjectCard
            title="AQI Predictor"
            description="An end-to-end data science project that analyzes historical air quality trends in Kathmandu, predicts AQI using machine learning, and provides real-time forecasting using Facebook Prophet — all wrapped in an interactive Streamlit dashboard."
            photo={multiPhoto.aqi.aqi.photos}
            stack={["Python", "Streamlit", "Pandas/Numpy"]}
            projectLink="https://kathmanduairqualityforecasting.streamlit.app/"
            githubLink="https://github.com/subeshyadav3/AQI_Prediction_Kathmandu"
            isInView={isInView}
            delay="delay-300"
          />

          <ProjectCard
            title="NPL API"
            description="This is a comprehensive API for the Nepal Premier League, providing all the necessary data to facilitate in-depth analysis and insights."
            photo="/projects/npl.png"
            stack={["NodeJS", "ExpressJS"]}
            projectLink="https://nepal-premiere-league-npl-api.vercel.app/"
            githubLink="https://github.com/subeshyadav3/Nepal_Premier_League-NPL-_API"
            isInView={isInView}
            delay="delay-400"
          />

          {showMore && (
            <>
              <ProjectCard
                title="WhiteBoard App"
                description="An interactive whiteboard using concepts of computer graphics as a project for educational purposes."
                photo="/projects/whiteboard.png"
                stack={["HTML", "CSS", "JavaScript"]}
                projectLink="http://subesh420.com.np/"
                githubLink="https://github.com/subeshyadav3/whiteboard"
                isInView={isInView}
                delay="delay-300"
              />

              <ProjectCard
                title="Next.js Blog App"
                description="A full-featured blog application built with Next.js. It includes CRUD functionality, Clerk authentication, and a clean user interface for managing blog posts."
                photo="/projects/blog.png"
                stack={["Next.js", "TypeScript", "Tailwind", "Clerk"]}
                projectLink="https://github.com/subeshyadav3/blog_app"
                githubLink="https://github.com/subeshyadav3/blog_app"
                isInView={isInView}
                delay="delay-200"
              />


              <ProjectCard
                title="Flappy Bird"
                description="A custom implementation of the classic Flappy Bird game, developed with my own logic to deepen my understanding and enhance my skills in JavaScript."
                photo="/projects/flappy.png"
                stack={["HTML", "CSS", "JavaScript"]}
                projectLink="https://subeshyadav3.github.io/flappybird/"
                githubLink="https://github.com/subeshyadav3/flappybird"
                isInView={isInView}
                delay="delay-400"
              />
            </>
          )}
        </div>

        {!showMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
