import computer from "../../assets/Computer/computer.svg"
const Computer = () => {
  return (
    <>
      <div className="flex  justify-center h-full flex-wrap">
        <img src={computer}></img>
        <div className="bg-white">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 ">
            <h2 className="text-2xl font-semibold pb-5">Computer Education</h2>
            <div className="space-y-4">
              <details className="w-full rounded-lg ring-1 primary">
                <summary className="px-4 py-6 font-semibold">
                Computer Basics - Duration 1 Month
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                  <ul className="bg-white rounded-lg border border-accent w-full text-gray-900 text-center">
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Windows
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Fingering Practice
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    MS-Word
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    MS-Power point Basic Internet
                    </li>
                  </ul>
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 primary">
                <summary className="px-4 py-6 font-semibold">
                Computer Applications - Duration 2 Months
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                  <ul className="bg-white rounded-lg border border-accent w-full text-gray-900 text-center">
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Windows
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    MS-Word, MS-Excel, MS-Powerpoint
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Applications of Internet and usage
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Scanning file converting and Printing Technologies.
                    </li>
                  </ul>
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 primary">
                <summary className="px-4 py-6 font-semibold">
                Computer Programming - Duration 2 Months
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                  <ul className="bg-white rounded-lg border border-accent w-full text-gray-900 text-center">
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    C
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    C++
                    </li>
                  </ul>
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 primary">
                <summary className="px-4 py-6 font-semibold">
                Computer Application & Programming - Duration 6 Months
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                  <ul className="bg-white rounded-lg border border-accent w-full text-gray-900 text-center">
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Computer concepts
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Windows
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Networking principles
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Microsoft office
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    C, C++ Programming
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Visual Basic
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    SQL/Oracle
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    Internet
                    </li>
                  </ul>
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 primary">
                <summary className="px-4 py-6 font-semibold">
                Client Server Programming - Duration 3 Months
                </summary>

                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                  <ul className="bg-white rounded-lg border border-accent w-full text-gray-900 text-center">
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    VB
                    </li>
                    <li className="px-6 py-2 border-b border-accent w-full rounded-t-lg">
                    MS-access/ Oracle / SQL
                    </li>
                  </ul>
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Computer;
