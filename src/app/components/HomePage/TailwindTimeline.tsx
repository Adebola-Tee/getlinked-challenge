"use client";

export const TailwindTimeLine = () => {
  return (
    <>
      <section className="hidden md:block">
        <div>
          <p className="text-[20px] font-bold  mx-auto my-4 md:text-[32px] text-center font-heading">
            Timeline
          </p>
          <p className="text-center text-[12px] w-[240px] leading-6 mx-auto mb-4 md:w-[350px] md:text-[14px] lg:mb-20 ">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg text-right">
            <h2 className="timeline__title text-[#D434FE]">Hackathon Announcement</h2>
            <p className="timeline__paragraph max-w-[500px] ml-auto text-[14px] mr-0">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to registe
            </p>
          </div>
          <div className="timeline__middle my-2">
            <div className="timeline__point text-center text-white flex items-center justify-center">
              1
            </div>
          </div>
          <div className="timeline__component">
            <div className="text-[#D434FE] timeline__date timeline__date--right">
              November 18, 2023
            </div>
          </div>
          <div className="timeline__component text-right">
            <div className="text-[#D434FE] timeline__date">February 25, 2019</div>
          </div>
          <div className="timeline__middle my-2">
            <div className="timeline__point text-center text-white flex items-center justify-center">
              2
            </div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="text-[#D434FE] timeline__title">Teams Registration begins</h2>
            <p className="timeline__paragraph max-w-[500px] mr-auto text-[14px] ml-0">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="timeline__component timeline__component--bg text-right">
            <h2 className=" text-[#D434FE] timeline__title">Teams Registration ends</h2>
            <p className="timeline__paragraph max-w-[500px] ml-auto text-[14px] mr-0">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className="timeline__middle my-2">
            <div className="timeline__point text-center text-white flex items-center justify-center">
              3
            </div>
          </div>
          <div className="timeline__component">
            <div className="text-[#D434FE] timeline__date timeline__date--right">
              November 18, 2023
            </div>
          </div>
          <div className="timeline__component text-right">
            <div className="text-[#D434FE] timeline__date timeline__date--right">
              November 18, 2023
            </div>
          </div>
          <div className="timeline__middle my-2">
            <div className="timeline__point text-center text-white flex items-center justify-center">
              4
            </div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="text-[#D434FE] timeline__title">
              Announcement of the accepted teams and ideas
            </h2>
            <p className="timeline__paragraph max-w-[500px] mr-auto text-[14px] ml-0">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>

          <div className="timeline__component timeline__component--bg text-right">
            <h2 className="text-[#D434FE] timeline__title">Teams Registration ends</h2>
            <p className="timeline__paragraph max-w-[500px] ml-auto text-[14px] mr-0">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className="timeline__middle timeline__middle">
            <div className="timeline__point text-center text-white flex items-center justify-center">
              5
            </div>
          </div>
          <div className="timeline__component ">
            <div className="text-[#D434FE] timeline__date timeline__date--right">
              November 18, 2023
            </div>
          </div>
          <div className="timeline__component timeline__component--bottom pt-32 text-right">
            <div className="text-[#D434FE] timeline__date">November 18, 2023</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point timeline__point--bottom text-center text-white flex items-center justify-center">
              6
            </div>
          </div>
          <div className="timeline__component timeline__component--bottom timeline__component--bg pt-32">
            <h2 className="text-[#D434FE] timeline__title">Demo Day</h2>
            <p className="timeline__paragraph max-w-[500px] mr-auto text-[14px] ml-0">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
