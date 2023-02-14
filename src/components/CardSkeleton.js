import Skeleton from "react-loading-skeleton";

export const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="left-col">
        <Skeleton circle direction="rtl" height={50} width={50} />
      </div>

      <div className="right-col">
        <Skeleton />
      </div>
    </div>
  );
};
