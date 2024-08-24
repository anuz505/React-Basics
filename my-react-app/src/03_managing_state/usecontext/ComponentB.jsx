import ComponentC from "./ComponentC";

export default function ComponentB() {
  return (
    <>
      <div className="Box">
        <p>ComponentB</p>
        <ComponentC />
      </div>
    </>
  );
}
