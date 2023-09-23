"use client";

export const TailwindTimeThree = () => {
  return (
    <>
      <section className="md:hidden">
        <div>
          <p className="text-[20px] font-bold  mx-auto my-4 md:text-[32px] text-center font-heading">
            Timeline
          </p>
          <p className="text-center text-[12px] w-[240px] leading-6 mx-auto mb-4 md:w-[400px] md:text-[14px] lg:mb-20">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-24">
                1
              </div>
              <div className="timeline-content">
                <h3>Hackathon Announcement</h3>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-24">
                2
              </div>
              <div className="timeline-content">
                <h3>Teams Registration begins</h3>
                <p>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-24">
                3
              </div>
              <div className="timeline-content">
                <h3>timeline item title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-24">
                4
              </div>
              <div className="timeline-content">
                <h3>timeline item title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-24">
                5
              </div>
              <div className="timeline-content">
                <h3>timeline item title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>

            <div className="timeline-item ">
              <div className="timeline-dot text-center text-white flex items-center justify-center mt-32">
                6
              </div>
              <div className="timeline-content">
                <h3>timeline item title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="timeline-date">November 18, 2023</div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
