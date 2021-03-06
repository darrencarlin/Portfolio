import React, { useState } from "react"

import MainLayout from "../layouts/MainLayout"

const Talks = () => {
  const [clicked, setClicked] = useState(false)

  const talks = [
    {
      year: "2018",
      talks: [{ title: "Coming soon...", text: "Coming soon..." }],
    },
    {
      year: "2019",
      talks: [
        {
          date: "September, 2019",
          title: "The Imposter feeling",
          meetup: "SSA GDG Summit",
        },

        {
          date: "November, 2019",
          title: "Volunter",
          text: "GDG Onitsha Devfest",
        },
      ],
    },
    {
      year: "2020",
      talks: [
        {
          date: "July, 2020",
          title: "The Imposter feeling",
          text: "WTM Lagos International Women's Day",
        },
      ],
    },
  ]

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <MainLayout
      id="talks"
      className=" main-content u-padding-left-small u-padding-right-small u-margin-top-medium"
    >
      <div className="talks-header u-center-text text-color-primary w-80">
        <h1>Past Talks</h1>
        <p className="u-margin-bottom-medium"></p>
      </div>

      <div className="container">
        {talks.map((item, index) => {
          return (
            <div
              className="accordion"
              onClick={() => toggle(index)}
              key={index}
              onKeyDown={toggle}
              role="button"
              tabIndex="0"
            >
              <div className="accordion-item" id="question1">
                <button type="button" className="accordion-link" href="#">
                  {item.year}

                  <i
                    className={`fa ${
                      clicked === index ? "fa-angle-down" : "fa-angle-right"
                    }`}
                  />
                </button>

                {item.talks.map((elem, idx) => {
                  return (
                    <div
                      className={`answer ${clicked === index && "open"}`}
                      key={idx}
                    >
                      <p>{elem.date}</p>
                      <p>{elem.title}</p>
                      <p>{elem.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </MainLayout>
  )
}

export default Talks
