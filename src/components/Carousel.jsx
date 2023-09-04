import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel() {
  const handleDragStart = (e) => e.preventDefault();
  

  const items = [
    <div>
      <figure>
       
        <img
          src="https://pbs.twimg.com/media/F5GHmiOXYAADooh?format=webp&name=small"
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />
        <figcaption>
          <div className="matter">
            <div className="matter-img">
              <img
                src="https://pbs.twimg.com/media/F5GHmiOXYAADooh?format=webp&name=small"
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Web Designing Contests</strong>
              </h3>
            </div>
            <div>
              <p>
                A web design contest is a competition in which individuals or
                teams create and showcase their web design skills by designing
                and building websites based on specific requirements and
                guidelines. These contests provide an opportunity for designers
                and developers to demonstrate their creativity, technical
                proficiency, and problem-solving abilities. Web design contests
                can be organized for various purposes, including educational,
                professional development, or to meet specific project needs.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
    <div>
      <figure>
        <img
          src="https://media.istockphoto.com/id/1202688372/photo/error-programming-social-networking-seo-search-and-service-delivery-concept-chart-with.jpg?s=612x612&w=0&k=20&c=tyOFWa-1ZKzlG8vOkTii1WkYPpWyOD5CAGtBJ4yfZ6E="
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />
        <figcaption>
          <div className="matter">
            <div>
              <img
                src="https://media.istockphoto.com/id/1202688372/photo/error-programming-social-networking-seo-search-and-service-delivery-concept-chart-with.jpg?s=612x612&w=0&k=20&c=tyOFWa-1ZKzlG8vOkTii1WkYPpWyOD5CAGtBJ4yfZ6E="
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Debugging Contests</strong>
              </h3>
            </div>
            <div>
              <p>
                A debugging contest, also known as a debugging competition, is
                an event or challenge where participants compete to identify and
                fix software bugs or errors in a set of given programs or
                codebases. The primary objective of a debugging contest is to
                test and improve participants' debugging skills, problem-solving
                abilities, and familiarity with programming languages and tools.
                These contests are often popular among programmers, software
                developers, and computer science enthusiasts.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
    <div>
      <figure>
        <img
          src="https://pbs.twimg.com/media/F5GKgijXIAAATxD?format=webp&name=small"
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />
        <figcaption>
          <div className="matter">
            <div>
              <img
                src="https://pbs.twimg.com/media/F5GKgijXIAAATxD?format=webp&name=small"
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Quizes</strong>
              </h3>
            </div>
            <div>
              <p>
                Quizzes are structured assessments or tests that are designed to
                evaluate a person's knowledge, skills, or understanding of a
                particular subject or topic. They come in various formats and
                can serve different purposes, ranging from educational and
                training assessments to recreational and competitive challenges.
                Here are some key aspects of quizzes:Educational
                Assessment,Training and Learning,Entertainment,Competitions.
                Quizzes can be timed, with participants required to complete
                them within a specified time frame. This is common in
                competitive and standardized testing scenarios.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
    <div>
      <figure>
        <img
          src="https://pbs.twimg.com/media/F5GKqvmWUAAr-3g?format=webp&name=small"
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />

        <figcaption>
          <div className="matter">
            <div>
              <img
                src="https://pbs.twimg.com/media/F5GKqvmWUAAr-3g?format=webp&name=small"
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Tech Talks</strong>
              </h3>
            </div>
            <div>
              <p>
                Tech talks, short for technology talks, are presentations,
                lectures, or discussions that focus on various aspects of
                technology, often delivered by experts, professionals, or
                enthusiasts in the field. These talks aim to inform, educate,
                and engage audiences on a wide range of technology-related
                topics, trends, innovations, and issues. Tech talks are
                prevalent in both physical and virtual settings, including
                conferences, seminars, webinars, workshops, and online
                platforms.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
    <div>
      <figure>
        <img
          src="https://pbs.twimg.com/media/F5GHkHGWwAAhcRe?format=webp&name=small"
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />
        <figcaption>
          <div className="matter">
            <div>
              <img
                src="https://pbs.twimg.com/media/F5GHkHGWwAAhcRe?format=webp&name=small"
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Hackathons</strong>
              </h3>
            </div>
            <div>
              <p>
                A hackathon is a collaborative and time-bound event where
                individuals or teams come together to create innovative
                solutions, usually in the fields of technology, software
                development, and design. Participants work intensively, often
                for a day or a weekend, to develop software applications,
                hardware prototypes, or solve specific problems. Hackathons are
                known for their fast-paced, creative, and competitive
                atmosphere, and they have gained popularity across various
                industries and sectors. Here are some key aspects of hackathons:
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
    <div>
      <figure>
        <img
          src="https://pbs.twimg.com/media/F5GyuVfWUAA2MbD?format=webp&name=small"
          onDragStart={handleDragStart}
          role="presentation"
          width="700"
          height="400"
        />
        <figcaption>
          <div className="matter">
            <div className="matter-img">
              <img
                src="https://pbs.twimg.com/media/F5GyuVfWUAA2MbD?format=webp&name=small"
                onDragStart={handleDragStart}
                role="presentation"
                width="300"
                height="200"
              />
            </div>
            <div>
              <h3>
                <strong>Mock Interviews</strong>
              </h3>
            </div>
            <div>
              <p>
                Mock interviews are simulated job interviews designed to help
                individuals prepare for real job interviews. These practice
                interviews closely mimic the format and conditions of actual job
                interviews and serve several valuable purposes: Skill
                development,Confidence Building,Feedback and
                Assessment,Customized Preparation,Interview Strategy,etc..
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>,
  ];
  return (
    <div>
      
      <AliceCarousel
        mouseTracking
        disableDotsControls
        autoPlayInterval={3000}
        infinite
        items={items}
        autoPlay
      />
    </div>
  );
}

export default Carousel;
