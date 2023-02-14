import Skeleton from "react-loading-skeleton";

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill()
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="left-col">
          <Skeleton circle direction="rtl" height={50} width={50} />
        </div>

        <div className="right-col">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
};
