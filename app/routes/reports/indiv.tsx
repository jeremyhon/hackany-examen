import React from "react";

enum ReportsTabs {
    System,
    Peer,
    Customer
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
          <div className="" id="tabs-peer" role="tabpanel">
            Peer Review
          </div>
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
