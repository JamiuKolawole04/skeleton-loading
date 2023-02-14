import Skeleton from "react-loading-skeleton";

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill()
    .map((item, _i) => (
      <div className="card-skeleton" key={_i}>
        <div className="left-col">
          <Skeleton circle direction="rtl" height={50} width={50} />
        </div>

        <div className="right-col">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
};
