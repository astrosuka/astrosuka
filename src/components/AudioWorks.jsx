import selectedWorksData from "../data/selectedWorksData";

export default function AudioWorks({ listOpen, handleListClick }) {
  return (
    <div className="fixed top-0 w-screen">
      {listOpen && (
        <div className="fixed left-0 top-0 h-screen w-screen backdrop-blur-md md:hidden"></div>
      )}

      <div
        className={`bg-contw no-scrollbar z-10 mt-3 w-[calc(100vw-3rem)] overflow-y-auto rounded-md border-gray-700 backdrop-blur-md md:mx-auto md:mt-6 md:w-[70vw] ${listOpen ? "h-[calc(100vh-3rem)] pb-4 md:h-[calc(100vh-6rem)] md:border" : ""}`}
      >
        {listOpen && selectedWorksData && (
          <>
            <div className="sticky top-0 pt-2 opacity-95 md:px-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-display text-xl">Audio Related Works</h3>
                <div className="flex cursor-pointer" onClick={handleListClick}>
                  x
                </div>
              </div>
              <div className="font-sec flex items-end justify-between border-b border-gray-700 py-1 text-xs capitalize opacity-50 lg:items-center">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_200px_auto]">
                  <div className="">artist</div>
                  <div className="italic">release</div>
                  <div>label</div>
                </div>
                <div>role</div>
              </div>
            </div>
            <div className="flex flex-col divide-y divide-gray-700 md:px-6">
              {selectedWorksData.map((data, index) => {
                return (
                  <a
                    href={data.link}
                    target="_blank"
                    key={index}
                    className="hover:bg-otl flex items-start justify-between py-1 lg:items-center"
                  >
                    <div className="grid grid-cols-1 text-sm capitalize lg:grid-cols-[200px_200px_auto]">
                      <div className="">{data.artist}</div>
                      <div className="italic">{data.release}</div>
                      <div className="font-light">{data.label}</div>
                    </div>
                    <div className="font-sec flex gap-1 pt-1 md:gap-2 lg:pt-0">
                      {data.role.map((singleRole, index) => {
                        return (
                          <div key={singleRole + index}>
                            {singleRole == "production" && (
                              <div className="rounded border border-gray-700 bg-[var(--role-1)] px-2 py-1 text-xs">
                                prod
                              </div>
                            )}
                            {singleRole == "mixing" && (
                              <div className="rounded border border-gray-700 bg-[var(--role-2)] px-2 py-1 text-xs">
                                mix
                              </div>
                            )}
                            {singleRole == "mastering" && (
                              <div className="rounded border border-gray-700 bg-[var(--role-3)] px-2 py-1 text-xs">
                                master
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
