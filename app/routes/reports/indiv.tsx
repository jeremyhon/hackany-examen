import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { listPeerReviews } from "~/models/peerreview.server";

enum ReportsTabs {
    System,
    Peer,
    Customer
}

export const loader: LoaderFunction = async () => {
  const peerReviews = await listPeerReviews();
  console.log(peerReviews)
  return json<LoaderData>({ peerReviews: [], foo: 'bar' });
};

type LoaderData = {
  peerReviews: Awaited<ReturnType<typeof listPeerReviews>>;
  foo: string
};

 function Peer() {
  const data = useLoaderData() as LoaderData;
  console.log(data)
  return (
    <div className="" id="tabs-peer" role="tabpanel">
        <div>
            <span>From: Albert</span>
            <span>Score 1: 3</span>
            <span>Score 2: 4</span>
            <span>Score 3: 4</span>
            <span>Additional Text</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa felis, ultrices quis lacinia ac, finibus vel urna. Vestibulum at velit nisi. Donec rutrum volutpat laoreet. Proin condimentum ut libero eu faucibus. Nulla facilisi. Donec tincidunt est nec mi tristique tempor. Cras ac lobortis elit. In sed semper augue, nec sodales velit.</p>
          </div>
      {data?.peerReviews?.map((peerReview) => {
        return (
          <div id={peerReview.id}>
            <span>Score 1: {peerReview.scoreFirst}</span>
            <span>Score 2: {peerReview.scoreSecond}</span>
            <span>Score 3: {peerReview.scoreThird}</span>
            <span>Additional Text</span>
            <p>{peerReview.feedbackText}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Indiv() {
  const [selectedTab, setSelectedTab] = React.useState<ReportsTabs>(ReportsTabs.System);
  return (
    <div>
        <a href="/reports">
            <img src="https://files.slack.com/files-pri/T6BS929EZ-F03ENMKS8JH/navigation_bar.png?pub_secret=25409c3865"/>
        </a>
        <div className="flex flex-row">

        
        <img className="mt-2" src="https://files.slack.com/files-pri/T6BS929EZ-F03FFCJ9XL0/group_484.png?pub_secret=e8e029eeb1"/>
        <div>
      This is the indiv screen

      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li className="nav-item  text-center" role="presentation">
          <a
            href="#system"
            onClick={() => setSelectedTab(ReportsTabs.System)}
            className="
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2 border-transparent px-6 py-3
      text-xs
      font-medium
      uppercase
      leading-tight hover:border-transparent hover:bg-gray-100
      focus:border-transparent
        "
            role="tab"
          >
            System
          </a>
        </li>
        <li className="nav-item  text-center" role="presentation">
          <a
            href="#peer"
            onClick={() => setSelectedTab(ReportsTabs.Peer)}
            className="
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            Peer
          </a>
        </li>
        <li className="nav-item  text-center" role="presentation">
          <a
            href="#customer"
            onClick={() => setSelectedTab(ReportsTabs.Customer)}
            className="
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Customer
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        {selectedTab === ReportsTabs.System ? (
          <div className="" id="tabs-system" role="tabpanel">
            System Review
          </div>
        ) : selectedTab === ReportsTabs.Peer ? (
          <Peer />
        ) : selectedTab === ReportsTabs.Customer ? (
          <div className="" id="tabs-customer" role="tabpanel">
            <img src="https://files.slack.com/files-pri/T6BS929EZ-F03F47WDJDP/group_483.png?pub_secret=e381702ba9" />
          </div>
        ) : (
          <div className="" id="tabs-error" role="tabpanel">
            Unknown tab
          </div>
        )}
      </div>
    </div></div>
    </div>
  );
}
