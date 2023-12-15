const Pagination = ({
  currentPage,
  lastPage,
  fetchMoreBlogposts,
}: {
  currentPage: number;
  lastPage: number;
  fetchMoreBlogposts: (pageNumber: number) => void;
}) => {
  const createRangeOfPages = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(undefined)
      .map((_, i) => i + start);
  };

  // Creates the pagination. It returns an array already set-up
  const createPagination = (
    currentPage: number,
    pageCount: number,
  ): (number | string)[] => {
    let delta: number;
    if (pageCount <= 7) {
      // delta === 7: [1 2 3 4 5 6 7]
      delta = 7;
    } else {
      // delta === 2: [1 ... 4 5 6 ... 10]
      // delta === 4: [1 2 3 4 5 ... 10]
      delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
    }

    const range = {
      start: Math.round(currentPage - delta / 2),
      end: Math.round(currentPage + delta / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === pageCount) {
      range.start += 1;
      range.end += 1;
    }

    let pages: any =
      currentPage > delta
        ? createRangeOfPages(
            Math.min(range.start, pageCount - delta),
            Math.min(range.end, pageCount),
          )
        : createRangeOfPages(1, Math.min(pageCount, delta + 1));

    const withDots = (value: number, pair: (number | string)[]) =>
      pages.length + 1 !== pageCount ? pair : [value];

    if (pages[0] !== 1) {
      pages = withDots(1, [1, "..."]).concat(pages);
    }

    if (pages[pages.length - 1] < pageCount) {
      pages = pages.concat(withDots(pageCount, ["...", pageCount]));
    }

    return pages;
  };

  // Create pagination
  const blogPagination = createPagination(currentPage, lastPage);

  return (
    <div className="mt-8 flex flex-row items-center justify-center">
      <button
        disabled={currentPage <= 1 ? true : false}
        onClick={() => fetchMoreBlogposts(currentPage - 1)}
        className={`group mr-1 flex flex-row transition-all ${
          currentPage <= 1
            ? "cursor-default text-sb-grey-500"
            : "text-sb-primary-100 hover:text-sb-primary-200 focus:text-sb-primary-200"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`mr-1 w-[1rem] rotate-180  transition-all  ${
            currentPage <= 1
              ? "fill-sb-grey-500"
              : "fill-sb-primary-100 group-hover:fill-sb-primary-200 group-focus:fill-sb-primary-200"
          }`}
        >
          <path d="M17.086,11L3,11L3,13L17.086,13L14.086,16L15.5,17.414L20.914,12L15.5,6.586L14.086,8L17.086,11Z" />
        </svg>
        <span>Previous page</span>
      </button>
      {blogPagination.map((pageElement, index) =>
        pageElement === "..." ? (
          <span key={index} className="mr-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => fetchMoreBlogposts(pageElement as number)}
            className={`mx-2 rounded-xl px-2 py-1 text-sb-grey-700 transition-all hover:bg-sb-grey-200 hover:text-sb-grey-700 focus:bg-sb-grey-200 ${
              pageElement === currentPage
                ? "bg-sb-grey-100 font-bold text-sb-grey-900"
                : ""
            }`}
          >
            {pageElement}
          </button>
        ),
      )}
      <button
        onClick={() => fetchMoreBlogposts(currentPage + 1)}
        className="group ml-1 flex flex-row text-sb-primary-100 transition-all hover:text-sb-primary-200 focus:text-sb-primary-200"
      >
        Next page
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="ml-1 w-[1rem] fill-sb-primary-100 transition-all group-hover:fill-sb-primary-200 group-focus:fill-sb-primary-200"
        >
          <path d="M17.086,11L3,11L3,13L17.086,13L14.086,16L15.5,17.414L20.914,12L15.5,6.586L14.086,8L17.086,11Z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
