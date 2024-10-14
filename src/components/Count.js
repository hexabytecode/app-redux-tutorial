import { useSelector } from "react-redux";

export default function Count() {
  const count = useSelector((state) => state.count);

  return (
    <>
      <p>
        The following <strong>count</strong> property is being updated using
        Redux store & not using passed down props
      </p>
      <h4>{count}</h4>
    </>
  );
}
